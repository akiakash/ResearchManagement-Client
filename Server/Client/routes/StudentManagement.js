const express = require("express");
const req = require("express/lib/request");
const Students = require("../models/Student");
const router = express.Router();


//Get all Data
router.get("/", async (req, res) => {
    try {
      const students = await Students.find();
      res.json(students);
    } catch (err) {
      res.json({ message: err });
    }
  });

//post data
  router.post("/", async (req, res) => {
    const students = new Students({

        studentName1: req.body.studentName1,
        studentName2: req.body.studentName2,
        studentName3: req.body.studentName3,
        studentName4: req.body.studentName4,
        studentId1:req.body.studentId1,
        studentId2:req.body.studentId2,
        studentId3:req.body.studentId3,
        studentId4:req.body.studentId4,
        Specialization1: req.body. Specialization1,
        Specialization2: req.body.Specialization2,
        Specialization3: req.body.Specialization3,
        Specialization4: req.body.Specialization4,

    });
    try {
        const savedStudents = await students.save();
        res.json(savedStudents);
      } catch (err) {
        res.json({ message: err });
      }
    });

 //specific post
 router.get("/:studentId",async (req,res)=> {
    try {
        const students = await Students.findById(req.params.studentId);
        res.json(students);
      } catch (err) {
        res.json({ message: err });
      }
 });

 // delete post
router.delete("/:studenId", async (req, res) => {
    try {
      const RemoveStudent = await Students.remove({ _id: req.params.studenId });
      res.json({ RemoveStudent });
    } catch (err) {
      res.json({ message: err });
    }
  });


  //update the Post

  router.patch("/:studenId", async (req, res) => {
    try {
      const updatedStudents = await Students.updateOne(
        { _id: req.params.studenId },
        {
          $set: {
            studentName1: req.body.studentName1,
            studentName2: req.body.studentName2,
            studentName3: req.body.studentName3,
            studentName4: req.body.studentName4,
            studentId1:req.body.studentId1,
            studentId2:req.body.studentId2,
            studentId3:req.body.studentId3,
            studentId4:req.body.studentId4,
            Specialization1: req.body. Specialization1,
            Specialization2: req.body.Specialization2,
            Specialization3: req.body.Specialization3,
            Specialization4: req.body.Specialization4,
          },
        }
      );
      res.json(updatedStudents);
    } catch (err) {
      res.json({ message: err });
    }
  });



module.exports = router;
