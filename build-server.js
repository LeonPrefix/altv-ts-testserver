import { build } from 'esbuild';
import { altvEsbuild } from 'altv-esbuild';
import { SHARED_ALTV_ESBUILD_OPTIONS } from './build-shared';

build({
  external: ['chat'],
  bundle: true,
  target: 'esnext',
  platform: 'node',
  logLevel: 'info',
  format: 'esm',
  entryPoints: ['./resources/test/src/server/server.ts'],
  outfile: './resources/test/dist/server.js',
  plugins: [
    altvEsbuild({
      ...SHARED_ALTV_ESBUILD_OPTIONS,
      mode: 'server',
    }),
  ],
});
