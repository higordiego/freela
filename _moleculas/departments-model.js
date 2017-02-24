'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atomo/string-required')
const description 			= require ('../_atomo/string-required')
const flag 					= require ('../_atomo/boolean-default-true')
const stores_id   			= require('../_atomo/object-ref')('Stores')
const EVMSCode				= require ('../_atomo/string')
const code 					= require('../_atomo/string-required')
const deviceID				= require ('../_atomo/number')
const register				= require ('../_atomo/string')
const employeeName			= require ('../_atomo/string')
const employeeNum			= require ('../_atomo/number')
const created_at		    = require('../_atomo/date-default')
const updated_at 		    = require('../_atomo/date-default')
const deleted_at 		    = require('../_atomo/date-default')

const Departments = new Schema({
	stores_id,
	name,
	flag,
	description,
	EVMSCode,
	deviceID,
	register,
	employeeName,
	employeeNum,
	created_at,
	updated_at,
	deleted_at
});

 Departments.index({name: 1,description:1, flag:1,deviceID:1,register:1,EVMSCode:1});
/*
	function autoPopulate
	Pre findOne/findById/find
*/
// const autoPopulate = function(next) {
// 	this.populate('stores_id');
// 	next();
// };

//Departments.pre('findOne', autoPopulate).pre('findById', autoPopulate).pre('find', autoPopulate);

const molecule =  mongoose.model('Departments', Departments);


module.exports = molecule
