'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;


const firstName 			= require ('../_atoms/string-required')
const lastName 				= require ('../_atoms/string-required')
const forgot 				= require ('../_atoms/string')
const userName 				= require ('../_atoms/string-required-unique')
const password 				=  require('../_atoms/string-password-crypt')
const email 				= require('../_atoms/string-required-unique')
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
	stores: [ {type: mongoose.Schema.ObjectId, ref: 'Stores'} ],
	business: [ {type: mongoose.Schema.ObjectId, ref: 'Businesss'} ],
	regions: [ {type: mongoose.Schema.ObjectId, ref: 'Regions'} ],
	profiles: [ {type: mongoose.Schema.ObjectId, ref: 'Profiles'} ],
	departments: [{type: mongoose.Schema.ObjectId, ref: 'Departments'}  ],
	created_at,
	updated_at
});

Employee.index({userName: 1,email:1});



const molecule =  mongoose.model('Employees', Employee);


module.exports = molecule
