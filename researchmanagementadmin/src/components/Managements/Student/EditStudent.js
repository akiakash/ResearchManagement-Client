import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

function EditStudent() {
  const [studentName, setName] = useState("");
  const [studentId, setStudentid] = useState("");
  const [nic, setNic] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [student, setStudent] = useState([]);

  const id = window.sessionStorage.getItem("StudentID");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/StudentManagement/${id}`)
      .then((response) => {
        //   console.log(response.data);
        setName(response.data.studentName);
        setStudentid(response.data.studentId);
        setNic(response.data.nic);
        setPhone(response.phone);
        setSpecialization(response.specialization);
        setStudent(response.data);

        console.log(response.data);
      });
  }, []);

  function updateStudent() {
    axios
      .patch(`http://localhost:3000/StudentManagement/${id}`, {
        studentId: studentId,
        studentName: studentName,
        nic: nic,
        phone: phone,
        specialization: specialization,
      })
      .then((response) => {
        window.location.reload();
        alert("successfull updated");
      })
      .catch((error) => {
        alert("Sorry, Something Error...");
      });
  }

  return (
    <div>
      <table style={{ border: "40px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Student ID</th>
          <th style={{ border: "1px solid #dddddd" }}>Student Name</th>
          <th style={{ border: "1px solid #dddddd" }}>NIC</th>
          <th style={{ border: "1px solid #dddddd" }}>Phone</th>
          <th style={{ border: "1px solid #dddddd" }}>Specialization </th>

          <th style={{ border: "1px solid #dddddd" }}>Action</th>
        </tr>
        <tr>
          <td>
            <center>
              <input
                onChange={(e) => setName(e.target.value)}
                defaultValue={student.studentName}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setStudentid(e.target.value)}
                defaultValue={student.studentId}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setNic(e.target.value)}
                defaultValue={student.nic}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={student.phone}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setSpecialization(e.target.value)}
                defaultValue={student.specialization}
              ></input>
            </center>
          </td>

          <td>
            <center>
              <Button variant="contained" type="submit" onClick={updateStudent}>
                Update
              </Button>
            </center>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EditStudent;
