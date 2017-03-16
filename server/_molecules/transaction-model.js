
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const transTypeDesc 		= require('../_atoms/string-required')
const transType 			= require('../_atoms/string-required')
const type 					= require('../_atoms/boolean-default-true')
const active 				= require('../_atoms/boolean-default-true')
const transaction			= require('../_atoms/string')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')


const Transaction = new Schema({
	transType,
	transTypeDesc,
	active,
	type,
	created_at,
	updated_at
});

Transaction.index({active: 1, type:1, transType:1});

const molecule =  mongoose.model('Transactions', Transaction);

module.exports = molecule
