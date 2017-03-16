'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atoms/string-required')
const description 			= require ('../_atoms/string-required')
const business_id   		= require ('../_atoms/object-ref')('Businesss')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')

const Regions = new Schema({
	business_id,
	name,
	description,
	created_at,
	updated_at
});

Regions.index({name: 1});


const molecule =  mongoose.model('Regions', Regions);


module.exports = molecule
