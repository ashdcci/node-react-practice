var express = new require('express');
var router = express.Router();

router.get('/:resource',function(req, res, next){
	res.json({
		confirmation: 'success',
		resource: req.params.resource
	})
})

module.exports = router