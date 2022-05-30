const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Staffs = require("../models/Staff");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const staffs = await Staffs.find();
    res.json(staffs);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const staffs = new Staffs({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    department: req.body.department,
    qualification: req.body.qualification,
    researcharea: req.body.researcharea,
    type: req.body.type,
  });

  try {
    const savedStaffs = await staffs.save();
    res.json(savedStaffs);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:staffsId", async (req, res) => {
  try {
    const staffs = await Staffs.findById(req.params.staffsId);
    res.json(staffs);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:staffsId", async (req, res) => {
  try {
    const removedStaffs = await Staffs.remove({ _id: req.params.staffsId });
    res.json(removedStaffs);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:staffsId", async (req, res) => {
  try {
    const updatedStaffs = await Staffs.updateOne(
      { _id: req.params.staffsId },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          department: req.body.department,
          qualification: req.body.qualification,
          researcharea: req.body.researcharea,
          type: req.body.type,
        },
      }
    );
    res.json(updatedStaffs);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
