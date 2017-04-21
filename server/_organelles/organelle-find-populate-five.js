module.exports  = (Organism)=> (PopulateOne) =>  
(PopulateTwo) => (PopulateThree) => (PopulateFor) =>  (PopulateFive)=> (req, res) => {
	const query = {}
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)

	const optionOne = {
		path:     'business',     
		populate: { path:  'company_id',
		model: 'Companys' }
	}
	const optionTwo = {
		path:     'regions',     
		populate: { 
			path:  'business_id',
			model: 'Businesss'
		}
	}

	const optionThree = {
		path:     'regions',     
		populate: {
			path:  'business_id',
			model: 'Businesss'
		}
	}

	const optionFor = {
		path:     'departments',     
		populate: { 
			path:  'stores_id',
			model: 'Stores' 
		}
	}

	const optionFive = {
		path:     'stores',     
		populate: [
		{ 
			path:  'business_id',
			model: 'Businesss' 
		},
		{
			path: 'regions_id',
			model: 'Regions'
		}]
	}





	return Organism.find(query)
	.populate(PopulateOne)
	.populate(optionOne)
	.populate(PopulateTwo)
	.populate(optionTwo)
	.populate(PopulateThree)
	.populate(optionThree)
	.populate(PopulateFor)
	.populate(optionFor)
	.populate(PopulateFive)
	.populate(optionFive)
	.exec()
	.then(success)
	.catch(error)
}

