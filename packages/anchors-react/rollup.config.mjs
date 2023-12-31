import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const input = './src/index.ts';

const bundles = [
  {
    input,
    output: {
      file: './dist/anchors.react.esm.js',
      format: 'esm',
    },
  },
  {
    input,
    output: {
      file: './dist/anchors.react.esm.min.js',
      format: 'esm',
    },
  },
  {
    input,
    output: {
      name: 'AnchorsReactDOM',
      file: './dist/anchors.react.umd.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@folz/anchors': 'AnchorsDOM',
      },
    },
  },
  {
    input,
    output: {
      name: 'AnchorsReactDOM',
      file: './dist/anchors.react.umd.min.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@folz/anchors': 'AnchorsDOM',
      },
    },
  },
  {
    input,
    output: {
      file: './dist/anchors.react.mjs',
      format: 'esm',
    },
  },
];

export default bundles.map(({input, output}) => ({
  input,
  output,
  external: ['react', 'react-dom', '@folz/anchors'],
  plugins: [
    commonjs(),
    nodeResolve({extensions: ['.ts']}),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts'],
      plugins: ['annotate-pure-calls'],
    }),
    replace({
      __DEV__: output.file.includes('.min.')
        ? 'false'
        : 'process.env.NODE_ENV !== "production"',
      preventAssignment: true,
    }),
    output.file.includes('.min.') && terser(),
  ],
}));
