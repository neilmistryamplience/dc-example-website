const request = require('request');

function ContentDeliveryClient(baseUrl, account, locale, segment) {
    this.baseUrl = baseUrl;
    this.account = account;
    this.locale = locale;
    this.segment = segment;

    if(this.baseUrl.indexOf('://') == -1) {
        this.baseUrl = 'http://' + this.baseUrl;
    }
}

ContentDeliveryClient.prototype.getByIds = function(ids) {
    return this.query({"sys.iri": {"$in": ids.map(function(id){ return "http://content.cms.amplience.com/" + id })}});
}

ContentDeliveryClient.prototype.getById = function(id) {
    return this.query({"sys.iri":"http://content.cms.amplience.com/" + id});
};

ContentDeliveryClient.prototype.query = function(query, scope, fullBodyObject, locale) {
    if(scope === undefined) {
        scope = "tree";
    }
    if(fullBodyObject === undefined) {
        fullBodyObject = true;
    }

    var url = this.baseUrl + '/cms/content/query' +
            '?query=' + encodeURIComponent(JSON.stringify(query)) +
            '&store=' + encodeURIComponent(this.account) +
            '&scope=' + encodeURIComponent(scope) +
            '&fullBodyObject=' + encodeURIComponent(fullBodyObject) + 
            '&locale=' + this.locale;

    console.log(url);
    console.log(this.segment)
    var thesegment = this.segment;
    return new Promise(function(resolve, reject) {
        request(url, function (error, response, body) {
            if(error) {
                reject(error);
            }else{
                var t = JSON.parse(body);
                resolve(t);
            }
        });
    });

};

module.exports = ContentDeliveryClient;