'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require('../_atoms/string-required')
const description 			= require('../_atoms/string-required')
const idDevice 				= require('../_atoms/number-default-0')
const EVMSCode 				= require('../_atoms/string-required')
const stores_id 			= require('../_atoms/object-ref')('Stores')
const company_id 			= require('../_atoms/object-ref')('Companys')
const enable 				= require('../_atoms/boolean-default-true')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')

const Device = new Schema({
	stores_id,
	company_id,
	EVMSCode,
	idDevice,
	name,
	enable,
	created_at,
	updated_at
});

Device.index({EVMSCode: 1, idDevice:1, enable:1});

const molecule =  mongoose.model('Devices', Device);


module.exports = molecule
