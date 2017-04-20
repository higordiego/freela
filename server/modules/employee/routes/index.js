module.exports =  (app) => {

  const create            = require( '../../../_organelles/organelle-create');
  const list              = require( '../../../_organelles/organelle-find-populate-five');
  const listOne           = require( '../../../_organelles/organelle-findById');
  const update            = require( '../../../_organelles/organelle-update');
  const remove            = require( '../../../_organelles/organelle-remove');
  const updateProfile     = require( '../../../_organelles/organelle-update-myProfile');
  const listEmployeeEmail = require('../../../_organelles/organelle-listEmployeeToken')
  const forgot            = require('../../../_organelles/organelle-forgot')
  const passwordUpdate    = require('../../../_organelles/organelle-forgot-update')
  const validateForgot    = require('../../../_organelles/organelle-forgot-validate')
  const validateUser      = require( '../../../_organelles/organelle-validate-auth');
  const removeEmployee    = require('../../../_organelles/organelle-removeEmployee')
  const employeeModel     = require( '../../../_molecules/employee-model');

  const validate          = require('../validate-employee')

  const url               = '/api/employee'

/*
  Rota inicial
  */
  app.route('/')
  .get((req,res)=>res.json({msg: 'Bem vindo api Eyeson',version: '0.0.1'}))


  // route login jwt  
  
  app.route('/')
  .post(validateUser(app))

  app.route('/employee')
  .post(create(employeeModel))

  app.route('/forgot/:email')
  .get(forgot(employeeModel))

  app.route('/forgot/validate/:forgot')
  .get(validateForgot(employeeModel))

  app.route('/forgot/password')
  .post(passwordUpdate(employeeModel))


  app.route(url)
  .post(validate.make, create(employeeModel))
  .get(list(employeeModel)('business')('regions')('profiles')('departments')('stores'))

  app.route(url + '/:username/:password/:email')
  .delete(removeEmployee(employeeModel))

  app.route(url + '/details/token')
  .post(listEmployeeEmail(employeeModel))

  app.route(url +'/:id')
  .get(validate.change, listOne(employeeModel))
  .put(validate.change, update(employeeModel))
  .delete(validate.delete, remove(employeeModel))


  app.route(url + '/update/employeeProfile/:id')
  .put(validate.change, updateProfile(employeeModel))


}
