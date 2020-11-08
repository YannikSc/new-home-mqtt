import { BuildConfig, ServerConfig, SharedConfig } from 'vite';

/**
 * @type {SharedConfig|ServerConfig|BuildConfig}
 */
module.exports = {
    entry: 'src/core/main.js',
    outDir: 'dist/index',
    emitManifest: true,
    enableEsbuild: false,
    terserOptions: {
        module: true,
        ecma: 2020,
        mangle: false,
        compress: false,
    },
    rollupInputOptions: {
        cache: false,
    },
    rollupOutputOptions: {
        esModule: true,
        format: 'esm',
        noConflict: true,
    },
};
