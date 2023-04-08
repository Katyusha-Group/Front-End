import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// const path1 = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        prependData: `@import "${path.resolve(__dirname, './src/assets/scss/black-dashboard-react.scss')}";`,
      },
    },
  },
})
