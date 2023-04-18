const express = require('express');
const router = express.Router();
const studs = require('../models/student');

//Viewing all the items-------------------------------

router.route("/").get((req, res) => {
    studs.find()
        .then(studs => res.json(studs))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Adding an Item--------------------------------------

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const address = req.body.address;
   
  
    const newStud = new studs({
        name,
        address,
        
    });
    newStud.save()
    .then(() => res.json('New Student added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});


//Update item details

// router.route('/update/:id').put((req, res) => {
//     StockItem.findByIdAndUpdate(req.params.id)
//       .then(StockItem => {
//         StockItem.itemCode = req.body.itemCode;
//         StockItem.itemName = req.body.itemName;
//         StockItem.quantity = req.body.quantity ;
//         StockItem.cost =req.body.cost ;
//         StockItem.sellingPrice =req.body.sellingPrice ;
//         StockItem.supplier =req.body.supplier ;
//         StockItem.manCountry =req.body.manCountry ;
  
//         StockItem.save()
//           .then(() => res.json('Item updated!'))
//           .catch(err => res.status(400).json('Error: ' + err));
//       })
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

//Delete Item

// router.route('/delete/:id').delete((req, res) => {
//     StockItem.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Item Deleted.'))
//       .catch(err => res.status(400).json('Error: ' + err));



//Getting an item details with ID
// router.route('/get/:id').get(async (req, res)=>{
//     let itemID = req.params.id;
//     const itemOne = await StockItem.findById(itemID)
//       .then((item)=>{
//         res.status(200).send({status: "Item Fetched", item})
//       }).catch((err)=>{
//             console.log(err.message);
//             res.status(500).send({status: "Error with getting item",error:err.message});
        
//     })
//   })
// router.route('/get/:id').get(async (req, res) => {
//     try {
//       const itemID = req.params.id;
//       const item = await StockItem.findById(itemID);
//       if (!item) {
//         return res.status(404).send({ status: "Item not found" });
//       }
//       res.status(200).send({ status: "Item fetched", item });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send({ status: "Error with getting item", error: err.message });
//     }
//   });
  

///
  // });





  // Get a specific user by id

  router.route("/get/:id").get(async (req, res) => {

      const userId = req.params.id;

      await studs.findById(userId)
    
        .then((student) => {
    
          res.status(200).json({ student });
    
        })
    
        .catch((err) => {
    
          console.log(err);
    
          res.status(500).json({ error: "Failed to fetch user" });
    
        });
    
    });

module.exports = router;
