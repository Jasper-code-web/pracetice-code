import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: "red",
        },
      },
    },
  },
})
