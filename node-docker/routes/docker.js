const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: 'rocks!',
    mongo: global.mongostatus
  });
});

router.head("/",function(req, res){
	res.send({
		hi: "hi"
	})
})
module.exports = router;
