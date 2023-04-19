const express = require('express');
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const bcrypt = require('bcryptjs');
const cors = require("cors");
const jwt = require('jsonwebtoken');

const secret_jwt = "hihffueifjvnfwoehifnevfpeghiggrggr";

app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

dotenv.config();




MONGODB_URL="mongodb+srv://oshiyo:1659@ayurwedic.nlfyh2z.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
//const URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error(err);
  });


//.........................signing up the users.................

    require('./User');
  const user = mongoose.model("Users");
  app.post("/register",async(req,res)=>{
    const {userType,name,email,password} = req.body;

   const pass_ency = await bcrypt.hash(password,10);

    try { 
      //checking the user email is existing
     const oldUser = await user.findOne({email: email});

      // if olduser =  true then user is existing
      if(oldUser){
        return res.status(400).json({ error: "User already exists" });
      }
      await user.create({
        userType,
        name,
        email,
        password:pass_ency,
        
      });
      res.status(200).json({ message: "User created successfully" , status: "ok"});
     
    } catch (error) {
    
      console.error(error);
      res.status(500).json({ error: "Internal server error" })
    }
    })

    //......................... Log in the users.................

    app.post("/login",async(req,res)=>{
      const {email,password} = req.body;

      const user_exist = await user.findOne({email: email});

      if(!user_exist){
        return res.status(400).json({ error: "User Not Found " });
      }
      if(await bcrypt.compare(password, user_exist.password)){
        const token = jwt.sign({email:user.email},secret_jwt);
        if(res.status(200)){
          res.json({status:"ok",token:token})
      }
      return res.json({status:"error",error: "Invalid Credentials" });
       
      }
    })
  
//......................... User Profile.................

app.post("/profile",async(req,res)=>{
    const {token} = req.body;
    try {
            const user = jwt.verify(token,secret_jwt);
            console.log(user);
            const uemail = user.email;
            user.findOne({email:uemail}).then((data)=>{
              res.send({status:"ok",data:data})
            }).catch((err)=>{
                res.send({status:"fail",error:err})
            });
         } catch (error) {
          res.send({ status: "fail -2", error: error });

    }
})



// //......................... cart options.................

// app.post("/addtocart",async(req,res)=>{
 

    
//     const { UserId } = req.body.UserId;
//     const Name = req.body.Name;
//     const Price = Number(req.body.Price);
//     const Qty = Number(req.body.Qty);
//     const Total = Number(req.body.Total);
//     const Des = req.body.Des;
   
  
//     const newCart = new Carts({
//       UserId,
//       Name,
//       Price,
//       Des,
//       Qty,
//       Total
//     });
  
//     newCart
//       .save()
//       .then(() => {
//         res.json("items successfully added to the cart");
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json({ error: "Failed to add items to the cart" });
//       });

// });



































//giving listning ports
    app.listen(PORT,()=>{
          console.log(`Server is up and running on port ${PORT}`);
     });

