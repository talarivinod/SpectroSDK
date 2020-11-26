var express = require('express');
var router = express.Router();
var Chat = require ('../models/SDKChat');

router.post('/chats', (req,res) => {

    if(typeof req.body === 'undefined'){
        res.json({response:'0',message:'no content to process your request'});
    }else {
        Chat.AddChat(req.body, (result) => {
            console.log('callback response...', result);
            res.json(result);
        });
    }

});

/*router.get("/chats", (req, res) => {
    Chat.find({}, (error, chats) => {
        res.send(chats)
    })
});*/

module.exports=router;

