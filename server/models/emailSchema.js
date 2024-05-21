import mongoose from "mongoose";

const Schema = mongoose.Schema;
const EmailSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
});

const EmailS = mongoose.model("emaillist", EmailSchema);
export default EmailS;
