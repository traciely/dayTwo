var gm = require('gm');
var fs = require('fs');
var debug = require('debug')('image:resize');

function resizeImage(imageParameters, callback) {
    var height = imageParameters.hasOwnProperty('height') ? imageParameters.height : 200;
    var width = imageParameters.hasOwnProperty('width') ? imageParameters.width : 200;
    var fileLocation = imageParameters.hasOwnProperty('fileLocation') ? imageParameters.fileLocation : null;
    var saveToPath = imageParameters.hasOwnProperty('saveToPath') ? imageParameters.saveToPath : '/tmp/resize.jpg';
    debug('have variables! height: %d, width: %d, fileLocation: %s, saveToPath: %s', height, width, fileLocation, saveToPath);

    if(fileLocation) {
        debug('have a file location, wnat to resize and save now');
        gm(fileLocation)
            .resize(height, width)
            .write(saveToPath, function(err) {
                if(err) {
                    debug('booo, err: %j', err);
                    callback(err, null);
                } else {
                    debug('yay! %s', saveToPath);
                    callback(null, saveToPath);
                }
            });
    }
    else {
        debug('booooo, no file');
        callback("no file!", null);
    }
}

module.exports = {
    resize: resizeImage
}