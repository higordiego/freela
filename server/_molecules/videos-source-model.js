'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require('../_atoms/string-required')
const description 			= require('../_atoms/string-required')
const enable 				= require('../_atoms/boolean-default-true')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')

const Video = new Schema({
	name,
	enable,
	created_at,
	updated_at
});

Video.index({enable:1});

const molecule =  mongoose.model('Videos', Video);

module.exports = molecule
