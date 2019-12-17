const Q = require('q');
const express = require('express');
const _ = require('lodash');
const router = express.Router();
const moment = require('moment');

const settings = require('../settings');
const ContentDeliveryClient = require('../cms/services/ContentDeliveryClient');
const templateService = require('../cms/services/template-service');


function registerPage(page) {
  router.get(page.route, function(req, res, next) {
    var slotMap = getSlotMap(page, req);
    var slotIds = _.values(slotMap);

    var host = req.cookies['amplience-host'] || settings.cms;
    var account = settings.cmsAccount;
    var locale = req.cookies['locale'] || req.query.locale;
    var segment = req.cookies['segment'] || req.query.segment;

    var client = new ContentDeliveryClient(host, account, locale, segment);

    Promise.resolve(slotIds)
        .then(client.getByIds.bind(client))
        .then(x => templateService.compileSlots(x, {segment: req.query.segment, currency: req.query.currency, locale:locale}))
        .then(function(slots) {
          var pageModel = {};
          for(var key in slotMap) {
            pageModel[key] = slots[slotMap[key]];
          }
          return pageModel;

        })
        .then(function(pageModel) {
          pageModel.session = req.cookies;
          pageModel.moment = moment;
          
          pageModel.segment = req.query.segment;
          pageModel.currency = req.query.currency;
          pageModel.locale = req.query.locale;
          res.render('layouts/' + page.layout, pageModel);
        })
        .catch(function(err) {
          res.render('pages/error', {
            message: err.message,
              error: err
          });
        });

  });
}

function getSlotMap(page, req) {
  var keys = Object.keys(page.slots);
  var map = {};
  for(var i=0; i < keys.length; i++) {
    var key = keys[i];
    map[key] = req.query[key] || page.slots[key];
  }
  return map;
}

settings.sitemap.map(registerPage);

module.exports = router;
