
const express = require("express");
const InvoiceRouter =express.Router();
const mongoose = require("mongoose");
const UserInvoice = require('../controller/invoiceController');
//home route
InvoiceRouter.get('/',(req,res)=>{
    res.send("Home route");
})

// addding User invoice
InvoiceRouter.post('/addUserInvoice ',UserInvoice.postUserInvoice);

//to get all User Profile Data
InvoiceRouter.get('/getAllInvoice',UserInvoice.getAllInvoice);

// getting single user data
InvoiceRouter.get(`/getUserInvoice/:id`, UserInvoice.getUserInvoice);

// updating Single User Profile Data
InvoiceRouter.patch("/updateUserInvoice/:id", UserInvoice.updateUserInvoice);


// delete single /perticular User
InvoiceRouter.get("/deleteUserInvoice/:id",UserInvoice.deleteUserInvoice);

// router.post("/add",controlSubscriber.create,validator,()=>{
//     res.json({"message":"successfully uploaded"})
// })

//exporting module into app.js file
module.exports =InvoiceRouter;
