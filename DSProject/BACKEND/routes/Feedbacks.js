const express = require("express");
const router = express.Router();
const Feedbacks = require("../models/Feedback");

// View all users
router.route("/").get((req, res) => {
    Feedbacks.find()
    .then((feedbacks) => {
      res.json(feedbacks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch feedbacks" });
    });
});

// // Create a new user
router.route("/add").post((req,res) => {
  const UserId = req.body.UserId;
  const Questions = req.body.Questions;
  const Answers = req.body.Answers;

 // const age = Number(req.body.age);

  const newfeedback = new Feedbacks({
    UserId,
    Questions,
    Answers,
  });

  newfeedback
    .save()
    .then(() => {
      res.json("feedbacks successfully saved");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to save the feedbacks" });
    });
});

// Update a user by id
router.route("/update/:id").put(async (req, res) => {
  const feedbacktId = req.params.id;
  const { UserId,Questions, Answers} = req.body;

  const updatefeedback = {
    UserId,
    Questions,
    Answers,
  };

  await Feedbacks.findByIdAndUpdate(feedbacktId, updatefeedback)
    .then(() => {
      res.status(200).json({ message: "Feedbacks updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to update Feedbacks" });
    });
});

// Delete a user by id
router.route("/delete/:id").delete(async (req, res) => {
  const FeedbackId = req.params.id;

  await Feedbacks.findByIdAndDelete(FeedbackId)
    .then(() => {
      res.status(200).json({ message: "Feedbacks deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete Feedbacks" });
    });
});

// Get a specific cart_item by id
router.route("/get/:id").get(async (req, res) => {
  const FeedbackId = req.params.id;

  await Feedbacks.findById(FeedbackId)
    .then((Feedback) => {
      res.status(200).json({ Feedback });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch the Feedbacks" });
    });
});

module.exports = router;
