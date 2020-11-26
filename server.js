var express = require("express")
var mongoose = require("mongoose")
var bodyParser = require("body-parser")
var cors = require('cors');

var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)

var port     = process.env.PORT || 3020;

//var conString = "mongodb://admin:admin@ds038319.mlab.com:38319/mylearning"
var conString = "mongodb://localhost:27017/mylearning";

app.use(cors());
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = Promise;

var id = Math.floor(Date.now() / 1000);

var Chats = mongoose.model("Chats", {
    id:String,
    name: String,
    chat: String
})

mongoose.connect(conString, { useMongoClient: true }, (err) => {
    console.log("Database connection", err)
})

app.post("/chats", async (req, res) => {
    try {
        var chat = new Chats(req.body)
        await chat.save()
        res.sendStatus(200)
        //Emit the event
        io.emit("chat", req.body)
    } catch (error) {
        res.sendStatus(500)
        console.error(error)
    }
})

app.get("/chats", (req, res) => {
    Chats.find({}, (error, chats) => {
        res.send(chats)
    })
})

io.on("connection", (socket) => {
    console.log("Socket is connected...")
})

/*io.on('connection', function(socket){
    socket.on('vedas', function (name) {
        sockets[name] = socket;
    });
    socket.on('send message', function (message, to) {
        sockets[to].emit(message);
    });
});*/

/*var nsp = io.of('/my-namespace1');
nsp.on('connection', function(socket) {
    console.log('someone connected');
    nsp.emit('hi', 'Hello everyone!');
});*/

var server = http.listen(3020, () => {
    console.log("Well done, now I am listening on ", server.address().port)
})

/*var host = process.env.HOST || host || '192.168.43.158' ||'localhost';
var port = process.env.PORT || process.env.HTTP_PORT || port || 3020;

var listen = http.listen(host, port);
var socket = io.listen(listen);
(app,socket)*/
