import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig( {
    base: '/',
    plugins: [
        createHtmlPlugin( {
            minify: true,
            entry: '/src/index.tsx',
            template: './src/index.html'
        } ),
        viteStaticCopy( {
            targets: [
                {
                    src: 'src/assets/**/*',
                    dest: 'assets'
                }
            ]
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