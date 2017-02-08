<?php
namespace TIRS\TirsFoundation\ViewHelpers;

/*******************************************************************
 *  Copyright notice
 *
 *  (c) 2016 Pavel Leonidov <pavel.leonidov@exconcept.com>, EXCONCEPT GmbH
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


use TYPO3\CMS\Core\Resource\Exception\ResourceDoesNotExistException;
use TYPO3\CMS\Core\Resource\FileInterface;
use TYPO3\CMS\Core\Resource\FileReference;
use TYPO3\CMS\Core\Utility\DebugUtility;
use TYPO3\CMS\Extbase\Domain\Model\AbstractFileFolder;

/**
 * Generates interchange data from image object to apply for background images (with use of Foundation's Interchange feature and the Lazy Load XT library)
 *
 * = Examples =
 *
 * <code title="Background image Object">
 * <exc:bgImage image="{imageObject}" interchangeSettings="{small: {width: 300, height: 200}, medium: {width: 900, height: 560}, default: {width: 1200, height: 960}} />
 * </code>
 * <output>
 * <div class="background-image" data-lazy="[fileadmin/_processed_/323223424.png, small], [fileadmin/_processed_/323121223424.png, medium], [fileadmin/_processed_/322322124.png, default]" style="background-image: url('/clear.gif'); height: 960px;" />
 * </output>
 *
 */
class LazyBgImageViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper
{
	/**
	 * @var string
	 */
	protected $tagName = 'div';

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
	}

	/**
	 * Resizes a given image (if required) and renders the respective div tag
	 *
	 * @see http://typo3.org/documentation/document-library/references/doc_core_tsref/4.2.0/view/1/5/#id4164427
	 * @param string $src a path to a file, a combined FAL identifier or an uid (integer). If $treatIdAsReference is set, the integer is considered the uid of the sys_file_reference record. If you already got a FAL object, consider using the $image parameter instead
	 * @param array $interchangeSettings
	 * @param array $offset background-position
	 * @param boolean $treatIdAsReference given src argument is a sys_file_reference record
	 * @param FileInterface|AbstractFileFolder $image a FAL object
	 * @param string|bool $crop overrule cropping of image (setting to FALSE disables the cropping set in FileReference)
	 * @param string|bool $flexDimensions when set, width and height attributes will not be inserted
	 *
	 * @throws \TYPO3\CMS\Fluid\Core\ViewHelper\Exception
	 * @return string Rendered tag
	 */
	public function render($src = NULL, $interchangeSettings = NULL, $offset = array(), $treatIdAsReference = FALSE, $image = NULL, $crop = null, $flexDimensions=FALSE)
	{
		if (is_null($src) && is_null($image) || !is_null($src) && !is_null($image)) {
			throw new \TYPO3\CMS\Fluid\Core\ViewHelper\Exception('You must either specify a string src or a File object.', 1382284106);
		}

		try {

			$image = $this->imageService->getImage($src, $image, $treatIdAsReference);
			if ($crop === null) {
				$crop = $image instanceof FileReference ? $image->getProperty('crop') : null;
			}
			$interchangeData = [];

			$height = 0;
			$width = 0;
			foreach ($interchangeSettings as $key => $settings) {
				$processingInstructions = [
					'width' => (string)$settings['width'],
					'height' => (string)$settings['height'],
					'minWidth' => (string)$settings['minWidth'],
					'minHeight' => $settings['minHeight'],
					'maxWidth' => (string)$settings['maxWidth'],
					'maxHeight' => $settings['maxHeight'],
					'crop' => $crop
				];


				$processedImage = $this->imageService->applyProcessingInstructions($image, $processingInstructions);
				if($key == 'default') {
					$height = $processedImage->getProperty('height');
					$width = $processedImage->getProperty('width');
				}
				$imageUri = $this->imageService->getImageUri($processedImage);
				$interchangeData[] = '[' . $imageUri . ', ' . $key . ']';
			}

			$offset = (!empty($offset['x']) ? 'background-position-x: ' . $offset['x'] . ';' : '') . (!empty($offset['y']) ? 'background-position-y: ' . $offset['y'] . ';' : '');

			$this->tag->addAttribute('data-src', implode(',', $interchangeData));

			$dimensions = !$flexDimensions ? ' height: ' . $height . 'px;' : '';

			$this->tag->addAttribute('style', "background-image: url('/clear.gif');" . $dimensions . $offset);
			$this->tag->setContent($this->renderChildren());
			$this->tag->forceClosingTag(TRUE);

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
