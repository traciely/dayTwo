var gm = require('gm');
var fs = require('fs');

function resizeImage(imageParameters, callback) {
    var height = imageParameters.hasOwnProperty('height') ? imageParameters.height : 200;
    var width = imageParameters.hasOwnProperty('width') ? imageParameters.width : 200;
    var fileLocation = imageParameters.hasOwnProperty('fileLocation') ? imageParameters.fileLocation : null;
    var saveToPath = imageParameters.hasOwnProperty('saveToPath') ? imageParameters.saveToPath : '/tmp/resize.jpg';

    if(fileLocation) {
        gm(fileLocation)
            .resize(height, width)
            .write(saveToPath, function(err) {
                if(err) {
                    callback(err, null);
                } else {
                    callback(null, saveToPath);
                }
            });
    }
    else {
        callback("no file!", null);
    }
}

module.exports = {
    resize: resizeImage
}