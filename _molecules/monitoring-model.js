
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const stores_id 			= require('../_atoms/object-ref')('Companys')
const EVMSCode				= require('../_atoms/string')
const lastCom				= require('../_atoms/string')
const EVMSStatus			= require('../_atoms/boolean-default-true')
const statusDevice 			= require('../_atoms/boolean-default-true')
const statusAlerts 			= require('../_atoms/boolean-default-true')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')


const Monitoring = new Schema({
	stores_id,
	EVMSCode,
	EVMSStatus,
	lastCom,
	statusDevice,
	statusAlerts,
	created_at,
	updated_at
});

Monitoring.index({EVMSCode: 1, EVMSStatus:1, statusDevice:1, statusAlerts:1 });

const molecule =  mongoose.model('Monitorings', Monitoring);

module.exports = molecule
