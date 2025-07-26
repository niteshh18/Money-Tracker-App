const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  datetime: { type: Date, required: true },
  price: { type: Number, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
