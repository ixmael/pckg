import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

import generateConfiguration from './common';

const path = 'dist';
const base = generateConfiguration(path);

base[0].plugins.push(uglify());

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
    uglify(),
  ],
};

base.push(moduleConfig);

export default base;
