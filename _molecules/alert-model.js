
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const title 				= require('../_atoms/string-required')
const text 					= require('../_atoms/string-required')
const user_id 				= require('../_atoms/object-ref')('Users')
const stores_id 			= require('../_atoms/object-ref')('Stores')
const date 		    		= require('../_atoms/date-default')
const EVMSCode				= require ('../_atoms/string-required')
const transaction			= require ('../_atoms/string')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')


const Alert = new Schema({
	user_id,
	title,
	text,
	comment,
	stores_id,
	EVMSCode,
	status
	transaction,
	created_at,
	updated_at
});

Business.index({title: 1, date:1, EVMSCode:1});

const molecule =  mongoose.model('Alerts', Alert);


module.exports = molecule
