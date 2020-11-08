const fs = require('fs');
const twig = require('twig');
const dashboardManifest = require('../dist/dashboard/_assets/manifest.json');
const indexManifest = require('../dist/index/_assets/manifest.json');


function copyFolderContent(from, to, ignore = []) {
    for (const asset of fs.readdirSync(from)) {
        if (ignore.indexOf(asset) >= 0) {
            continue;
        }

        fs.copyFileSync(from + asset, to + asset);
    }
}

fs.mkdirSync('dist/out/_assets', { recursive: true });
fs.mkdirSync('dist/out/vendor', { recursive: true });

twig.renderFile('scripts/_files/index.twig', { manifest: indexManifest }, (err, html) => {
    if (err) {
        console.error(err);
    }

    fs.writeFileSync('dist/out/index.html', html);
});

twig.renderFile('scripts/_files/dashboard.twig', { manifest: dashboardManifest }, (err, html) => {
    if (err) {
        console.error(err);
    }

    fs.writeFileSync('dist/out/dashboard.html', html);
});

copyFolderContent('dist/index/_assets/', 'dist/out/_assets/', ['manifest.json']);
copyFolderContent('dist/dashboard/_assets/', 'dist/out/_assets/', ['manifest.json']);
copyFolderContent('dist/index/vendor/', 'dist/out/vendor/', ['manifest.json']);
copyFolderContent('dist/dashboard/vendor/', 'dist/out/vendor/', ['manifest.json']);
