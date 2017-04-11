'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 		= require ('../_atoms/string-required')
const description = require ('../_atoms/string-required')
const business 	= require('../_atoms/boolean-default-false')
const profiles 	= require('../_atoms/boolean-default-false')
const regions 	= require('../_atoms/boolean-default-false')
const stores 	= require('../_atoms/boolean-default-false')
const repost	= require('../_atoms/boolean-default-false')
const departments = require('../_atoms/boolean-default-false')
const employee_id = require('../_atoms/object-ref')('Employees')
const setup = require('../_atoms/boolean-default-false')

const created_at = require('../_atoms/date-default')
const updated_at = require('../_atoms/date-default')


const Profiles = new Schema({
	employee_id,
	repost,
	profiles,
	business,
	regions,
	stores,
	departments,
	setup,
	description,
	created_at,
	updated_at
});

const molecule =  mongoose.model('Profiles', Profiles);


module.exports = molecule
