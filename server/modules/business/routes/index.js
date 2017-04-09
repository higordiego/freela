module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const populate      = require( '../../../_organelles/organelle-find-populate-one');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const businessModel = require( '../../../_molecules/business-group-model');
  const validate      = require( '../validate-business')

  const url           = '/api/business'
  
  app.route(url)
     .post(validate.make, create(businessModel))
     .get(populate(businessModel)('company_id'))

  app.route(url +'/:id')
    .get(validate.change, listOne(businessModel))
    .put(validate.change, update(businessModel))
    .delete(validate.delete, remove(businessModel))

}
