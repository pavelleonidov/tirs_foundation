<?php
namespace TIRS\TirsFoundation\ViewHelpers;

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
	}


	/**
	 * Resizes a given image (if required) and renders the respective img tag
	 *
	 * @see http://typo3.org/documentation/document-library/references/doc_core_tsref/4.2.0/view/1/5/#id4164427
	 * @param string $src a path to a file, a combined FAL identifier or an uid (integer). If $treatIdAsReference is set, the integer is considered the uid of the sys_file_reference record. If you already got a FAL object, consider using the $image parameter instead
	 * @param array $interchangeSettings
	 * @param boolean $treatIdAsReference given src argument is a sys_file_reference record
	 * @param FileInterface|AbstractFileFolder $image a FAL object
	 * @param string|bool $crop overrule cropping of image (setting to FALSE disables the cropping set in FileReference)
	 *
	 * @throws \TYPO3\CMS\Fluid\Core\ViewHelper\Exception
	 * @return string Rendered tag
	 */
	public function render($src = NULL, $interchangeSettings = NULL, $treatIdAsReference = FALSE, $image = NULL, $crop = null)
	{
		if (is_null($src) && is_null($image) || !is_null($src) && !is_null($image)) {
			throw new \TYPO3\CMS\Fluid\Core\ViewHelper\Exception('You must either specify a string src or a File object.', 1382284106);
		}
		$image = $this->imageService->getImage($src, $image, $treatIdAsReference);
		if ($crop === null) {
			$crop = $image instanceof FileReference ? $image->getProperty('crop') : null;
		}
		$interchangeData = [];

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
			if($key == 'large') {
				$this->tag->addAttribute('width', $processedImage->getProperty('width'));
				$this->tag->addAttribute('height', $processedImage->getProperty('height'));
			}
			$imageUri = $this->imageService->getImageUri($processedImage);

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

		return $this->tag->render();
	}
}

?>