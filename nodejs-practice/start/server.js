var user = require('./user');

var v = new user.User('Вася');
var p = new user.User('Петя');

v.hello(p);