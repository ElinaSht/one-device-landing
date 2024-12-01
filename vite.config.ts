import path from 'path';
import Vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import SvgLoader from 'vite-svg-loader';

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    Vue(),
    SvgLoader(),
  ],
});
