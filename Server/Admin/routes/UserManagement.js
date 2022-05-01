const express = require("express");
// const req = require("express/lib/request");
const router = express.Router();
const User = require("../models/user");
// const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_KEY = "kjbhdsfiuhfiusdhif3987973957&*^*&^%";

//signup

router.post("/signup", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "User created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});

// login

router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// const JWT_SECRET = "ksdjbfksbfkew373729ih@#$$%IUHihsdhkhfsd";

//post data

// router.post("/", async (req, res) => {
//   const { FirstName, LastName, Email, Password: plainTextPassword } = req.body;

//   if (!FirstName || typeof FirstName !== "string") {
//     return res.json({ status: "error", error: "Invalid Username" });
//   }
//   if (!LastName || typeof LastName !== "string") {
//     return res.json({ status: "error", error: "Invalid Username" });
//   }
//   if (!Email || typeof Email !== "string") {
//     return res.json({ status: "error", error: "Invalid Username" });
//   }

//   if (!plainTextPassword || typeof plainTextPassword !== "string") {
//     return res.json({ status: "error", error: "Invalid Password" });
//   }

// if (plainTextPassword.length < 5) {
//   return res.json({
//     status: "error",
//     error: "Password too small. sould be atleast 6 charachters",
//   });
// }

//   const Password = await bcrypt.hash(plainTextPassword, 10);

//   try {
//     const response = await Users.create({
//       FirstName,
//       LastName,
//       Email,
//       Password,
//     });
//     console.log("User SUccessfully Fucked:", response);
//   } catch (error) {
//     if (error.code === 11000) {
//       return res.json({
//         status: "error",
//         data: "",
//         error: "Username already in use",
//       });
//     }
//     throw error;
//   }

//   res.json({ status: "ok" });
// });

// login api
// app.post("/login", async (req, res) => {
//   const { Email, Password } = req.body;
//   const user = await Users.findOne({ Email }).lean();

// if (!Email) {
// 	return res.json({ status: 'error', error: 'Invalid username/password' })
// }

// if (await bcrypt.compare(Password, user.Password)) {
// the username, password combination is successful

//     const token = jwt.sign(
//       {
//         id: user._id,
//         Email: user.Email,
//       },
//       JWT_SECRET
//     );

//     return res.json({ status: "ok", data: token });
//   }

//   res.json({ status: "error", error: "Invalid username/password" });
// });

// Get all Data
// router.get("/", async (req, res) => {
//   try {
//     const agents = await Agents.find();
//     res.json(agents);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// post data
// router.post("/", async (req, res) => {
//   const users = new Users({
//     FirstName: req.body.FirstName,
//     LastName: req.body.LastName,
//     Email: req.body.Email,
//     Password: req.body.Password,
//   });

//   try {
//     const savedUsers = await users.save();
//     res.json(savedUsers);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//specific Post

// router.get("/:agentsId", async (req, res) => {
//   try {
//     const agents = await Agents.findById(req.params.agentsId);
//     res.json(agents);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//delete post

// router.delete("/:agentsId", async (req, res) => {
//   try {
//     const removedAgents = await Agents.remove({ _id: req.params.agentsId });
//     res.json(removedAgents);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//update the Post

// router.patch("/:agentsId", async (req, res) => {
//   try {
//     const updatedAgents = await Agents.updateOne(
//       { _id: req.params.agentsId },
//       {
//         $set: {
//           FirstName: req.body.FirstName,
//           LastName: req.body.LastName,
//           Email: req.body.Email,
//           ContactNumber: req.body.ContactNumber,
//           Language: req.body.Language,
//           Description: req.body.Description,
//           ProfileImage: req.body.ProfileImage,
//         },
//       }
//     );
//     res.json(updatedAgents);
//   } catch (err) {
//     res.json({ message: err });
//
// });

module.exports = router;
