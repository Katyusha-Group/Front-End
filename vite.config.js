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
})
