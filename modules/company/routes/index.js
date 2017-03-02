module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const list          = require( '../../../_organelles/organelle-find');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const companyModel  = require( '../../../_molecules/company-model');
  const validate      = require( '../validate-company')

  const url           = '/api/company'
  
  app.route(url)
    .post(validate.make, create(companyModel))
    .get(list(companyModel))

  app.route(url +'/:id')
    .get(validate.change, listOne(companyModel))
    .put(validate.change, update(companyModel))
    .delete(validate.delete, remove(companyModel))

}
