const express = require("express");
const req = require("express/lib/request");
const Student = require("../models/Student");
const router = express.Router();


//Get all Data
router.get("/", async (req, res) => {
    try {
      const student = await Student.find();
      res.json(student);
    } catch (err) {
      res.json({ message: err });
    }
  });


  router.post("/", async (req, res) => {
    const student = new Student({
        studentId: req.body.studentId,
        studentName: req.body.studentName,
        nic: req.body.nic,
        phone: req.body.phone,
        specialization:req.body.specialization,
    });
    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
      } catch (err) {
        res.json({ message: err });
      }
 
  });

//specific Post

  router.get("/:studenId", async (req, res) => {
    try {
      const student = await Student.findById(req.params.studenId);
      res.json(student);
    } catch (err) {
      res.json({ message: err });
    }
  });


  // delete post
router.delete("/:studenId", async (req, res) => {
    try {
      const RemoveStudent = await Student.remove({ _id: req.params.studenId });
      res.json({ RemoveStudent });
    } catch (err) {
      res.json({ message: err });
    }
  });

  router.patch("/:studenId", async (req, res) => {
    try {
      const updatedStudent = await Student.updateOne(
        { _id: req.params.studenId },
        {
          $set: {
            studentId: req.body.studentId,
            studentName: req.body.studentName,
            nic: req.body.nic,
            phone: req.body.phone,
            specialization:req.body.specialization,
          },
        }
      );
      res.json(updatedStudent);
    } catch (err) {
      res.json({ message: err });
    }
  });

  module.exports = router;