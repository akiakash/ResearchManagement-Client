const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Document = require("../models/Document");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const document = await Document.find();
    res.json(document);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const document = new Document({
    name: req.body.name,
    document: req.body.document,
    comments: req.body.comments,
  });

  try {
    const savedDocument = await document.save();
    res.json(savedDocument);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:documentId", async (req, res) => {
  try {
    const document = await Document.findById(req.params.documentId);
    res.json(document);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:documentId", async (req, res) => {
  try {
    const removedDocument = await Document.remove({
      _id: req.params.documentId,
    });
    res.json(removedDocument);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:documentId", async (req, res) => {
  try {
    const updatedDocument = await Document.updateOne(
      { _id: req.params.documentId },
      {
        $set: {
          name: req.body.name,
          document: req.body.document,
          comments: req.body.comments,
        },
      }
    );
    res.json(updatedDocument);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
