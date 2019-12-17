const express = require('express');
const router = express.Router();

router.get('/timestamp', function(req, res, next) {
    var redirect = req.query.redirect || '/';
    var host = req.query.vse;
    var timestamp = req.query.timestamp;
    var segment = req.query.segment;
    var currency = req.query.currency;
    var locale = req.query.locale;
    res.cookie('amplience-host', host);
    res.cookie('timestamp', timestamp);
    res.cookie('segment', segment);
    res.cookie('currency', currency);
    res.cookie('locale', locale);
    res.redirect(redirect);
});

router.get('/current', function(req, res, next) {
    var redirect = req.query.redirect || '/';
    res.clearCookie('amplience-host');
    res.clearCookie('timestamp');
    res.clearCookie('segment');
    res.clearCookie('currency');
    res.clearCookie('locale');
    res.redirect('back');
});

module.exports = router;