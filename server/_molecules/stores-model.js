'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atoms/string-required')
const description 			= require ('../_atoms/string-required')
const code 					= require ('../_atoms/string-required')
const business_id   		= require('../_atoms/object-ref')('Businesss')
const regions_id   			= require('../_atoms/object-ref')('Regions')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')

const Stores = new Schema({
	business_id,
	regions_id,
	name,
	code,
	description,
	created_at,
	updated_at
});

Stores.index({name: 1,code:1});


const molecule =  mongoose.model('Stores', Stores);


module.exports = molecule
