const express = require("express");
const router =express.Router();
const UserProfile = require('../controller/controller');
const mongoose = require("mongoose");

//home route
router.get('/',(req,res)=>{
    res.send("Home route");
})

// addding User Profile
router.post('/addUserProfile', UserProfile.addUserProfile);

//to get all User Profile Data
router.get('/getAllUserData',UserProfile.getAllUser);

// getting single user data
router.get(`/getUser/:id`, UserProfile.getUser);

// updating Single User Profile Data
router.patch("/editUser/:id", UserProfile.updateUserProfile);


// delete single /perticular User
router.get("/deleteUser/:id", UserProfile.deleteUser);

// router.post("/add",controlSubscriber.create,validator,()=>{
//     res.json({"message":"successfully uploaded"})
// })

//exporting module into app.js file
module.exports =router;