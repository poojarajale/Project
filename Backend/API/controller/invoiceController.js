//importing model Schema class User Invoice
const UserInvoiceData = require("../model/invoiceModel");
const mongoose = require("mongoose");
//const mainController =require(./router/userInvoiceRouter);

exports.postUserInvoice = async (req, res) => {
  
  try {
    console.log(req.body)
    const InvoiceData = new UserInvoiceData({
      cust_id: req.body.cust_id,
      from_date: req.body.from_date,
      to_date: req.body.to_date,
      bill_from: req.body.bill_from,
      bill_to: req.body.bill_to,
      txtarea_from: req.body.txtarea_from,
      txtarea_to: req.body.txtarea_to,
      items: req.body.items,
      discount: req.body.discount,
      tax: req.body.tax,
      total_price: req.body.total_price,
    });
    console.log("New invoice Generated: ", UserData.cust_id);
    const newInvoiceData = await InvoiceData.save();
    res.status(201).json(newInvoiceData);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}; //end post  method user Invoice




//get all user invoice data
exports.getAllInvoice = async (req, res) => {
  try {
    const InvoiceData = await UserInvoiceData.find();
    res.json(InvoiceData);
  } catch (err) {
    res.status(500).json({
      msg: err.message,
    });
  }
};

//get single user invoice data
exports.getUserInvoice = async (req, res) => {
  try {
    const UserInvoiceOne = await UserInvoiceData.findById(req.params.id);
    console.log("User Invoice Single user:", UserInvoiceOne);
    res.json(UserInvoiceOne);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateUserInvoice = async (req, res) => {
  try {
    const updateUserInvoice = await UserInvoiceData.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    console.log("User Invoice Updated");
    res.json(updateUserInvoice);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

exports.deleteUserInvoice = async (req, res) => {
  try {
    const deleteUserInvoice = await UserInvoiceData.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log("User Invoice Deleted");
    res.json(deleteUserInvoice);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
