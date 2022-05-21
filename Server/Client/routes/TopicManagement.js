const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Topic = require("../models/Topic");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const topic = await Topic.find();
    res.json(topic);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const topic = new Topic({
    groupno: req.body.groupno,
    topicname: req.body.topicname,
    description: req.body.description,
    leaderid: req.body.leaderid,
  });

  try {
    const savedTopic = await topic.save();
    res.json(savedTopic);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:topicId", async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.topicId);
    res.json(topic);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:topicId", async (req, res) => {
  try {
    const removedTopic = await Topic.remove({
      _id: req.params.topicId,
    });
    res.json(removedTopic);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:topicId", async (req, res) => {
  try {
    const updatedTopic = await Topic.updateOne(
      { _id: req.params.topicId },
      {
        $set: {
          groupno: req.body.groupno,
          topicname: req.body.topicname,
          description: req.body.description,
          leaderid: req.body.leaderid,
        },
      }
    );
    res.json(updatedTopic);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
