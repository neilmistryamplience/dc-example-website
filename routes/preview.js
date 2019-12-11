const express = require('express');
const router = express.Router();

router.get('/timestamp', function(req, res, next) {
    var redirect = req.query.redirect || '/';
    var host = req.query.vse;
    var timestamp = req.query.timestamp;
    var segment = req.query.segment;
    res.cookie('amplience-host', host);
    res.cookie('timestamp', timestamp);
    res.cookie('segment', segment);
    res.redirect(redirect);
});

router.get('/current', function(req, res, next) {
    var redirect = req.query.redirect || '/';
    res.clearCookie('amplience-host');
    res.clearCookie('timestamp');
    res.clearCookie('segment');
    res.redirect('back');
});

module.exports = router;