module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const list          = require( '../../../_organelles/organelle-find');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const deviceModel   = require( '../../../_molecules/devices-model');
  const validate      = require( '../validate-devices')

  const url           = '/api/devices'
  
  app.route(url)
    .post(validate.make, create(deviceModel))
    .get(list(deviceModel))

  app.route(url +'/:id')
    .get(validate.change, listOne(deviceModel))
    .put(validate.change, update(deviceModel))
    .delete(validate.delete, remove(deviceModel))

}
