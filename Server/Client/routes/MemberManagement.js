const express = require("express");
const req = require("express/lib/request");
const Members = require("../models/Members");
const router = express.Router();


//Get all Data
router.get("/", async (req, res) => {
    try {
      const members = await Members.find();
      res.json(members);
    } catch (err) {
      res.json({ message: err });
    }
  });

//post data

router.post("/", async (req, res) => {
    const members = new Members({
        studentId: req.body.studentId,
        studentName: req.body.studentName,
        email: req.body.email,
        phone: req.body.phone,
        specialization:req.body.specialization,
    });
    try {
        const savedMembers = await members.save();
        res.json(savedMembers);
      } catch (err) {
        res.json({ message: err });
      }
 
  });

//specific Post

router.get("/:studenId", async (req, res) => {
    try {
      const members = await Members.findById(req.params.studenId);
      res.json(members);
    } catch (err) {
      res.json({ message: err });
    }
  });


// delete post
router.delete("/:studenId", async (req, res) => {
    try {
      const RemoveMember = await Members.remove({ _id: req.params.studenId });
      res.json({ RemoveMember });
    } catch (err) {
      res.json({ message: err });
    }
  });

  //update the Post

router.patch("/:studenId", async (req, res) => {
    try {
      const updatedMembers = await Members.updateOne(
        { _id: req.params.studenId },
        {
          $set: {
            studentId: req.body.studentId,
            studentName: req.body.studentName,
            email: req.body.email,
            phone: req.body.phone,
            specialization:req.body.specialization,
          },
        }
      );
      res.json(updatedRequests);
    } catch (err) {
      res.json({ message: err });
    }
  });
  

  module.exports = router;