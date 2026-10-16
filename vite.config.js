import { defineConfig } from 'vite'

export default defineConfig({
  base: '/fausto-ramos-portifolio/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        sobre: 'sobre.html',
        contato: 'contato.html',
      },
    },
  },
})