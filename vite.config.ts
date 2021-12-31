/*
 * @Author: maggot-code
 * @Date: 2021-12-29 11:24:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 16:07:19
 * @Description: file content
 */
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { defineConfig, searchForWorkspaceRoot, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import { wrapperEnv } from './build/wrapper';

const { name } = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const root = process.cwd();

    const viteEnv = wrapperEnv(loadEnv(mode, root));
    console.log(viteEnv);

    return {
        root,
        base: '/',
        plugins: [
            vue(),
            vueJSX()
        ],
        publicDir: 'public',
        cacheDir: "node_modules/.vite",
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src/'),
                '@b': resolve(__dirname, 'build/'),
                '@p': resolve(__dirname, "packages/"),
            },
            extensions: [".ts", ".js", ".tsx", "jsx", ".json"],
            preserveSymlinks: false,
        },
        json: {
            namedExports: true,
            stringify: false,
        },
        logLevel: "info",
        clearScreen: false,
        envDir: "root",
        envPrefix: "VITE_",
        server: {
            strictPort: false,
            https: false,
            open: false,
            proxy: {},
            cors: true,
            fs: {
                strict: true,
                allow: [
                    searchForWorkspaceRoot(process.cwd())
                ]
            }
        },
        build: {
            target: "modules",
            minify: "esbuild",
            polyfillModulePreload: true,
            outDir: "dist",
            assetsDir: "assets",
            assetsInlineLimit: 4096,
            cssCodeSplit: true,
            sourcemap: "hidden",
            manifest: false,
            ssrManifest: false,
            write: true,
            emptyOutDir: true,
            brotliSize: true, // 原来写的是 true
            chunkSizeWarningLimit: 500,
            lib: {
                entry: resolve(__dirname, 'packages/index.ts'),
                name: name,
                formats: ["es", "umd"],
                fileName: (format) => `${name}.${format}.js`
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    // chunkFileNames: 'static/js/[name]-[hash].js',
                    // entryFileNames: 'static/js/[name]-[hash].js',
                    // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        },
        esbuild: {
            jsxFactory: "h",
            jsxFragment: "Fragment",
        },
        optimizeDeps: {
            include: [],
            keepNames: false
        }
    };
});
