var log = require('logger') (module);
var db = require('db');

db.connect();

var User = require('./user');

function run() {
    var v = new User('Вася');
    var p = new User('Петя');
    v.hello(p);

    log(db.getPhrase('Run Successful'));
}

if (module.parent) {
    module.exports.run = run;
} else run();