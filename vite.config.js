/// <reference types="vitest" />
/// <reference types="vite/client" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// const path1 = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     "/accounts/" : "http://127.0.0.1:8000/",
  //   }
  // },

  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        prependData: `@import "${path.resolve(__dirname, './src/assets/scss/black-dashboard-react.scss')}";`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
})
