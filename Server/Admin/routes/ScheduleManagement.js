const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Schedule = require("../models/Schedule");

//Get all Data
router.get("/", async (req, res) => {
  try {
    const schedule = await Schedule.find();
    res.json(schedule);
  } catch (err) {
    res.json({ message: err });
  }
});

//post data

router.post("/", async (req, res) => {
  const schedule = new Schedule({
    groupid: req.body.groupid,
    date: req.body.date,
    time: req.body.time,
    allocatedpanel: req.body.allocatedpanel,
  });

  try {
    const savedSchedule = await schedule.save();
    res.json(savedSchedule);
  } catch (err) {
    res.json({ message: err });
  }
});

//specific Post

router.get("/:scheduleId", async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.scheduleId);
    res.json(schedule);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete post

router.delete("/:scheduleId", async (req, res) => {
  try {
    const removedSchedule = await Schedule.remove({
      _id: req.params.scheduleId,
    });
    res.json(removedSchedule);
  } catch (err) {
    res.json({ message: err });
  }
});

//update the Post

router.patch("/:scheduleId", async (req, res) => {
  try {
    const updatedSchedule = await Schedule.updateOne(
      { _id: req.params.scheduleId },
      {
        $set: {
          groupid: req.body.groupid,
          date: req.body.date,
          time: req.body.time,
          allocatedpanel: req.body.allocatedpanel,
        },
      }
    );
    res.json(updatedSchedule);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
