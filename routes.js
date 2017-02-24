module.exports = (app)=>{
	require ('./modules/business/routes/index')(app)
	require ('./modules/regions/routes/index')(app)
	require ('./modules/stores/routes/index')(app)
	require ('./modules/departments/routes/index')(app)
	require ('./modules/profile/routes/index')(app)
	require ('./modules/employee/routes/index')(app)
}