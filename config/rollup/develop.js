import serve from 'rollup-plugin-serve';

import generateConfiguration from './common';

const base = generateConfiguration('public/js');

const servePlugin = serve({
  contentBase: 'public',

  // Options used in setting up server
  host: 'localhost',
  port: 3100,
});

base[0].plugins.push(servePlugin);

export default base;
