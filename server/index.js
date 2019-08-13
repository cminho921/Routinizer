const Routine = require('../database/mongoSchema')
var express = require('express');
var bodyParser = require('body-parser');
const port = 3000;
const router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router);

router.get('/routines', (req, res) => (
  Routine.find({}, (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  })
))




// app.get('/api', function(req, res) {
//   res.send("Hello Realm");
// });



app.listen(port, function() {
  console.log(`Listening at port:${port}`);
});