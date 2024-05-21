const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/contactSchema.js");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://portiforlio2024.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

// app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://Amelia:Chris001++@mycontacts.o2racgy.mongodb.net/mycontacts?retryWrites=true&w=majority&appName=mycontacts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/api/contacts", async (req, res) => {
  Contact.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//Add this to server
// app.get("/api/contacts-list", async (req, res) => {
//   try {
//     const contact = await Contact.find();
//     res.json(contact);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
