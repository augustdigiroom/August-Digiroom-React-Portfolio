// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window', // required for some polyfills
  },
  optimizeDeps: {
    include: ['buffer'], // Ensure buffer is pre-bundled
  },
  assetsInclude: ['**/*.md'],
});
