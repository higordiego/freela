module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const populate      = require( '../../../_organelles/organelle-find-populate-two');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const storesModel   = require( '../../../_molecules/stores-model');
  const validate      = require('../validate-stores')

  const url           = '/api/stores'
  
app.route(url +'/:id')
     .get(validate.change, listOne(storesModel))
     .put(validate.change, update(storesModel))
     .delete(validate.delete, remove(storesModel))

  
  app.route(url)
      .post(validate.make, create(storesModel))
      .get(populate(storesModel)('business_id')('regions_id'))

  
 }


