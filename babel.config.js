module.exports = function (api) {
  api.cache(true);
  const plugins = [
    'react-native-reanimated/plugin',
    'module:react-native-dotenv'
  ];

  return {
    presets: ['babel-preset-expo'],

    plugins,
  };
};
