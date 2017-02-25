'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require('../_atoms/string-required')
const description 			= require('../_atoms/string-required')
const status 				= require('../_atoms/boolean-default-true')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')

const Business = new Schema({
	name,
	description,
	status,
	created_at,
	updated_at
});

Business.index({name: 1, status:1});

const molecule =  mongoose.model('Businesss', Business);


module.exports = molecule
