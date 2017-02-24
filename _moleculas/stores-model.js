'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atomo/string-required')
const description 			= require ('../_atomo/string-required')
const code 					= require ('../_atomo/string-required')
const business_id   		= require('../_atomo/object-ref')('Businesss')
const regions_id   			= require('../_atomo/object-ref')('Regions')
const created_at		    = require('../_atomo/date-default')
const updated_at 		    = require('../_atomo/date-default')
const deleted_at 		    = require('../_atomo/date-default')

const Stores = new Schema({
	business_id,
	regions_id,
	name,
	code,
	description,
	created_at,
	updated_at,
	deleted_at
});

Stores.index({name: 1,description:1,code:1});
/*
	function autoPopulate
	Pre findOne/findById/find
*/
// const autoPopulate = function(next) {
// 	this.populate('business_id');
// 	this.populate('regions_id')
// 	next();
// };

// Stores.pre('findOne', autoPopulate).pre('findById', autoPopulate).pre('find', autoPopulate);

const molecule =  mongoose.model('Stores', Stores);


module.exports = molecule
