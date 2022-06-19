const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'must be provided'],
    trim: true,
    maxlength: [20, 'name cannot be more then 20 char'],
  },
  compeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
