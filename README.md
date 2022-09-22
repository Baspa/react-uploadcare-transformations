# react-uploadcare-transformations

[![NPM](https://img.shields.io/npm/v/react-uploadcare-transformations.svg)](https://www.npmjs.com/package/react-uploadcare-transformations) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A React component which provides an easy way to add Uploadcare transformations to your images. 

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  * [Preview](#preview)
- [Documentation](#documentation)
- [Testing](#testing)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [Security Vulnerabilities](#security-vulnerabilities)
- [Credits](#credits)
- [License](#license)

## Requirements

## Installation

```bash
npm install --save react-uploadcare-transformations
```

## Usage

<ol>
    <li>
        Include the `UCTransformation` component.
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
    <li>The component outputs an image. Want to add your own classes to the image? Simply add the `class` property!</li>
</ol>

```jsx
import React from 'react'

import { UCTransformation } from 'react-uploadcare-transformations'

const App = () => {
  return (
    <UCTransformation
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      preview={{ width: 300, height: 300 }}
    />
  )
}

export default App
```

## Documentation

### Preview
Downscales an image proportionally to fit the given width and height in pixels.

```jsx
import { UCTransformation } from 'react-uploadcare-transformations'

const = () => {
  return (
    <UCTransformation
      uuid='12a3456b-c789-1234-1de2-3cfa83096e25'
      preview={{ width: 300, height: 300 }}
    />
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
