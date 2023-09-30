import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import shopify from 'vite-plugin-shopify'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [shopify({
    themeRoot: "./",
    sourceCodeDir: "frontend-dev",
    entrypointsDir: "frontend-dev/entrypoints",
    snippetFile: 'vite-tag.liquid'
  }),react()],
})
