import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './rollup.input.js',
    output: {
      file: './babel-preset-env.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
      {
        transform: (code) => {
          let result = code;
          result = result.replace('import Babel from "Babel";', '');
          result = result.replace("import 'Babel';", '');
          return result;
        },
      },
    ],
  },
];
