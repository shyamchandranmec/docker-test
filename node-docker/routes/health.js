const router = require('express').Router();

router.get('/', (req, res, next) => {
	console.log("hi")
  return res.json({
    healthy: true
  });
});

module.exports = router;
