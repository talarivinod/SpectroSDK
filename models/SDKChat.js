var bodyParser = require("body-parser")
var ChatDB = require('../app/models/SDKChat');

var Id = Math.floor(Date.now() / 1000);

var ChatApplication = {

    AddChat : function(chatdata,callback){

        ChatDB.findOne({Id:chatdata.Id}).exec().then((IdFound)=>{

            if (IdFound){

                var newChat = new ChatDB({

                    Id:chatdata.Id,
                    Name:chatdata.Name,
                    Message:chatdata.Message

                });

                newChat.save(function (err) {

                    if (err) {

                        console.log(err);
                        callback({response: '0', message: err});

                    }
                    else {

                        var r = {response: '3', message: 'Your Chat-Data was Added.'};
                        callback(r);

                    }

                });

            }
            else {

                var newChat = new ChatDB({

                    Id:Id,
                    Name:chatdata.Name,
                    Message:chatdata.Message

                });

                newChat.save(function (err) {

                    if (err) {

                        console.log(err);
                        callback({response: '0', message: err});

                    }
                    else {

                        var r = {response: '3', message: 'Your Chat-Data was Added.'};
                        callback(r);

                    }

                });

                //callback({response:'0', message:'Invalid Id'});
            }

        });

    }

};

module.exports = ChatApplication;

