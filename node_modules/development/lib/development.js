'use strict';

/*development only, used by paul for auto checkout */

var gitpull = require('git-pull')
  , npm = require('npm')
  , fs = require('fs')
  , path = require('path');



var Development = module.exports = function(config) {
  this.config = util.extend({}, Development.defaults, config);
}

Development.defaults = {
  packageFile: path.join(__dirname,'../','./package.json');
}


var p = Development.prototype;

p.pull = function(callback) {
  gitpull('.', function (err, consoleOutput) {
    if (err) {
      return callback(true, consoleOutput);
    } else {

      var npm = this.npmInstall(function(err, value){
        if (err) return callback(true, value);
        return callback(false, data);
      });


    }
  });
};


p.npmInstall = function(callback) {

  fs.readFile(this.config.packageFile, function(err, contents){
    if (err) return callback(true, err);

    var config = JSON.parse(contents);

    npm.load(config, function (er) {
      if (er) return callback(true, er)
      npm.commands.install(function (er, data) {
        if (er) return callback(true, er);
        callback(false, data);
      })

    });
  });

}