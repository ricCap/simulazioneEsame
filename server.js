var app = require('./router');
var port = process.env.PORT || 8080; // set our port


app.listen(port)
console.log("App started at port " + port);

  
