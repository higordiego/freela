module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const populate      = require( '../../../_organelles/organelle-find-populate-one');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const regionsModel  = require( '../../../_molecules/regions-model');
  const validate      = require( '../validate-regions');

  const url           = '/api/regions'
  
  app.route(url)
     .post(validate.make, create(regionsModel))
     .get(populate(regionsModel)('business_id'))

  app.route(url +'/:id')
     .get(validate.change, listOne(regionsModel))
     .put(validate.change, update(regionsModel))
     .delete(validate.delete, remove(regionsModel))

 }