'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atomo/string-required')
const description 			= require ('../_atomo/string-required')
const created_at		    = require('../_atomo/date-default')
const updated_at 		    = require('../_atomo/date-default')
const deleted_at 		    = require('../_atomo/date-default')

const Business = new Schema({
	name,
	description,
	created_at,
	updated_at,
	deleted_at
});

Business.index({name: 1,description:1});

const molecule =  mongoose.model('Businesss', Business);


module.exports = molecule
