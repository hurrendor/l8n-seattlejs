import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker'
import i18nextLoader from 'vite-plugin-i18next-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    checker({
      typescript: true
    }),
    viteTsconfigPaths(),
    i18nextLoader({ paths: ['./src/locales', './locales'] })
  ],
  server: {
    open: true,
    port: 3000
  },
  build: {
    outDir: './build'
  }
});
