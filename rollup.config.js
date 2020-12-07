import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import alias from '@rollup/plugin-alias';
// import json from '@rollup/plugin-json';
// import jsx from 'rollup-plugin-jsx';
// import babel from 'rollup-plugin-babel';
const flow = require('rollup-plugin-flow');

// export default {
//   input: 'packages/react-native-web/dist/index.js',
//   output: {
//     file: 'packages/react-native-web/dist/bundle.esm.js',
//     format: 'umd',
//     name: 'RNWeb',
//     esModule: false
//   },
//   plugins: [commonjs(), nodeResolve()]
// };

export default {
    input: 'lib/module/index.js',
    output: {
        file: 'dist/bundle.web.js',
        format: 'umd',
        name: 'native-base-v3',
        esModule: false,
    },
    plugins: [
        // alias({
        //   entries: [
        //     {
        //       find: 'react-native/Libraries/Image/resolveAssetSource',
        //       replacement: 'react-native/Libraries/Image/resolveAssetSource',
        //     },
        //     { find: 'react-native', replacement: 'react-native-web' },
        //   ],
        // }),
        // json(),
        // jsx({ factory: 'React.createElement' }),
        flow(),
        nodeResolve(),
        // // babel({
        // //   exclude: /node_modules\/[^(react\-native\-vector\-icons|react\-native\/Libraries\/Image|css\-to\-react\-native|styled\-components)].*/,
        // //   babelrc: false,
        // //   presets: [
        // //     ['@babel/preset-env', { modules: false }],
        // //     ['@babel/preset-react'],
        // //   ],
        // //   plugins: [
        // //     '@babel/plugin-transform-flow-strip-types',
        // //     '@babel/plugin-proposal-class-properties',
        // //   ],
        // // }),
        // commonjs({
        //   // requireReturnsDefault: (id) => {
        //   //   console.log(id, 'commonjs module id');
        //   // },
        // }),
    ],
    external: () => {
        return false;
    },
};