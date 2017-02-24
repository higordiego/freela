module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const list          = require( '../../../_organelles/organelle-find');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const regionsModel  = require( '../../../_moleculas/regions-model');
  const validate      = require('../validate-regions')

  const url           = '/api/regions'
  
  app.route(url)
      .post(validate.make, create(regionsModel))
      .get(list(regionsModel))

  app.route(url +'/:id')
     .get(validate.change, listOne(regionsModel))
     .put(validate.change, update(regionsModel))
     .delete(validate.delete, remove(regionsModel))

 }