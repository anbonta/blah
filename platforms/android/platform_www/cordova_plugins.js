cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.hutchind.cordova.plugins.vitamio/www/Vitamio.js",
        "id": "com.hutchind.cordova.plugins.vitamio.Vitamio",
        "clobbers": [
            "vitamio"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-device": "1.1.2-dev",
    "com.hutchind.cordova.plugins.vitamio": "0.0.2"
};
// BOTTOM OF METADATA
});