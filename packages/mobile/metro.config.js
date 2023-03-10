/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')
const watchFolders = [
  path.resolve(__dirname + '/..'), //Relative path to packages directory
  path.resolve(__dirname + '/../../node_modules') //Relative path to packages directory
]
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    })
  },
  watchFolders
}
