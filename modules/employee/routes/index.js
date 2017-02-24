module.exports =  (app) => {

  const create            = require( '../../../_organelles/organelle-create');
  const list              = require( '../../../_organelles/organelle-find');
  const listOne           = require( '../../../_organelles/organelle-findById');
  const update            = require( '../../../_organelles/organelle-update');
  const remove            = require( '../../../_organelles/organelle-remove');
  const listEmployeeEmail = require('../../../_organelles/organelle-listEmployeeEmail')
  const validateUser      = require( '../../../_organelles/organelle-validate-auth');
  const removeEmployee    = require('../../../_organelles/organelle-removeEmployee')
  const employeeModel     = require( '../../../_moleculas/employee-model');

  const validate      = require('../validate-employee')

  const url           = '/api/employee'

/*
  Rota inicial
*/
  app.route('/')
     .get((req,res)=>res.json({msg: 'Bem vindo api Eyeson',version: '0.0.1'}))

  // route login jwt
  app.route('/employee/auth')
     .post(validateUser(app))
  
  app.route(url)
    .post(validate.make, create(employeeModel))
    .get(list(employeeModel))

  app.route(url + '/:username/:password/:email')
     .delete(removeEmployee(employeeModel))

  app.route(url + '/details/:username')
     .get(listEmployeeEmail(employeeModel))

  app.route(url +'/:id')
      .get(validate.change, listOne(employeeModel))
      .put(validate.change, update(employeeModel))
      .delete(validate.delete, remove(employeeModel))


}