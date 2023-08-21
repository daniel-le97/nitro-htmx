//https://nitro.unjs.io/config
export default defineNitroConfig({
    esbuild:{
        options:{
            jsx: 'transform',
            jsxFactory: 'elements.createElement'
        }
    },
    // inlineDynamicImports: true,
    minify: true,
    alias: {
        "@Components/*" : 'utils/components/*'
    },
    // rollupConfig:{
    //     preserveSymlinks: false
    // },
    typescript: {
        tsConfig: {
            compilerOptions:{
                moduleResolution: 'bundler',
                allowImportingTsExtensions: true,
                noEmit: true,
                allowJs: true,
                esModuleInterop: true,
                allowSyntheticDefaultImports: true,
                jsx: 'react',
                jsxFactory: "elements.createElement",
                baseUrl: '../../',
                paths: {
                    "@Components/*": ['utils/components/*']
                }
            }
        }
    }
});
