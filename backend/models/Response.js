const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  responses: { type: Object, required: true },
  status: { type: String, default: 'IN_PROGRESS' } 
});
module.exports = mongoose.model('Response', responseSchema);
