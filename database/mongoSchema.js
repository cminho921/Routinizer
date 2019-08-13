const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/routines';
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Define movie schema
var routineSchema = new mongoose.Schema({
  name: String,
  description: String,
  group: String,
  hours: Number,
  minutes: Number,
});

// Export Mongoose model
const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine; 