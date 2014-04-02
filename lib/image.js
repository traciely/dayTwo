var gm = require('gm');
var fs = require('fs');
var path = require('path');

function resizeImage(imageParameters, callback) {
    var height = imageParameters.hasOwnProperty('height') ? imageParameters.height : 200;
    var width = imageParameters.hasOwnProperty('width') ? imageParameters.width : 200;
    var fileLocation = imageParameters.hasOwnProperty('fileLocation') ? imageParameters.fileLocation : null;
    var saveToPath = imageParameters.hasOwnProperty('saveToPath') ? imageParameters.saveToPath : '/tmp/resize.jpg';
    // var height = parseInt(req.param('height'));
    // var width = parseInt(req.param('width'));
    // var saveToPath = path.join(process.cwd(), 'public/images/resize.jpg');

    if(!fileLocation) {
        gm(fileLocation)
            .resize(height, width)
            .write(saveToPath, function(err) {
                if(!err) {
                    callback(err, null);
                } else {
                    callback(null, saveToPath);
                }
            });
    }
    // gm(req.files.imageFile.path)
    //     .resize(height, width)
    //     .write(saveToPath, function (err) {
    //         if (!err) console.log('done');
    //         res.redirect('images/resize.jpg');
    //     });
}

module.exports = {
    resize: resizeImage
}