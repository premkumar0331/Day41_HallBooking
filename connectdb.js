const mongoose = require("mongoose");

module.exports = {
  async connect() {
    try {
      await mongoose.connect(
        "mongodb+srv://admin-prem:nuthPGhoITP9t6t6@cluster0.zjoft.mongodb.net/college?retryWrites=true&w=majority"
      );
      console.log("mongodb Atlas connected");
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
};
