// vite.config.js
import { defineConfig } from "file:///D:/Bahareh/7/Files/Software%20Engineering/Project/Front-End/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Bahareh/7/Files/Software%20Engineering/Project/Front-End/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\Bahareh\\7\\Files\\Software Engineering\\Project\\Front-End";
var vite_config_default = defineConfig({
  // server:{
  //   proxy:{
  //     "/accounts/" : "http://127.0.0.1:8000/",
  //   }
  // },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        prependData: `@import "${path.resolve(__vite_injected_original_dirname, "./src/assets/scss/black-dashboard-react.scss")}";`
      }
    }
  }
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxCYWhhcmVoXFxcXDdcXFxcRmlsZXNcXFxcU29mdHdhcmUgRW5naW5lZXJpbmdcXFxcUHJvamVjdFxcXFxGcm9udC1FbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEJhaGFyZWhcXFxcN1xcXFxGaWxlc1xcXFxTb2Z0d2FyZSBFbmdpbmVlcmluZ1xcXFxQcm9qZWN0XFxcXEZyb250LUVuZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQmFoYXJlaC83L0ZpbGVzL1NvZnR3YXJlJTIwRW5naW5lZXJpbmcvUHJvamVjdC9Gcm9udC1FbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG4vLyBjb25zdCBwYXRoMSA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBzZXJ2ZXI6e1xyXG4gIC8vICAgcHJveHk6e1xyXG4gIC8vICAgICBcIi9hY2NvdW50cy9cIiA6IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL1wiLFxyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcblxyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Fzczoge1xyXG4gICAgICAgIHByZXBlbmREYXRhOiBgQGltcG9ydCBcIiR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cy9zY3NzL2JsYWNrLWRhc2hib2FyZC1yZWFjdC5zY3NzJyl9XCI7YCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBlc2J1aWxkOiB7XHJcbiAgLy8gICBkcm9wOiBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXSxcclxuICAvLyB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZXLFNBQVMsb0JBQW9CO0FBQzFZLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixhQUFhLFlBQVksS0FBSyxRQUFRLGtDQUFXLDhDQUE4QztBQUFBLE1BQ2pHO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFJRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
