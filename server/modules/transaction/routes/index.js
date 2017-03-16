module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const list          = require( '../../../_organelles/organelle-find');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const transModel    = require( '../../../_molecules/transaction-model');
  const validate      = require( '../validate-transaction')

  const url           = '/api/transaction'
  
  app.route(url)
    .post(validate.make, create(transModel))
    .get(list(transModel))

  app.route(url +'/:id')
    .get(validate.change, listOne(transModel))
    .put(validate.change, update(transModel))
    .delete(validate.delete, remove(transModel))

}
