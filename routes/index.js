var express = require('express');
var app = express()
var router = express.Router();
var mongojs=require('mongojs');
var db=mongojs('first',['users']);


let validate = function(user, pass){
    return new Promise(resolve => {
        db.collection('users').find({"userId":user,"password":pass}).toArray(function (err, res) {
            if(err) throw err
            console.log(res, "result from database")
            if(res.length>0){
                return resolve(res[0].name);
            }
            else{
                return resolve(false);
            }
        })
    })

}


/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session && req.session.user){
        res.render('index',{username : req.session.user})
    }
    else{
        res.render('login', { title: 'Express' });
    }

});

router.get('/dashboard.html', function(req, res, next) {
    if(req.session && req.session.user){
        res.render('index',{username : req.session.user})
    }
    else{
        res.render('login', { title: 'Express' });
    }
});
router.get('/profile.html',function (req, res, next) {
    if(req.session && req.session.user){
        res.render('profile',{username:req.session.user})
    }
    else{
        res.render('login', { title: 'Express' });
    }
});
router.get('/charts.html',function (req, res, next) {
    if(req.session && req.session.user){
        res.render('charts',{username:req.session.user})
    }
    else{
        res.render('login', { title: 'Express' });
    }
});
router.post('/verifyLogin/',function (req, res) {
    console.log(req.query)
   try{
        validate(req.query.username, req.query.password).then(result=>{
            if(result===false){
                res.send('unauthorised')

            }
            else{
                req.session.user = result;
                res.render('index',{username:result})
            }
        })
   }
   catch(err){
        console.log(err)
   }
})
router.get('/logout/',function (req, res) {
    if(req.session && req.session.user){
        req.session.destroy();
        res.render('login')
    }
})
module.exports = router;
