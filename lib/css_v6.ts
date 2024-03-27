export interface IConfig {
    comment: "Servers static files on fixed URLs.";
    "@id": "urn:solid-server:default:StaticAssetHandler";
    "@type": "StaticAssetHandler";
    options_expires: 86400;
    baseUrl: {
        "@id": "urn:solid-server:default:variable:baseUrl"
    }
    assets: IAsset[]
}

export interface IAsset {
    "StaticAssetHandler:_assets_key": string;
    "StaticAssetHandler:_assets_value": string;
}

export function newConfig(assets: IAsset[]): IConfig {
    return {
        comment: "Servers static files on fixed URLs.",
        "@id": "urn:solid-server:default:StaticAssetHandler",
        "@type": "StaticAssetHandler",
        options_expires: 86400,
        baseUrl: {
            "@id": "urn:solid-server:default:variable:baseUrl"
        },
        assets
    }
}