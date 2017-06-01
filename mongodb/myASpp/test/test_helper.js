const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eshop');
mongoose.connection.once('open',function(){	
	console.log('Good to go !')
})
.on('error',function(err){
	console.log('The error is ')
	console.log(err)
	
});