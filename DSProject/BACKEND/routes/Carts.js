const express = require("express");
const router = express.Router();
const Carts = require("../models/Cart");

// View all users
router.route("/").get((req, res) => {
  Carts.find()
    .then((carts) => {
      res.json(carts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch items" });
    });
});

// // Create a new user
router.route("/add").post((req,res) => {
  const UserId = req.body.UserId;
  const Product = req.body.Product;
  const Price = Number(req.body.Price);
  const Qty = Number(req.body.Qty);
  const Total = Number(req.body.Total);
 // const age = Number(req.body.age);

  const newCart = new Carts({
    UserId,
    Product,
    Price,
    Qty,
    Total
  });

  newCart
    .save()
    .then(() => {
      res.json("items successfully added to the cart");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add items to the cart" });
    });
});

// Update a user by id
router.route("/update/:id").put(async (req, res) => {
  const cartId = req.params.id;
  const { UserId,Product, Price,Qty,Total } = req.body;

  const updatecart = {
    UserId,
    Product,
    Price,
    Qty,
    Total
  };

  await Carts.findByIdAndUpdate(cartId, updatecart)
    .then(() => {
      res.status(200).json({ message: "Cart updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to update carts" });
    });
});

// Delete a user by id
router.route("/delete/:id").delete(async (req, res) => {
  const CartId = req.params.id;

  await Carts.findByIdAndDelete(CartId)
    .then(() => {
      res.status(200).json({ message: "item deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete item" });
    });
});

// Get a specific cart_item by id
router.route("/get/:id").get(async (req, res) => {
  const CartId = req.params.id;

  await Carts.findById(CartId)
    .then((cart) => {
      res.status(200).json({ cart });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch user" });
    });
});

module.exports = router;
