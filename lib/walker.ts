import * as fsWalk from '@nodelib/fs.walk';
import * as CSSV6 from './css_v6'

export function walk(path: string, origin: string): CSSV6.IConfig {
    const assets: CSSV6.IAsset[] = []
    const filterPodDirectory: fsWalk.DeepFilterFunction = (entry) => {
        return !entry.path.includes('pods');
    }

    const entries = fsWalk.walkSync(path, {
        deepFilter: filterPodDirectory
    });

    for (const entry of entries) {
        if (!entry.dirent.isDirectory()) {
            assets.push(generateCssV6StaticFileEntry(entry.path, origin));
        }
    }
    return CSSV6.newConfig(assets);
}

function generateCssV6StaticFileEntry(filePath: string, origin: string): CSSV6.IAsset {
    const posInitialOrigin = filePath.indexOf(origin);
    const path = filePath.substring(posInitialOrigin + origin.length)
    return {
        "StaticAssetHandler:_assets_key": path,
        "StaticAssetHandler:_assets_value": filePath
    }
}