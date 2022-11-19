/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/

export default defineConfig({
  test: {
    environment: 'jsdom',
    transformMode: { web: [/.[tj]sx$/] } //vite测试tsx文件会默认认为在SSR环境 需要告诉它在web环境
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outputDir: './dist/types',
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true // 是否将源码里的 .d.ts 文件复制到 outputDir
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    hmr: true,
    host: '0.0.0.0',
    port: 3000
  },
  preview: {
    port: 4174
  },
  define: {
    __VUE_OPTIONS_API__: false
  },
  build: {
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SectrendUI',
      fileName: 'sectrend-ui',
      formats: ['es'] //导出模块格式 'umd', 'iife'
    }
  }
})
