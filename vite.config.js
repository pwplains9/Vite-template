import {fileURLToPath, URL} from 'url'
import {defineConfig} from 'vite'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',

            /**
             * custom insert position
             * @default: body-last
             */
            inject: 'body-last' | 'body-first',

            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            customDomId: '__svg__icons__dom__',
        }),
        vitePluginFaviconsInject('./src/assets/logo.svg'),
    ], resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/styles/_variables.scss";
                    // @import "@/assets/styles/_helpers.scss";
                    @import "@/assets/styles/mixins/_breakpoint.scss";
                `
            },
        },
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    base: '/',
})
