module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel', 'react-native-reanimated/plugin'],
  }
}

// If you are still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. In this case, we've made a boilerplate available so that you can continue with the course. Download the zip file attached to this lecture to somewhere in your C:\Users directory (Windows) or /Users directory (macOS)
// Then, run npm install --legacy-peer-deps and then npm start.
