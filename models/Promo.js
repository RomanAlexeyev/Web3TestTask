const mongoose = require("mongoose");
const { Schema } = mongoose;

const promoSchema = new Schema({
  promo: { type: String },
  date: [{ start: Number, end: Number }],
  use_count: { type: Number },
  creator: {
    type: Number
  },
});

const userSchema = new Schema({
  id: { type: Number },
  username: { type: String },
  password: { type: String },
});


const Promo = mongoose.model("Promo", promoSchema);
const User = mongoose.model("User", userSchema);

module.exports = { Promo, User };
