'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require('../_atoms/string-required')
const description 			= require('../_atoms/string-required')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')

const Company = new Schema({
	name,
	description,
	created_at,
	updated_at
});

Company.index({name: 1});

const molecule =  mongoose.model('Companys', Company);


module.exports = molecule
