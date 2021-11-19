import { resolve } from 'path';
import { readdirSync } from 'fs';
import detect from 'detect-port';
import { defineConfig, UserConfigExport } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import federation from '@originjs/vite-plugin-federation';

import pkg from './package.json';

export default async function config(): Promise<UserConfigExport> {
  const port = await detect(8000);

  const items = readdirSync(resolve(__dirname, 'src'));

  return defineConfig({
    server: {
      host: '127.0.0.1',
      port,
    },
    plugins: [
      reactRefresh(),
      federation({
        name: 'monoApp',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
        },
        shared: {
          react: {
            eager: true,
            requiredVersion: pkg.dependencies.react,
          },
          'react-dom': {
            eager: true,
            import: false,
            requiredVersion: pkg.dependencies['react-dom'],
          },
          'react-router-dom': {
            eager: true,
            import: false,
            requiredVersion: pkg.dependencies['react-router-dom'],
          },
          '@chakra-ui/react': '*',
          // '@emotion/react': '*',
          // '@emotion/styled': '*',
          // 'framer-motion': '*',
        },
      }),
    ],
    cacheDir: 'node_modules/.cacheDir',
    resolve: {
      alias: items.map((item) => {
        if (/\.(t|j)sx?$/.test(item)) {
          const name = item.replace(/\.(t|j)sx?$/, '');

          return {
            find: name,
            replacement: `/src/${name}`,
          };
        } else {
          return {
            find: item,
            replacement: `/src/${item}`,
          };
        }
      }),
    },
    build: {
      target: 'esnext',
    },
  });
}
