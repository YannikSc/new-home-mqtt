import { BuildConfig, ServerConfig, SharedConfig } from 'vite';

/**
 * @type {SharedConfig|ServerConfig|BuildConfig}
 */
module.exports = {
    entry: 'src/dashboard/main.js',
    outDir: 'dist/dashboard',
    emitManifest: true,
};
