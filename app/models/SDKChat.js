var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SDKChat = new Schema({

    Id : {
        type : String,
        required : true
    } ,

    Name : {
        type : String,
        required : true
    } ,

    Message : {
        type : String,
        required : true
    }

});

module.exports = mongoose.model("SDKChat",SDKChat);