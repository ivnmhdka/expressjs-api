const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, "Ivan Mahadika Yanuarizqi"],
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "ivanmahadika05@gmail.com",
    ],
  },
});

module.exports = mongoose.model("User", UserSchema);
