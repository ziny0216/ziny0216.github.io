import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'sass'; // Dart Sass를 명시적으로 가져오기

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': fileURLToPath(new URL('src/views', import.meta.url)),
      '@components': fileURLToPath(new URL('src/components', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 글로벌 SCSS 파일 자동 import
        additionalData: `
          @use "@/assets/scss/global.scss" as *;
        `,
        implementation: sass, // Dart Sass 명시
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
