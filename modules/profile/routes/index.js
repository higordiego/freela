module.exports =  (app) => {

  const create              = require( '../../../_organelles/organelle-create');
  const list                = require( '../../../_organelles/organelle-find');
  const createPrDetails     = require( '../../../_organelles/organelle-createPrDetails');
  const listPrDetails       = require( '../../../_organelles/organelle-listPrDetails')
  const listPrOneDetails    = require( '../../../_organelles/organelle-listPrOneDetails')
  const removePrDetails     = require( '../../../_organelles/organelle-removePrDetails')
  const listOne             = require( '../../../_organelles/organelle-findById');
  const update              = require( '../../../_organelles/organelle-update');
  const remove              = require( '../../../_organelles/organelle-remove');
  const profileModel        = require( '../../../_molecules/profile-model');
  const validate            = require('../validate-profile')

  const url                 = '/api/profile'
  
  app.route(url)
    .post(validate.make, create(profileModel))
    .get(list(profileModel))
  
  app.route(url + '/details/:id/:menu')
    .get(listPrOneDetails(profileModel))
    .put(update(profileModel))
    .delete(removePrDetails(profileModel))

  app.route(url + '/details/')
    .get(listPrDetails(profileModel))
    .post(validate.profileDetail, createPrDetails(profileModel))

  app.route(url +'/:id')
    .get(validate.change, listOne(profileModel))
    .put(validate.change, update(profileModel))
    .delete(validate.delete, remove(profileModel))



}
