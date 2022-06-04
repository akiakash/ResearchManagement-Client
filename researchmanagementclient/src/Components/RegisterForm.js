import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import { FormGroup, FormLabel } from "@mui/material";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

function ValidationTextFields() {
  // const [studentid, setStudentid] = useState("");
  // const [studentname, setStudentname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [specialization, setSpecialization] = useState("");

  const [studentname1, setStudentname1] = useState("");
  const [studentid1, setStudentid1] = useState("");
  const [specialization1, setSpecialization1] = useState("");
  const [studentname2, setStudentname2] = useState("");
  const [studentid2, setStudentid2] = useState("");
  const [specialization2, setSpecialization2] = useState("");
  const [studentname3, setStudentname3] = useState("");
  const [studentid3, setStudentid3] = useState("");
  const [specialization3, setSpecialization3] = useState("");
  const [studentname4, setStudentname4] = useState("");
  const [studentid4, setStudentid4] = useState("");
  const [specialization4, setSpecialization4] = useState("");
  const [student, setStudent] = useState([]);

  const Onrefresh = () => {
    HandleStudent;
  };

  function registerteam() {
    axios
      .post(`http://localhost:3000/Student`, {
        studentName1: studentname1,
        studentName2: studentname2,
        studentName3: studentname3,
        studentName4: studentname4,
        studentId1: studentid1,
        studentId2: studentid2,
        studentId3: studentid3,
        studentId4: studentid4,
        Specialization1: specialization1,
        Specialization2: specialization2,
        Specialization3: specialization3,
        Specialization4: specialization4,
      })
      .then((res) => {
        alert("successfully added");
        window.location(true);
      })
      .catch((err) => {
        alert("something error");
        console.log(err.data);
      });
  }
  const getRequest = () => {
    axios
      .get(`http://localhost:3000/StudentManagement/`)
      .then((res) => {
        setStudent(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [student]);

  // const HandleStudent = (e) => {
  //   const ObjStudent = [];
  //   e.map((item) => {
  //     const aaaaa = item.value;
  //     ObjStudent.push({ _id: aaaaa });
  //   });
  //   console.log(ObjStudent);
  //   window.sessionStorage.setItem("ObjStudent", JSON.stringify(ObjStudent));
  // };
  return (
    <Card
      style={{
        width: "800px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "50px",
        backgroundColor: "FFF1EF",
      }}
    >
      <Box
        style={{ marginLeft: "20px", paddingTop: "50px" }}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h1 style={{ fontFamily: "Roboto", textAlign: "center" }}>
          <b>Fill This Form </b>
        </h1>
        <h2
          style={{
            textAlign: "center",
            marginLeft: "10%",
            marginRight: "10%",
            fontSize: "20px",
            marginTop: "30px",
            fontFamily: "Roboto",
            lineHeight: "30px",
          }}
        >
          {" "}
          First, let's create your account. Once your account has been created
          you can choose the billing plan that is right for you and link your
          account with a server provider.
        </h2>
        <div>
          <label>Student Name - 1</label>
          <br></br>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Area</InputLabel>
            <Select
              isMulti
              label="Select Area"
              onChange={(e) => setStudentname1(e.target.value)}
            >
              {student.map((item) => (
                <MenuItem value={item.studentName}>{item.studentName}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br></br>
          <label>Student ID</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter The Name"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid1(e.target.value)}
          />
        </div>
        <div>
          <label>Specialization </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization1(e.target.value)}
          />
          <br></br>
          <label>Student Name - 2</label>
          <br></br>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Area</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Area"
              onChange={(e) => setStudentname2(e.target.value)}
            >
              {student.map((item) => (
                <MenuItem value={item.studentName}>{item.studentName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <label>Student ID </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid2(e.target.value)}
          />
          <br></br>
          <label>Specialization</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization2(e.target.value)}
          />
        </div>
        <div>
          <label>Student Name - 3 </label>
          <br></br>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Area</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Area"
              onChange={(e) => setStudentname3(e.target.value)}
            >
              {student.map((item) => (
                <MenuItem value={item.studentName}>{item.studentName}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <br></br>
          <label>Student ID</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid3(e.target.value)}
          />
        </div>
        <div>
          <label>Specialization </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization3(e.target.value)}
          />
          <br></br>
          <label>Student Name - 4</label>
          <br></br>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Area</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Area"
              onChange={(e) => setStudentname4(e.target.value)}
            >
              {student.map((item) => (
                <MenuItem value={item.studentName}>{item.studentName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <label>Student ID </label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Group Description"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setStudentid4(e.target.value)}
          />
          <br></br>
          <label>Specialization</label>
          <br></br>
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Registration ID"
            // defaultValue="Hello World"
            // helperText="Incorrect entry."
            style={{ backgroundColor: "white", width: "750px" }}
            onChange={(e) => setSpecialization4(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="nameOfChoice"
            value="1"
            style={{ marginLeft: "200px", marginTop: "20px" }}
          />{" "}
          i Agree to the Terms of Services and Privacy Policy
        </div>
        <center>
          <Button
            type="button"
            variant="contained"
            onClick={(e) => registerteam(e)}
          >
            Submit
          </Button>
        </center>
      </Box>
    </Card>
  );
}

export default ValidationTextFields;
