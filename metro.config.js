// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */

// module.exports = config;
module.exports = (()=>{
    const config = getDefaultConfig(__dirname);
    const {resolver} = config;
    config.resolver = {
        ...resolver,
        assetExts:[...resolver.assetExts , "glb" , "gltf" ,"png" , "jpg"],
        sourceExts:[
            resolver.sourceExts,
               'js',
                'jsx',
                'json',
                'ts', 
                'tsx',
                 'cjs', 
                 'mjs',
              
        ],
        
    };
    return config;
})();

