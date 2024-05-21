const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "A name is required",
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  label: {
    type: String,
    trim: true,
    required: "Identify yourself",
  },
  message: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("contacts", ContactSchema);
module.exports = Contact;
