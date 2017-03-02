module.exports =  (app) => {

  const create        = require( '../../../_organelles/organelle-create');
  const list          = require( '../../../_organelles/organelle-find');
  const listOne       = require( '../../../_organelles/organelle-findById');
  const update        = require( '../../../_organelles/organelle-update');
  const remove        = require( '../../../_organelles/organelle-remove');
  const videosModel   = require( '../../../_molecules/videos-source-model');
  const validate      = require( '../validate-devices')

  const url           = '/api/videos'
  
  app.route(url)
    .post(validate.make, create(videosModel))
    .get(list(videosModel))

  app.route(url +'/:id')
    .get(validate.change, listOne(videosModel))
    .put(validate.change, update(videosModel))
    .delete(validate.delete, remove(videosModel))

}
