## To Tackle SVG and PNG files
npm install --save-dev identity-obj-proxy
```javascript
/** @type {import('jest').Config} */
const config = {
  // ... other configurations

  moduleNameMapper: {
    "\\.(svg|png)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(jsx?|tsx?)$": "babel-jest",
  },

  // ... other configurations
};

module.exports = config;

```