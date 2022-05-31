import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

function EditMarks() {
  const [groupid, setGroupid] = useState("");
  const [studentid, setStudentid] = useState("");
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  const [mark, setMark] = useState([]);

  const id = window.sessionStorage.getItem("MarksID");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/MarksManagement/${id}`)
      .then((response) => {
        //   console.log(response.data);
        setGroupid(response.data.groupid);
        setStudentid(response.data.studentid);
        setMarks(response.data.marks);
        setGrade(response.grade);

        setMark(response.data);
        console.log(response.data);
      });
  }, []);

  function updateMarks() {
    axios
      .patch(`http://localhost:3000/MarksManagement/${id}`, {
        groupid: groupid,
        studentid: studentid,
        marks: marks,
        grade: grade,
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
          <th style={{ border: "1px solid #dddddd" }}>Group ID</th>
          <th style={{ border: "1px solid #dddddd" }}>Student Id</th>
          <th style={{ border: "1px solid #dddddd" }}>Marks</th>
          <th style={{ border: "1px solid #dddddd" }}> Grade</th>

          <th style={{ border: "1px solid #dddddd" }}>Action</th>
        </tr>
        <tr>
          <td>
            <center>
              <input
                onChange={(e) => setGroupid(e.target.value)}
                defaultValue={mark.groupid}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setStudentid(e.target.value)}
                defaultValue={mark.studentid}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setMarks(e.target.value)}
                defaultValue={mark.marks}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setGrade(e.target.value)}
                defaultValue={mark.grade}
              ></input>
            </center>
          </td>

          <td>
            <center>
              <Button variant="contained" type="submit" onClick={updateMarks}>
                Update
              </Button>
            </center>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EditMarks;
