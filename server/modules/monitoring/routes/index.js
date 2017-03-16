module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const list          = require( '../../../_organelles/organelle-find');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const monitModel    = require( '../../../_molecules/monitoring-model');
  const validate      = require( '../validate-monitoring')

  const url           = '/api/monitoring'
  
  app.route(url)
    .post(validate.make, create(monitModel))
    .get(list(monitModel))

  app.route(url +'/:id')
    .get(validate.change, listOne(monitModel))
    .put(validate.change, update(monitModel))
    .delete(validate.delete, remove(monitModel))

}
