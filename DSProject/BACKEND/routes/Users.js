// // const express = require("express");
// // const router = express.Router();
// // const Users = require("../models/User");

// // // View all users
// // router.route("/").get((req, res) => {
// //   Users.find()
// //     .then((users) => {
// //       res.json(users);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({ error: "Failed to fetch users" });
// //     });
// // });

// // // Create a new user
// // router.route("/add").post(async(req, res) => {
// //   const name = req.body.name;
// //   const email = req.body.email;
// //   const password = req.body.password;
// //  // const age = Number(req.body.age);

// // //const encrypted_password = await bcrypt.hash(password,10);
// // // try{
// // // const exit_user = await Users.findOne({email});

// // // if(exit_user){
// // //     return res.json({error:"User exisits"});
// // // }
// //   const newUser = new Users({
// //     name,
// //     email,
// //     password
// //     //://encrypted_password,
// //   });

// //   newUser
// //     .save()
// //     .then(() => {
// //       res.json("User successfully added");
// //    // })
// // }).catch((err)=>{
// //       console.log(err);
// //       res.status(500).json({ error: "Failed to add user" });
// //     });


// // // Update a user by id
// // router.route("/update/:id").put(async (req, res) => {
// //   const userId = req.params.id;
// //   const { name, email,password } = req.body;

// //   const updateUser = {
// //     name,
// //     email,
// //     password
// //   };

// //   await Users.findByIdAndUpdate(userId, updateUser)
// //     .then(() => {
// //       res.status(200).json({ message: "User updated successfully" });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({ error: "Failed to update user" });
// //     });
// // });

// // // Delete a user by id
// // router.route("/delete/:id").delete(async (req, res) => {
// //   const userId = req.params.id;

// //   await Users.findByIdAndDelete(userId)
// //     .then(() => {
// //       res.status(200).json({ message: "User deleted successfully" });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({ error: "Failed to delete user" });
// //     });
// // });

// // // Get a specific user by id
// // router.route("/get/:id").get(async (req, res) => {
// //   const userId = req.params.id;

// //   await Users.findById(userId)
// //     .then((user) => {
// //       res.status(200).json({ user });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json({ error: "Failed to fetch user" });
// //     });
// //   });

// //   module.exports = router;





const express = require("express");
const router = express.Router();
const Users = require("../models/User");
const bcrypt = require("bcryptjs");

// View all users
router.route("/").get((req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch users" });
    });
});

// Create a new user
router.route("/add").post(async(req, res) => {
  const fname = req.body.fname;
  const email = req.body.email;
  const password = req.body.password;
  const encrypt_pass = await bcrypt.hash(password,10);

 // const age = Number(req.body.age);

  const newUser = new Users({
    fname,
    email,
    password:encrypt_pass
  });

  newUser
    .save()
    .then(() => {
      res.json("User successfully added");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add user" });
    });
});

// Update a user by id
router.route("/update/:id").put(async (req, res) => {
  const userId = req.params.id;
  const { fname, email,password } = req.body;

  const updateUser = {
    fname,
    email,
    password
  };

  await Users.findByIdAndUpdate(userId, updateUser)
    .then(() => {
      res.status(200).json({ message: "User updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to update user" });
    });
});

// Delete a user by id
router.route("/delete/:id").delete(async (req, res) => {
  const userId = req.params.id;

  await Users.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete user" });
    });
});

// Get a specific user by id
router.route("/get/:id").get(async (req, res) => {
  const userId = req.params.id;

  await Users.findById(userId)
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch user" });
    });
});


module.exports = router;

