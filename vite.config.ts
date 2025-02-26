import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig( {
    base: '/',
    plugins: [
        react(),
        createHtmlPlugin( {
            minify: true,
            entry: '/src/index.tsx',
            template: './src/index.html'
        } )
    ],
    build: {
        target: 'esnext',
        outDir: 'dist',
        assetsDir: './',
        sourcemap: false,
        emptyOutDir: true,
        rollupOptions: {
            input: '/src/index.tsx',
            output: {
                manualChunks( id: string ) {
                    if ( id.includes( 'node_modules' ) ) {
                        return 'vendors'
                    }
                },
                entryFileNames: 'js/index.[hash].js',
                chunkFileNames: 'js/[name].[hash].js',
                assetFileNames: 'css/[name].[hash][extname]'
            }
        }
    },
    server: {
        port: 3000,
        strictPort: true
    }
} )