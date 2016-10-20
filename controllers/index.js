var express = require('express');
var ctrl = express.Router();

var users = [
{
	email: 'anitanwright@gmail.com',
	password: 'Iam1234'
},
{
	email: 'cliffjeff@gmail.com',
	password: 'Iam999'
},
{
	email: 'anajames@gmail.com',
	password: 'Iam1299'
}
];

function findUserById(id){
	var offsetIndex = id - 1;
	return users[offsetIndex];
};

/* GET home page. */
ctrl.get('/', function(req, res, next) {
  res.json(users);
});

ctrl.get('/:id', function(req, res, next){
	console.log(req.params);
	console.log('ROUTE PARAMS----');
	res.json({}); //empty for now

});

module.exports = ctrl;
