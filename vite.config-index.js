import { BuildConfig, ServerConfig, SharedConfig } from 'vite';

/**
 * @type {SharedConfig|ServerConfig|BuildConfig}
 */
module.exports = {
    entry: 'src/core/main.js',
    outDir: 'dist/index',
    emitManifest: true,
};
