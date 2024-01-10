// /// <reference types="vitest">
// /// <reference types="vite/client">

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path';
// // const path1 = require('path');
// // https://vitejs.dev/config/
// export default defineConfig({
//   // server:{
//   //   proxy:{
//   //     "/accounts/" : "http://127.0.0.1:8000/",
//   //   }
//   // },

//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       sass: {
//         prependData: `@import "${path.resolve(__dirname, './src/assets/scss/black-dashboard-react.scss')}";`,
//       },
//     },
//   },
//   test:{
//     globals:true,
//     environment: 'jsdom',
//     css:true,
//     setupFiles: "./src/test/setup.js"
//   }
//   // esbuild: {
//   //   drop: ['console', 'debugger'],
//   // },
// })
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        prependData: `@import "${path.resolve(
          __dirname,
          "./src/assets/scss/black-dashboard-react.scss"
        )}";`,
      },
    },
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
