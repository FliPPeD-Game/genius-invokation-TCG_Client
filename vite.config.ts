/// <reference types="vitest" />

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import DiffCompiler from 'vite-plugin-diff-compiler'
// import { qrcode } from 'vite-plugin-qrcode'

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      DiffCompiler(),
      Vue({
        reactivityTransform: true,
      }),

      Pages(),

      AutoImport({
        imports: [
          'vue',
          'vue/macros',
          'vue-router',
          '@vueuse/core',
        ],
        dts: true,
        dirs: [
          './src/hooks/*',
          './src/utils',
          './src/api/*',
          './src/stores/*',
          './src/request/*',
        ],
        vueTemplate: true,
        resolvers: [ElementPlusResolver()],
      }),

      Components({
        dts: true,
        resolvers: [ElementPlusResolver()],
      }),
      Unocss(),
      // qrcode(),
    ],
    test: {
      environment: 'jsdom',
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  })
}
