import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const input = './src/index.ts';

const bundles = [
  {
    input,
    output: {
      file: './dist/anchors.esm.js',
      format: 'esm',
    },
  },
  {
    input,
    output: {
      file: './dist/anchors.mjs',
      format: 'esm',
    },
  },
  {
    input,
    output: {
      file: './dist/anchors.browser.mjs',
      format: 'esm',
    },
  },
  {
    input,
    output: {
      file: './dist/anchors.browser.min.mjs',
      format: 'esm',
    },
  },
  {
    input,
    output: {
      name: 'AnchorsDOM',
      file: './dist/anchors.umd.js',
      format: 'umd',
    },
  },
  {
    input,
    output: {
      name: 'AnchorsDOM',
      file: './dist/anchors.umd.min.js',
      format: 'umd',
    },
  },
];

export default bundles.map(({input, output}) => ({
  input,
  output,
  plugins: [
    nodeResolve({extensions: ['.ts']}),
    replace({
      __DEV__:
        output.file.includes('.browser.') || output.file.includes('.umd.')
          ? output.file.includes('.min.')
            ? 'false'
            : 'true'
          : 'process.env.NODE_ENV !== "production"',
      preventAssignment: true,
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts'],
      plugins: ['annotate-pure-calls'],
    }),
    output.file.includes('.min.') && terser(),
  ],
}));
