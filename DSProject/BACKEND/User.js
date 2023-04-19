const mongoose = require('mongoose');


// const UserSchemaRegister = new mongoose.Schema({
//     name:{
//         type :String,
//         required:true
//     },
//     email:{
//         type :String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
// }
   
// );
// const UserSchemaRegister = new mongoose.Schema(
//     {
//       userType:String,
//       name:String,
//       email:{type:String, unique:true},
//       password:String
//     },
//     {
//         collation:"Users",
//     }

// );


const UserSchemaRegister = new mongoose.Schema(
  {
      userType: String,
      name: String,
      email: { type: String, unique: true },
      password: String
  },
  {
      collection: "Users"
  }
);



const Users = mongoose.model("Users",UserSchemaRegister);
 module.exports = Users;
