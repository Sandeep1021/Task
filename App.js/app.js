const express = require("express");
const bodyParser= require('body-parser');

const NodeGeocoder = require('node-geocoder');
const app=express();
app.use(express.json());
const options = {
  provider: 'google',

  // Optionnal depending of the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

app.post('/', function(req, res){
  for(var i=0;i<req.body.name.length;i++){
    await geocoder.geocode(arr[i])
            .then(function(result) {
                res.send(result.Address)
                res.send(result. latitude);
                res.send(result. longitude)
            })
            .catch(function(err){
              console.log(err);

            }) 
    
    
}
});

// Or using Promise
geocoder.geocode('')
  .then(function(res) {
 console.log(res);
    
  })
  .catch(function(err) {
    console.log(err);
  });
  
 
app.listen(3000, function() {
  console.log("Server started on port 3000");
});