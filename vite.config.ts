import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type ServerOptions } from 'vite';
import react from '@vitejs/plugin-react-swc';

/**
 * Returns Vite dev server options.
 */
function getServerOptions(): ServerOptions {
  const dir = dirname(fileURLToPath(import.meta.url));

  return {
    port: 8443,
    https: {
      cert: readFileSync(resolve(dir, './https-cert.pem')),
      key: readFileSync(resolve(dir, './https-key.pem')),
    },
    host: 'local.darkhole.space',
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment this line in case, you would like to run Vite dev server using HTTPS and in case,
  // you have key and certificate.
  server: getServerOptions(),
});
