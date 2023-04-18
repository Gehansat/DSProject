const express = require('express');
const router = express.Router();
const StockItems = require('../models/itemModel');

//Viewing all the items-------------------------------

router.route("/").get((req, res) => {
    StockItems.find()
        .then(StockItems => res.json(StockItems))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Adding an Item--------------------------------------

router.route('/add').post((req, res) => {
    const itemCode = req.body.itemCode;
    const itemName = req.body.itemName;
    const quantity = Number(req.body.quantity);
    const cost = Number(req.body.cost); 
    const sellingPrice = Number(req.body.sellingPrice);
    const supplier = req.body.supplier;
    const manCountry = req.body.manCountry;
  
    const newItem = new StockItems({
        itemCode,
        itemName,
        quantity,
        cost,
        sellingPrice,
        supplier,
        manCountry,
    });
    newItem.save()
    .then(() => res.json('New Item added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});


//Update item details

router.route('/update/:id').put((req, res) => {
    StockItems.findByIdAndUpdate(req.params.id)
      .then(StockItems => {
        StockItems.itemCode = req.body.itemCode;
        StockItems.itemName = req.body.itemName;
        StockItems.quantity = req.body.quantity ;
        StockItems.cost =req.body.cost ;
        StockItems.sellingPrice =req.body.sellingPrice ;
        StockItems.supplier =req.body.supplier ;
        StockItems.manCountry =req.body.manCountry ;
  
        StockItems.save()
          .then(() => res.json('Item updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

//Delete Item

router.route('/delete/:id').delete((req, res) => {
    StockItems.findByIdAndDelete(req.params.id)
      .then(() => res.json('Item Deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));

})

 
  // Get a specific item by id

  router.route('/get/:id').get(async(req, res) => {

    const userId = req.params.id;

  await StockItems.findById(userId)
    
    .then((itemModel) => {
    
    res.status(200).json({ itemModel });
    
    })
    
  .catch((err) => {
    
     console.log(err);
    
     res.status(500).json({ error: "Failed to fetch user" });
    
    });
    
    });

  

module.exports = router;
