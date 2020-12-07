module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@native-base/v3': './src/index',
          '@nativebase/Box': './src/components/primitives/Box/index',
          '@native-base/v3/Accordion':
            './src/components/composites/Accordion/index',
        },
      },
    ],
  ],
};
