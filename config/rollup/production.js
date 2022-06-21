import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";

import generateConfiguration from './common';

const path = 'dist';
const base = generateConfiguration(path);

base[0].plugins.push(terser());

const moduleConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: `${path}/ems/pckg.js`,
      format: 'esm',
      sourcemap: true,
      name: 'pckg',
      extend: false,
    },
  ],
  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: 'config/typescript/esm.json',
    }),
    terser(),
  ],
};

base.push(moduleConfig);

export default base;
