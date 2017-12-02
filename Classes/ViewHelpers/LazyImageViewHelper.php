<?php
namespace TIRS\TirsFoundation\ViewHelpers;

use TYPO3\CMS\Core\Imaging\ImageManipulation\CropVariantCollection;
use TYPO3\CMS\Core\Resource\Exception\ResourceDoesNotExistException;
use TYPO3\CMS\Core\Resource\FileInterface;
use TYPO3\CMS\Core\Resource\FileReference;
use TYPO3\CMS\Extbase\Domain\Model\AbstractFileFolder;

/*******************************************************************
 *  Copyright notice
 *
 *  (c) 2017 Pavel Leonidov <info@pavel-leonidov.de>
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as
 *  published by the Free Software Foundation; either version 2 of
 *  the License, or (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ******************************************************************/

class LazyImageViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper
{

	/**
	 * @var string
	 */
	protected $tagName = 'img';

	/**
	 * @var \TYPO3\CMS\Extbase\Service\ImageService
	 */
	protected $imageService;

	/**
	 * @param \TYPO3\CMS\Extbase\Service\ImageService $imageService
	 */
	public function injectImageService(\TYPO3\CMS\Extbase\Service\ImageService $imageService)
	{
		$this->imageService = $imageService;
	}

	/**
	 * Initialize arguments.
	 *
	 * @return void
	 */
	public function initializeArguments()
	{
		parent::initializeArguments();
		$this->registerUniversalTagAttributes();
		$this->registerTagAttribute('alt', 'string', 'Specifies an alternate text for an image', false);
		$this->registerTagAttribute('ismap', 'string', 'Specifies an image as a server-side image-map. Rarely used. Look at usemap instead', false);
		$this->registerTagAttribute('longdesc', 'string', 'Specifies the URL to a document that contains a long description of an image', false);
		$this->registerTagAttribute('usemap', 'string', 'Specifies an image as a client-side image-map', false);

		$this->registerArgument('src', 'string', 'a path to a file, a combined FAL identifier or an uid (int). If $treatIdAsReference is set, the integer is considered the uid of the sys_file_reference record. If you already got a FAL object, consider using the $image parameter instead');
		$this->registerArgument('treatIdAsReference', 'bool', 'given src argument is a sys_file_reference record');
		$this->registerArgument('image', 'object', 'a FAL object');
		$this->registerArgument('crop', 'string|bool', 'overrule cropping of image (setting to FALSE disables the cropping set in FileReference)');
		$this->registerArgument('cropVariant', 'string', 'select a cropping variant, in case multiple croppings have been specified or stored in FileReference', false, 'default');

		$this->registerArgument('width', 'string', 'width of the image. This can be a numeric value representing the fixed width of the image in pixels. But you can also perform simple calculations by adding "m" or "c" to the value. See imgResource.width for possible options.');
		$this->registerArgument('height', 'string', 'height of the image. This can be a numeric value representing the fixed height of the image in pixels. But you can also perform simple calculations by adding "m" or "c" to the value. See imgResource.width for possible options.');
		$this->registerArgument('minWidth', 'int', 'minimum width of the image');
		$this->registerArgument('minHeight', 'int', 'minimum width of the image');
		$this->registerArgument('maxWidth', 'int', 'minimum width of the image');
		$this->registerArgument('maxHeight', 'int', 'minimum width of the image');
		$this->registerArgument('absolute', 'bool', 'Force absolute URL', false, false);
		$this->registerArgument('interchangeSettings', 'array', 'Breakpoint settings for given image', false, NULL);
	}


	/**
	 * Resizes a given image (if required) and renders the respective img tag
	 * @throws \TYPO3\CMS\Fluid\Core\ViewHelper\Exception
	 * @return string Rendered tag
	 */
	public function render()
	{
		if ((is_null($this->arguments['src']) && is_null($this->arguments['image'])) || (!is_null($this->arguments['src']) && !is_null($this->arguments['image']))) {
			throw new \TYPO3\CMS\Fluid\Core\ViewHelper\Exception('You must either specify a string src or a File object.', 1382284106);
		}

		try {


			$image = $this->imageService->getImage($this->arguments['src'], $this->arguments['image'], $this->arguments['treatIdAsReference']);
			$cropString = $this->arguments['crop'];
			if ($cropString === null && $image->hasProperty('crop') && $image->getProperty('crop')) {
				$cropString = $image->getProperty('crop');
			}
			$cropVariantCollection = CropVariantCollection::create((string)$cropString);
			$cropVariant = $this->arguments['cropVariant'] ?: 'default';
			$cropArea = $cropVariantCollection->getCropArea($cropVariant);

			$interchangeData = [];

			$interchangeSettings = $this->arguments['interchangeSettings'];

			foreach ($interchangeSettings as $key => $settings) {
				$processingInstructions = [
					'width' => (string)$settings['width'],
					'height' => (string)$settings['height'],
					'minWidth' => (string)$settings['minWidth'],
					'minHeight' => $settings['minHeight'],
					'maxWidth' => (string)$settings['maxWidth'],
					'maxHeight' => $settings['maxHeight'],
					'crop' => $cropArea->isEmpty() ? null : $cropArea->makeAbsoluteBasedOnFile($image)
				];


				$processedImage = $this->imageService->applyProcessingInstructions($image, $processingInstructions);
				if($key == 'default') {
					$this->tag->addAttribute('width', $processedImage->getProperty('width'));
					$this->tag->addAttribute('height', $processedImage->getProperty('height'));
				}
				$imageUri = $this->imageService->getImageUri($processedImage);

				if (!$this->tag->hasAttribute('data-focus-area')) {
					$focusArea = $cropVariantCollection->getFocusArea($cropVariant);
					if (!$focusArea->isEmpty()) {
						$this->tag->addAttribute('data-focus-area', $focusArea->makeAbsoluteBasedOnFile($image));
					}
				}

				$interchangeData[] = '[' . $imageUri . ', ' . $key . ']';
			}

			$this->tag->addAttribute('data-src', implode(',', $interchangeData));
			$this->tag->addAttribute('src', '/clear.gif');

			$alt = $image->getProperty('alternative');
			$title = $image->getProperty('title');

			if (empty($this->arguments['alt'])) {
				$this->tag->addAttribute('alt', $alt);
			}
			if (empty($this->arguments['title']) && $title) {
				$this->tag->addAttribute('title', $title);
			}
		} catch (ResourceDoesNotExistException $e) {
			// thrown if file does not exist
		} catch (\UnexpectedValueException $e) {
			// thrown if a file has been replaced with a folder
		} catch (\RuntimeException $e) {
			// RuntimeException thrown if a file is outside of a storage
		} catch (\InvalidArgumentException $e) {
			// thrown if file storage does not exist
		}


		return $this->tag->render();
	}
}

?>