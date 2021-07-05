//importing model Schema class User Profile
//user_name   gender birth_date  email_id   mobile  cust_id  membership
const { NullVisitor } = require("@angular/compiler/src/render3/r3_ast");
const mongoose = require("mongoose");
const UserProfileData= require('../model/model');

exports.addUserProfile = async (req, res) => {
    try {
   
      if(req.body.user_name !=null && req.body.cust_id !=null){
          
        const UserData = new UserProfileData({
            user_name: req.body.user_name,
            gender: req.body.gender,
            birth_date: req.body. birth_date,
            email_id: req.body.email_id,
            mobile  : req.body.mobile  ,
            cust_id: req.body.cust_id,
            membership: req.body.membership
        })
        console.log("added New User: ", UserData.user_name);
        const newUserData = await UserData.save()
        res.status(201).json(newUserData);
      }
      else{
        console.log("User invoice not added");
      }
    
    
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

//get all user profile data 
exports.getAllUser = async (req, res) => {
    try {
        const UserData = await UserProfileData.find()
        res.json(UserData)
    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
}

//get single user profile data
exports.getUser = async (req, res) => {
    try {
        const UserDataOne = await UserProfileData.findById(req.params.id)
        console.log("UserData only one",UserDataOne);
        res.json(UserDataOne)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


exports.updateUserProfile = async (req, res) => {
    try {
        const updateUser = await UserProfileData.updateOne({
            _id: req.params.id
        }, {
            $set: req.body
        });
        console.log("User Updated");
        res.json( updateUser);
    } catch (err) {
        res.json({
            message: err.message
        });
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const deleteUser= await UserProfileData.findByIdAndDelete({
            _id: req.params.id
        });
        console.log("User Deleted");
        res.json(deleteUser);
    } catch (err) {
        res.status(404).json({
            message: err.message
        });
    }
}


