//var express = require('express');
//var router = express.Router();

module.exports = function(app,io) {
app.get('/spectrocare/file/download/:testname/:filename', function(req, res){
    console.log('resource to download file...',req.params.id);
    if(typeof req.params == 'undefined'){
        res.json({result:'error',message:'provide the download resource'});
    }else {
        var file = '../spectroSDK/FilesFolder/'+ req.params.testname +'/'+req.params.filename;
        res.download(file); // Set disposition and send it.
    }
});
};