const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
  {
    username: {
      type: types.String,
      required: true,
      unique: true,
    },
    password: {
      type: types.String,
      required: true,
    },
    email: {
      type: types.String,
      required: true,
      unique: true,
    },
    role: {
      type: types.String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
