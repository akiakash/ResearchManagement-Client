const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Requests = require("../models/RequestAdmin");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const requests = await Requests.find();
    res.json(requests);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const requests = new Requests({
    response: req.body.response,
  });

  try {
    const savedRequests = await requests.save();
    res.json(savedRequests);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:requestsId", async (req, res) => {
  try {
    const requests = await Requests.findById(req.params.requestsId);
    res.json(requests);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:requestsId", async (req, res) => {
  try {
    const removedRequests = await Requests.remove({
      _id: req.params.requestsId,
    });
    res.json(removedRequests);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:requestsId", async (req, res) => {
  try {
    const updatedRequests = await Requests.updateOne(
      { _id: req.params.requestsId },
      {
        $set: {
          response: req.body.response,
        },
      }
    );
    res.json(updatedRequests);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
