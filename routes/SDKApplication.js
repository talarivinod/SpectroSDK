var express = require('express');
var router = express.Router();
var Application = require('../models/SDKApplication');


router.get('/:userid', function(req,res)  {

    Application.GetApplication(req.params.userid,(result) => {
        console.log("From Router : "+req.params.userid);

        res.json(result);
        console.log("From Router : "+result);
    });

});

router.post('/', (req,res) => {

    if(typeof req.body === 'undefined'){
        res.json({response:'0',message:'no content to process your request'});
    }else {
        Application.AddApplication(req.body, (result) => {
            console.log('callback response...', result);
            res.json(result);
        });
    }

});

router.post('/checkandadd',(req,res) => {

    if (typeof req.body === 'undefined'){
        res.json({response:'0', message:'no content to process your request'});
    }
    else {
        Application.CheckApplication(req.body,(result) => {

            console.log('callback response...',result);
            res.json(result);

        });
    }

});


router.post('/addios',(req,res) => {

    if (typeof req.body === 'undefined'){
        res.json({response:'0', message:'no content to process your request'});
    }
    else {
        Application.AddCheckedIOSApplication(req.body,(result) => {

            console.log('callback response...',result);
            res.json(result);

        });
    }

});

router.post('/addandroid',(req,res) => {

    if (typeof req.body === 'undefined'){
        res.json({response:'0', message:'no content to process your request'});
    }
    else {
        Application.AddCheckedAndroidApplication(req.body,(result) => {

            console.log('callback response...',result);
            res.json(result);

        });
    }

});



router.post('/aftercheck',(req,res) => {

    if (typeof req.body === 'undefined'){
        res.json({response:'0', message:'no content to process your request'});
    }
    else {
        Application.CheckAppDetails(req.body,(result) => {

            console.log('callback response...',result);
            res.json(result);

        });
    }

});

router.put('/updateios',(req,res) => {

    if(typeof req.body === 'undefined' ){
        res.json({response:'0',message:'No content found to process your request'});
    }else {

        Application.UpdateIOSApplication(req.body, (result) => {

            console.log('callback response...', result);

            res.send(result);

        })
    }

});

router.put('/updateandroid',(req,res) => {

    if(typeof req.body === 'undefined' ){
        res.json({response:'0',message:'No content found to process your request'});
    }else {

        Application.UpdateAndroidApplication(req.body, (result) => {

            console.log('callback response...', result);

            res.send(result);

        })
    }

});

router.post('/fetch', (req,res) => {

    if(typeof req.body === 'undefined'){
        res.json({response:'0',message:'no content to process your request'});
    }else {
        Application.FetchApplication(req.body, (result) => {
            console.log('callback response...', result);
            res.json(result);
        });
    }

});

router.delete('/',(req,res) => {

    if(typeof req.body === 'undefined'){
        res.json({result:'error',message:'no content found'});
    }else {
        Application.DeleteApplication(req.body,(result) => {
            console.log('result...',result);
            res.json(result);
        })
    }

});

router.post('/keychecking',(req,res)=>{

    if (typeof  req.body === 'undefined'){
        res.json({result:'error', message:'no content found'})
    }
    else {
        Application.CheckAppWithKeys(req.body,(result) => {
            console.log('result...',result);
            res.json(result);
        })
    }

});

module.exports=router;

