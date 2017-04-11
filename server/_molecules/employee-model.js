'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const firstName 			= require ('../_atoms/string-required')
const lastName 				= require ('../_atoms/string-required')
const forgot 				= require ('../_atoms/string')
const userName 				= require ('../_atoms/string-required-unique')
const password 				=  require('../_atoms/string-password-crypt')
const email 				= require('../_atoms/string-required-unique')
const profile_id   			= require('../_atoms/object-ref')('Profiles')
const stores_id   			= require('../_atoms/object-ref')('Stores')
const business_id   		= require('../_atoms/object-ref')('Business')
const regions_id   			= require('../_atoms/object-ref')('Regions')
const departments_id   		= require('../_atoms/object-ref')('Departments')
const startDate				= require('../_atoms/date-default')
const endDate				= require('../_atoms/date-default')
const status 				= require('../_atoms/boolean-default-true')
const token 				= require('../_atoms/string')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')


const Employee = new Schema({
	firstName,
	lastName,
	userName,
	password,
	email,
	token,
	forgot,
	startDate,
	endDate,
	status,
	store: [{
		_id: stores_id	
	}],
	busines: [{
		_id: business_id,	
	}],
	region: [{
		_id: regions_id
	}],
	profile: [{
		_id: profile_id
	}],
	department: [{
		_id: departments_id
	}],
	created_at,
	updated_at
});

Employee.index({userName: 1,email:1});

const molecule =  mongoose.model('Employees', Employee);


module.exports = molecule
