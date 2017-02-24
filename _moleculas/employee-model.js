'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const firstName 			= require ('../_atomo/string-required')
const lastName 				= require ('../_atomo/string-required')
const userName 				= require ('../_atomo/string-required-unique')
const password 				=  require('../_atomo/string-password-crypt')
const email 				= require('../_atomo/string-required-unique')
const profile_id   			= require('../_atomo/object-ref')('Profiles')
const stores_id   			= require('../_atomo/object-ref')('Stores')
const business_id   		= require('../_atomo/object-ref')('Business')
const regions_id   			= require('../_atomo/object-ref')('Regions')
const departments_id   		= require('../_atomo/object-ref')('Departments')
const startDate				= require('../_atomo/date-default')
const endDate				= require('../_atomo/date-default')
const status 				= require('../_atomo/boolean-default-true')
const token 				= require('../_atomo/string')
const created_at		    = require('../_atomo/date-default')
const updated_at 		    = require('../_atomo/date-default')
const deleted_at 		    = require('../_atomo/date-default')

const Employee = new Schema({
	firstName,
	lastName,
	userName,
	password,
	email,
	startDate,
	endDate,
	status,
	profile_id,
	stores_id,
	business_id,
	regions_id,
	departments_id,
	created_at,
	updated_at,
	deleted_at
});

Employee.index({userName: 1,password:1,email:1,token:1});

const molecule =  mongoose.model('Employees', Employee);


module.exports = molecule
