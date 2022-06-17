import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const generateConfiguration = (path) => [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `${path}/pckg.js`,
        format: 'iife',
        sourcemap: true,
        name: 'pckg',
        extend: false,
      },
    ],
    plugins: [
      nodeResolve(),
      typescript(),
    ],
  },
];

export default generateConfiguration;
