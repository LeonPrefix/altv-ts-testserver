import { altvEsbuild } from 'altv-esbuild';
import esbuild from 'esbuild';
import { SHARED_ALTV_ESBUILD_OPTIONS } from './build-shared';

esbuild.build({
  bundle: true,
  target: 'esnext',
  logLevel: 'info',
  format: 'esm',
  entryPoints: ['./resources/test/src/client/client.ts'],
  outfile: './resources/test/dist/client.js',
  plugins: [
    altvEsbuild({
      ...SHARED_ALTV_ESBUILD_OPTIONS,
      mode: 'client',
    }),
  ],
});
