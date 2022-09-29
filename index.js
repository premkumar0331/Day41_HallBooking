const express = require("express");
const mongoose = require("mongoose");
const roomModule = require("./model");
const roomModule1 = require("./model1");
const roomModule2 = require("./model2");
const roomModule3 = require("./model3");

const app = express();

app.use(express.json());

// mongoose
//   .connect(
//     "mongodb+srv://admin-prem:nuthPGhoITP9t6t6@cluster0.zjoft.mongodb.net/college?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("mongoDB Atlas connected ");
//   });

const mongo = {
  async connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://admin-prem:nuthPGhoITP9t6t6@cluster0.zjoft.mongodb.net/booking?retryWrites=true&w=majority"
      );
      console.log("mongodb atlas connected");
    } catch (err) {
      console.log(err);
    }
  },
};

mongo.connect();

// app.use("/", (req, res) => {
//   res.send("welocme to express");
// });

app.post("/hallbooking/createroom", async (req, res) => {
  try {
    const createData = await roomModule(req.body).save();
    res.send(createData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/hallbooking/bookroom", async (req, res) => {
  try {
    const bookData = await roomModule1(req.body).save();
    res.send(bookData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/hallbooking/bookeddata", async (req, res) => {
  try {
    const bookedData = await roomModule2(req.body).save();
    res.send(bookedData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/hallbooking/getbookeddata", async (req, res) => {
  try {
    const getbookedData = await roomModule2.find();
    res.send(getbookedData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/hallbooking/customerdata", async (req, res) => {
  try {
    const customerData = await roomModule3(req.body).save();
    res.send(customerData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/hallbooking/getcustomerdata", async (req, res) => {
  try {
    const getcustomerData = await roomModule3.find();
    res.send(getcustomerData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(3000, (req, res) => {
  console.log("server is running ar Port:3000");
});
