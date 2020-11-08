module.exports = function (pluginName, pluginPath) {
    return {
        entry: pluginPath + '/' + pluginName + '.js',
        outDir: 'dist/plugins/' + pluginName.toLowerCase(),
        enableEsbuild: false,
        minify: false,
        rollupOutputOptions: {
            format: 'esm',
            exports: 'auto',
            dir: 'dist/plugins/' + pluginName.toLowerCase(),
            entryFileNames: '[name].js',
            assetFileNames(asset) {
                return asset.name;
            },
        },
    };
};
