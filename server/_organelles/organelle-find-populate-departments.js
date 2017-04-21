module.exports  = (Organism)=> (PopulateOne) =>  
(PopulateTwo) => (req, res) => {
	const query = {}
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)

	const optionFive = {
		path:     'devices',     
		populate: [
		{ 
			path:  'stores_id',
			model: 'Stores' 
		},
		{
			path: 'company_id',
			model: 'Companys'
		}]
	}
	


	return Organism.find(query)
	.populate(PopulateOne)
	.populate(optionFive)
	.exec()
	.then(success)
	.catch(error)
}

