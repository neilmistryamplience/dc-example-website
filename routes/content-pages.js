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

    //console.log("REQUEST SEG = " + req.query.segment);
    var client = new ContentDeliveryClient(req.cookies['amplience-host'] || settings.cms, settings.cmsAccount, req.query.locale, req.query.segment);

    Promise.resolve(slotIds)
        .then(client.getByIds.bind(client))
        .then(x => templateService.compileSlots(x, {segment: req.query.segment}))
        .then(function(slots) {
          console.log("SLOTS: ", slots)
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
          console.log("---- ", pageModel.segment )
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
