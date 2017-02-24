'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atomo/string-required')
const description 			= require ('../_atomo/string-required')
const created_at		    = require('../_atomo/date-default')
const updated_at 		    = require('../_atomo/date-default')
const deleted_at 		    = require('../_atomo/date-default')
const menuId 				= require('../_atomo/number')



const Profiles = new Schema({
	name,
	menuId,
	description,
	created_at,
	updated_at,
	deleted_at
});

Profiles.index({name: 1,description:1,menuId:1});

/*
	function autoPopulate
	Pre findOne/findById/find
*/
// const autoPopulate = function(next) {
// 	this.populate('business_id');
// 	next();
// };

// Regions.pre('findOne', autoPopulate).pre('findById', autoPopulate).pre('find', autoPopulate);

const molecule =  mongoose.model('Profiles', Profiles);


module.exports = molecule