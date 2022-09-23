This example was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is linked to the react-uploadcare-transformations package in the parent directory for development purposes.

You can run `npm install` and then `npm start` to test your package.

## Development 
If you get the following error: `digital envelope routines::unsupported` when running `npm install` or `npm run build`, use this command:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```