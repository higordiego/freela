module.exports = (app)=>{
	require ('./modules/company/routes/index')(app)
	require ('./modules/business/routes/index')(app)
	require ('./modules/regions/routes/index')(app)
	require ('./modules/stores/routes/index')(app)
	require ('./modules/departments/routes/index')(app)
	require ('./modules/profile/routes/index')(app)
	require ('./modules/employee/routes/index')(app)
	require ('./modules/transaction/routes/index')(app)
	require ('./modules/monitoring/routes/index')(app)
	require ('./modules/devices/routes/index')(app)
	require ('./modules/videos/routes/index')(app)
}