var express = require('express');
var router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

router.get('/:city', function(req, res, next) {
  var city=req.params.city
  var weatherData = fs.readFileSync('data/weather.json', 'utf8');
  var data = JSON.parse(weatherData);
  

  for(let i=0; i<data.length; i++){
    if(city === data[i].city){
        var temp = data[i];
        
    }
    
}

  res.render('index', temp);
});

module.exports = router;
