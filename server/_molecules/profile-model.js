'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atoms/string-required')
const description 			= require ('../_atoms/string-required')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const menuId 				= require('../_atoms/number')



const Profiles = new Schema({
	name,
	menuId,
	description,
	created_at,
	updated_at
});

Profiles.index({name: 1, menuId:1});


const molecule =  mongoose.model('Profiles', Profiles);


module.exports = molecule
