const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const Store 				= require ('../_molecules/stores-model')
const name 					= require ('../_atoms/string-required')
const description 			= require ('../_atoms/string-required')
const flag 					= require ('../_atoms/boolean-default-true')
const stores_id   			= require ('../_atoms/object-ref')('Stores')
const devices_id   			= require ('../_atoms/object-ref')('Devices')
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
	devices_id,
	register,
	created_at,
	updated_at
});

Departments.index({name: 1,flag:1,register:1,EVMSCode:1});


const molecule =  mongoose.model('Departments', Departments);

module.exports = molecule
