const amp = require('cms-javascript-sdk');
const handlebarsService = require('./handlebars-service');
const fs = require('fs');
const path = require('path');

function getAsanaInformation(response) {
    var contentItems = amp.inlineContent(response);
    var compiled = contentItems.map(compileasana);

    return Promise.all(compiled)
        .then(function(outputs) {
            var result = {};
            for(var i=0; i < contentItems.length; i++) {
                var id = contentItems[i]["@id"];
                id = id.slice(id.lastIndexOf('/')+1);
                result[id] = outputs[i];
            }
            return result;
        });
}

function compileSlots(response, extraData) {
    var contentItems = amp.inlineContent(response);

    console.log("What is the content.....", contentItems);
    var compiled = [];
    contentItems.forEach(function(item){
        compiled.push(compile(item, extraData));
    })
    //var compiled = contentItems.map(compile);

    return Promise.all(compiled)
        .then(function(outputs) {
            var result = {};
            for(var i=0; i < contentItems.length; i++) {
                var id = contentItems[i]["@id"];
                id = id.slice(id.lastIndexOf('/')+1);
                result[id] = outputs[i];
            }
            return result;
        });
}

function compile(content, extraData) {
    return handlebarsService.process('mapping', content, {getTemplate: getTemplate},  extraData );
}

function compileasana(content) {
    return handlebarsService.process('asana-mapping', content, {
        getTemplate: getTemplate
    });
}


function getTemplate(name) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path.resolve(__dirname, '../templates/' + name + '.hbs'), "utf-8", function (error, data) {
            if(error) {
                reject(error);
            }else{
                resolve(data);
            }
        });
    });

}


module.exports = {
    compileSlots: compileSlots,
    getAsanaInformation: getAsanaInformation
};