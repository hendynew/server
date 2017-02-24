var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;

router.get('/api/data/topimooji',function(req,res,next){
	try{
		req.getConnection(function(err,conn){
			if(err){
				console.error("SQL Connection Error: ", err);
				return next(err);
			}else{
				var q = "SELECT * FROM m_imooji WHERE STATUS='1' ORDER BY love_count DESC";
				var query = conn.query(q, function(err, result){
					if(err){
						console.error("SQL Error : ", err);
						return next(err);
					}
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
					res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
					res.setHeader('Access-Control-Allow-Credentials', true);
					res.send(JSON.stringify(result));
				});
			}
		});
	}
	catch(ex){
		console.error("Internal error: " + ex);
		return next(ex);
	}
});

router.get('/api/data/all_imooji',function(req,res,next){
	try{
		req.getConnection(function(err,conn){
			if(err){
				console.error("SQL Connection Error: ", err);
				return next(err);
			}else{
				var q = "SELECT * FROM m_imooji WHERE STATUS='1'";
				var query = conn.query(q, function(err, result){
					if(err){
						console.error("SQL Error : ", err);
						return next(err);
					}
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
					res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
					res.setHeader('Access-Control-Allow-Credentials', true);
					res.send(JSON.stringify(result));
				});
			}
		});
	}
	catch(ex){
		console.error("Internal error: " + ex);
		return next(ex);
	}
});

router.get('/api/data/premium',function(req,res,next){
	try{
		req.getConnection(function(err,conn){
			if(err){
				console.error("SQL Connection Error: ", err);
				return next(err);
			}else{
				var q = "SELECT * FROM m_client WHERE STATUS='1'";
				var query = conn.query(q, function(err, result){
					if(err){
						console.error("SQL Error : ", err);
						return next(err);
					}
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
					res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
					res.setHeader('Access-Control-Allow-Credentials', true);
					res.send(JSON.stringify(result));
				});
			}
		});
	}
	catch(ex){
		console.error("Internal error: " + ex);
		return next(ex);
	}
});

