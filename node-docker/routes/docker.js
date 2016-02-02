const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    docker: 'rocks!',
    mongo: global.mongostatus
  });
});

module.exports = router;
