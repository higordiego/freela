'use strict'
module.exports  = (Organism) => 
  (req, res) => {
    const query 	= {EVMSCode: req.params.EVMSCode ,deviceID: req.params.DeviceID}
    const mod 	= { $unset : { EVMSCode : 1,deviceID:1,register:1,employeeName:1,employeeNum:1} }
    
    const success 	= require('./ribossomos/success-200-json') (res)
    const error  	= require('./ribossomos/error-json') (res)
    
    return Organism.update(query,mod)
                    .exec()
                    .then(success)
                    .catch(error)
  }

