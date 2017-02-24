module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const list          = require( '../../../_organelles/organelle-find');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const businessModel = require( '../../../_moleculas/business-group-model');
  const validate      = require('../validate-business')

  const url           = '/api/business'
  
  app.route(url)
  .post(validate.make, create(businessModel))
  .get(list(businessModel))

  app.route(url +'/:id')
  .get(validate.change, listOne(businessModel))
  .put(validate.change, update(businessModel))
  .delete(validate.delete, remove(businessModel))

}
