const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Marks = require("../models/Marks");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const marks = await Marks.find();
    res.json(marks);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const marks = new Marks({
    groupid: req.body.groupid,
    studentid: req.body.studentid,
    marks: req.body.marks,
    grade: req.body.grade,
  });

  try {
    const savedMarks = await marks.save();
    res.json(savedMarks);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:marksId", async (req, res) => {
  try {
    const marks = await Marks.findById(req.params.marksId);
    res.json(marks);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:marksId", async (req, res) => {
  try {
    const removedMarks = await Marks.remove({
      _id: req.params.marksId,
    });
    res.json(removedMarks);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:marksId", async (req, res) => {
  try {
    const updatedMarks = await Marks.updateOne(
      { _id: req.params.marksId },
      {
        $set: {
          groupid: req.body.groupid,
          studentid: req.body.studentid,
          marks: req.body.marks,
          grade: req.body.grade,
        },
      }
    );
    res.json(updatedMarks);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
