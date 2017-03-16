module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const createDetails = require( '../../../_organelles/organelle-createAtDetails');
  const list          = require( '../../../_organelles/organelle-find');
  const employeeOne   = require( '../../../_organelles/organelle-findOne-employee');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');

  const remove        = require( '../../../_organelles/organelle-remove');
  const alertModel    = require( '../../../_molecules/alert-model');
  const validate      = require( '../validate-alert')

  const url           = '/api/alert'
    

  app.route(url +'/employee/:employee')
     .get(validate.employee, employeeOne(alertModel))

  app.route(url + '/details/comments')
     .post(validate.detailsComment, createDetails(alertModel))

  app.route(url + '/details/status')
     .post(validate.detailsStatus, createDetails(alertModel))

  app.route(url + '/forward')
     .post(validate.forward, createDetails(alertModel))


  app.route(url)
    .post(validate.make, create(alertModel))
    .get(list(alertModel))

  app.route(url +'/:id')
      .get(validate.change, listOne(alertModel))
      .put(validate.change, update(alertModel))
      .delete(validate.delete, remove(alertModel))

}
