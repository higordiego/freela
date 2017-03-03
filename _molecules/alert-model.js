
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const title 				= require('../_atoms/string-required')
const text 					= require('../_atoms/string-required')
const stores_id 			= require('../_atoms/object-ref')('Stores')
const profile_id 			= require('../_atoms/object-ref')('Profiles')
const transaction_id 		= require('../_atoms/object-ref')('Transactions')
const company_id 			= require('../_atoms/object-ref')('Companys')
const region_id 			= require('../_atoms/object-ref')('Regions')
const employee_id 			= require('../_atoms/object-ref')('Employees')
const date 		    		= require('../_atoms/date-default')
const EVMSCode				= require('../_atoms/string-required')
const comment				= require('../_atoms/string')
const status 				= require('../_atoms/boolean-default-true') 

const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')


const Alert = new Schema({
	profile_id,
	transaction_id,
	company_id,
	region_id,
	employee_id,
	title,
	text,
	comment,
	stores_id,
	EVMSCode,
	status,
	created_at,
	updated_at
});

Alert.index({title: 1, EVMSCode:1, status:1});

const molecule =  mongoose.model('Alerts', Alert);


module.exports = molecule
