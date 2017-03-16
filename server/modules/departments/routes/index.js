module.exports =  (app) => {
  const create             = require( '../../../_organelles/organelle-create');
  const list               = require( '../../../_organelles/organelle-find');
  const listOne            = require( '../../../_organelles/organelle-findById');
  const listStore          = require( '../../../_organelles/organelle-findDpStore')
  const createDpDetails    = require( '../../../_organelles/organelle-createDpDetails')
  const listDpDetails      = require( '../../../_organelles/organelle-listDpDetails')
  const listDpOneDetails   = require( '../../../_organelles/organelle-listDpOneDetails')
  const removeDetails      = require( '../../../_organelles/organelle-removeDpDetails')
  const update             = require( '../../../_organelles/organelle-update');
  const remove             = require( '../../../_organelles/organelle-remove');
  const departmentsModel   = require( '../../../_molecules/departments-model');
  const validate           = require('../validate-departments');

  const url                = '/api/departments';
  
  app.route(url)
      .post(validate.make, create(departmentsModel))
      .get(list(departmentsModel))

  app.route(url + '/details/')
      .post(validate.dpDetails, createDpDetails(departmentsModel))
      .get(listDpDetails(departmentsModel))

  app.route(url + '/details/:EVMSCode/:DeviceID')
     .get(listDpOneDetails(departmentsModel))
     .put(update(departmentsModel))
     .delete(removeDetails(departmentsModel))

  app.route(url +'/:id')
      .get(validate.change, listOne(departmentsModel))
      .put(validate.change, update(departmentsModel))
      .delete(validate.delete, remove(departmentsModel))

  app.route(url + '/stores/:id')
      .get(validate.change, listStore(departmentsModel))


}
