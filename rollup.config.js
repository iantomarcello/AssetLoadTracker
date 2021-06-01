import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'ts/AssetLoadTracker.ts',
  output: [
    { file: 'js/cjs/AssetLoadTracker.js', format: 'cjs', },
    { file: 'js/esm/AssetLoadTracker.js', format: 'es', },
  ],
  plugins: [
    typescript(),
    terser(),
  ],
};
