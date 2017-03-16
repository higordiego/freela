const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const Store 				= require ('../_molecules/stores-model')

const name 					= require ('../_atoms/string-required')
const description 			= require ('../_atoms/string-required')
const flag 					= require ('../_atoms/boolean-default-true')
const stores_id   			= require ('../_atoms/object-ref')('Stores')
const device_id   			= require ('../_atoms/object-ref')('Devices')
const employee_id   		= require ('../_atoms/object-ref')('Employees')
const EVMSCode				= require ('../_atoms/string')
const code 					= require ('../_atoms/string-required')
const register				= require ('../_atoms/string')
const created_at		    = require ('../_atoms/date-default')
const updated_at 		    = require ('../_atoms/date-default')

const Departments = new Schema({
	stores_id,
	name,
	flag,
	description,
	EVMSCode,
	device_id,
	register,
	employee_id,
	created_at,
	updated_at
});

Departments.index({name: 1,flag:1,register:1,EVMSCode:1});


const molecule =  mongoose.model('Departments', Departments);

module.exports = molecule
