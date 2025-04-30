const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true },
  year: { type: String, required: true },
  degree: { type: String, required: true },
  project: { type: String, required: true },
  certificate: { type: String, required: true },
  internship: { type: String, required: true },
  aboutAim: { type: String, required: true },
  hobbies: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Member', memberSchema);
