# react-uploadcare-transformations

[![NPM](https://img.shields.io/npm/v/react-uploadcare-transformations.svg)](https://www.npmjs.com/package/react-uploadcare-transformations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Show images that are transformed using [Uploadcare](https://uploadcare.com/?via=vk10) image processing URLs. No need to write or generate the URL yourself. Just pass the UUID of the file, optionally pass the custom CDN and add the transformations - through attributes - you want to apply and the React component generates the image for you.

> This package is inspired by the [PHP Uploadcare Transformations](https://github.com/vormkracht10/php-uploadcare-transformations) package. Be sure to check that out when using PHP. At this moment it has 13 more transformations available than this package, those will be available in this package soon. 


- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
  * [Adding filename](#adding-filename)
  * [Auto rotate](#auto-rotate)
  * [Blur faces](#blur-faces)
  * [Enhance](#enhance)
  * [Flip](#flip)
  * [Format](#format)
  * [Grayscale](#grayscale)
  * [Invert](#invert)
  * [Miror](#miror)
  * [Preview](#preview)
  * [Progressive](#progressive)
  * [Quality](#quality)
  * [Rotate](#rotate)
  * [Set fill](#set-fill)
  * [Sharpen](#sharpen)
  * [Zoom objects](#zoom-objects)
- [Testing](#testing)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [Security Vulnerabilities](#security-vulnerabilities)
- [Credits](#credits)
- [License](#license)

## Requirements

- [React](https://reactjs.org/) 16.8.0 or higher
- [Uploadcare](https://uploadcare.com/?via=vk10) account
- [Node.js](https://nodejs.org/en/) 10.0.0 or higher

## Installation

```bash
npm install --save react-uploadcare-transformations
```

## Usage

<ol>
    <li>
        Include the <code>UCImage</code> component.
    </li>
     <li>
        Get the UUID of the file you want to show.
    </li>
     <li>
        Set your CDN url (optional).
    </li>
     <li>
        Create the transformation URL by adding one or more transformations to the component. Simply add an object with the correct values. You can add as much transformation methods as you want. 
    </li>
    <li>The component outputs an image. Want to add your own classes to the image? Simply add the <code>classname</code> property!</li>
</ol>

```jsx
import React from 'react'

import { UCImage } from 'react-uploadcare-transformations'

const App = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      preview={{ width: 300, height: 300 }}
      setFill={{ color: 'ff0000' }}
    />
  )
}

export default App
```

### List of possible transformations
Each transformation follows the documentation on Uploadcare which you may find <a href="https://uploadcare.com/docs/">here</a>. 
The current list of possible transformations and where to find the documentation:

| Transformation        | Uploadcare Documentation link           |
| ------------- |:-------------:|
| [Auto rotate](#auto-rotate)      | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/rotate-flip/#operation-autorotate">Link</a> |
| [Blur faces](#blur-faces) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/blur-sharpen/#operation-blur-region-faces">Link</a>      |
| [Enhance](#enhance) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/colors/#operation-enhance">Link</a>      |
| [Flip](#flip) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/colors/#operation-flip">Link</a>      |
| [Format](#format) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/compression/#operation-format">Link</a>      |
| [Grayscale](#grayscale) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/colors/#operation-grayscale">Link</a>      |
| [Invert](#invert) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/colors/#operation-inverting">Link</a>      |
| [Miror](#miror) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/colors/#operation-mirror">Link</a>      |
| [Preview](#preview) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/resize-crop/#operation-preview">Link</a>      |
| [Progressive](#progressive) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/compression/#operation-progressive">Link</a>      |
| [Quality](#quality) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/compression/#operation-quality">Link</a>      |
| [Rotate](#rotate) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/colors/#operation-rotate">Link</a>      |
| [Set fill](#set-fill) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/resize-crop/#operation-setfill">Link</a>      |
| [Sharpen](#sharpen) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/colors/#operation-sharpen">Link</a>      |
| [Smart resize](#smart-resize) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/resize-crop/#operation-smart-resize">Link</a>      |
| [Zoom objects](#zoom-objects) | <a target="_blank" href="https://uploadcare.com/docs/transformations/image/resize-crop/#operation-zoom-objects">Link</a>      |

## Documentation

### Adding filename
Original filenames can be accessed via Uploadcare's REST API. This can be done by making a request to receive a JSON response with file parameters including `original_filename`.

You can set an optional filename that users will see instead of the original name:

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      filename='my-image.jpg'
      preview={{ width: 300, height: 300 }}
    />
  )
}
```

### Auto rotate 
The default behavior goes with parsing EXIF tags of original images and rotating them according to the “Orientation” tag. Using `false` as parameter allows turning off the default behavior. 
  
```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      autoRotate={false} // or true
    />
  )
}
```

### Blur faces 
When faces is specified the regions are selected automatically by utilizing face detection.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      blurFaces={50}
    />
  )
}
```
### Enhance
Auto-enhances an image by performing the following operations: auto levels, auto contrast, and saturation sharpening.

Strength must be a number between 0 and 100. Default value is 50.
  
```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      enhance={50}
    />
  )
}
```
### Flip
Flips images.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      flip
    />
  )
}
```
### Format
Converts an image to one of the following formats: `jpg`, `png`, `webp`, `auto`.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      format={'jpg'}
    />
  )
}
```
### Grayscale
Desaturates images. The operation has no additional parameters and simply produces a grayscale image output when applied.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      grayscale
    />
  )
}
```

### Invert
Inverts images rendering a 'negative' of the input.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      invert
    />
  )
}
```

### Mirror
Mirrors images.

```jsx

import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      mirror
    />
  )
}
```
### Preview
Downscales an image proportionally to fit the given width and height in pixels.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      preview={{ width: 300, height: 300 }}
    />
  )
}
```
### Progressive 
Returns a progressive image. In progressive images, data are compressed in multiple passes of progressively higher detail. The operation does not affect non-JPEG images; does not force image formats to JPEG.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      progressive={true} // or false
    />
  )
}
```
### Quality
Sets output JPEG and WebP quality. Since actual settings vary from codec to codec, and more importantly, from format to format, we provide five simple tiers and two automatic values which suits most cases of image distribution and are consistent.

Quality must be one of the following values: `smart`, `smart_retina`, `normal`, `better`, `best`, `lighter`, `lightest`.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      quality={'best'}
    />
  )
}
```
### Rotate
Right-angle image rotation, counterclockwise. The value of angle must be a multiple of 90.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      rotate={90}
    />
  )
}
```
### Set fill 
Sets the fill color used with crop, stretch or when converting an alpha channel enabled image to JPEG.

Color must be a hex color code <b>without using the hashtag</b>.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      setFill={{ color: 'ffffff' }}
    />
  )
}
```

### Sharpen
Sharpens an image, might be especially useful with images that were subjected to downscaling. strength can be in the range from 0 to 20 and defaults to the value of 5.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      sharpen={20}
    />
  )
}
```

### Smart resize 
Content-aware resize helps retaining original proportions of faces and other visually sensible objects while resizing the rest of the image using intelligent algorithms.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      smartResize={{ width: 300, height: 300 }}
    />
  )
}
```

### Zoom objects
Zoom objects operation is best suited for images with solid or uniform backgrounds.

Zoom must be a number between 1 and 100.

```jsx
import { UCImage } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCImage
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      zoomObjects={50}
    />
  )
}
```




## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../-/../-/security/policy) on how to report security vulnerabilities.

## Credits

-   [Bas van Dinther](https://github.com/baspa)
-   [All Contributors](../-/../-/contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
