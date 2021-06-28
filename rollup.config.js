import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

const plugins = [
  
  terser(),
];

export default [
  {
    input: 'ts/AssetLoadTracker.ts',
    output: [
      { file: 'js/cjs/AssetLoadTracker.min.js', format: 'cjs', plugins: [ terser(), ], },
      { file: 'js/cjs/AssetLoadTracker.js', format: 'cjs', },
      { file: 'js/esm/AssetLoadTracker.min.js', format: 'es', plugins: [ terser(), ], },
      { file: 'js/esm/AssetLoadTracker.js', format: 'es', },
    ],
    plugins: [
      typescript(),
    ]
  },
];
