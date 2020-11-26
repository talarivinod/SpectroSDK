var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var sdkRegistrationRouter = require('./routes/SDKRegistration');
var sdkVerificationRouter = require('./routes/SDKVerification');
var sdkLoginRouter = require('./routes/SDKLogin');
var sdkForgetRouter = require('./routes/SDKForgetpassword');
var sdkSetpassRouter = require('./routes/SDKSetpassword');
var sdkApplicationRouter = require('./routes/SDKApplication');

var sdkChat = require('./routes/SDKChat');


var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/spectroSDK/file',express.static(__dirname+ '/public/plistFiles'));

app.use('/spectroSDK/file',express.static(__dirname+ '/ConfiguredFiles'));

app.use('/spectrocare/sdkregister',sdkRegistrationRouter);
app.use('/spectrocare/sdkverify',sdkVerificationRouter);
app.use('/spectrocare/sdklogin',sdkLoginRouter);
app.use('/spectrocare/sdkforgot',sdkForgetRouter);
app.use('/spectrocare/sdknewpassword',sdkSetpassRouter);
app.use('/spectrocare/sdkapplication',sdkApplicationRouter);

app.use('/spectrocare/sdkchat',sdkChat);


// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/ConfiguredFiles/download/:file(*)',(req, res) => {
    if(req.params.file === "undefined"){
        console.log("No file Found");
    }
    else{

    var file = req.params.file;
    var fileLocation = path.join('./ConfiguredFiles',file);
    console.log(fileLocation);
    res.download(fileLocation, file);

    }
});

io.on("connection", (socket) => {
    console.log("Socket is connected...")
})

module.exports = {app: app, server: server};
