
//////////////////////////////////////User Profile  Model//////////////////////////////
const mongoose = require("mongoose");
const UserProfileSchema = new mongoose.Schema({
    user_name: {
        type: String,
        
    },
    gender: {
        type: String,
    },
    birth_date: 
    {   type: String, 

    },
      email_id: {
            type: String
        },

 mobile: {
            type: Number
        },

cust_id:{
   type: Number
  },

membership:{
    type: String
}

// classic:{  type: String},
// silver:{type: String},
// gold:{type: String}}]

});

module.exports = mongoose.model('userProfileData', UserProfileSchema);







