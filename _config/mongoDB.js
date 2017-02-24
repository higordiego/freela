const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const MONGODB = {
  db: `eyeson`
}
const online = process.env.ONLINE || false
// console.log('online', online)

MONGODB.server =  online 
                    ? `eyeson:eyeson@ds157439.mlab.com:57439` 
                    : `localhost`


const url = `mongodb://${MONGODB.server}/${MONGODB.db}`
// console.log('url', url)
// console.log('MONGODB', MONGODB)


mongoose.connect(url)
  .then(() => {
    console.log('Mongodb Conectado : )')
  console.log('Dados do servidor: ', MONGODB)

    mongoose.connection.on('error', err =>
      console.log(`mongoose connection: `+err)
    )

    mongoose.connection.on('reconnected', () =>
      console.log('Reconnected to MongoDB')
    )
  })
  .catch(err => {
    console.log(`rejected promise ${err}`)
    mongoose.disconnect()      
  })

process.on('SIGINT', ()=> 
  mongoose.connection.close( ()=> {
    console.log('Mongodb: bye : )')
    process.exit(0)
  })
)


module.exports = mongoose

