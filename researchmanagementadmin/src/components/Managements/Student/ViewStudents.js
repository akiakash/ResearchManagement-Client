import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function ViewStaffs() {
  const [student, setStudent] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:3000/StudentManagement`)
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [student]);

  function deleteStudent(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/StudentManagement/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("student Successfully Deleted...!");
    });
  }

  function editStudent(_id) {
    console.log("Student" + _id);
    window.sessionStorage.setItem("StudentID", _id);
    window.location("/editStudent");
  }
  return (
    <div>
      <table style={{ border: "40px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Student ID</th>
          <th style={{ border: "1px solid #dddddd" }}>Stuent Name</th>
          <th style={{ border: "1px solid #dddddd" }}>NIC</th>
          <th style={{ border: "1px solid #dddddd" }}>Phone</th>
          <th style={{ border: "1px solid #dddddd" }}> Specialization</th>

          <th style={{ border: "1px solid #dddddd" }}>Action</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {student.map((item) => (
          <tr>
            <td>
              <center>{item.studentName}</center>
            </td>
            <td>
              <center>{item.studentId} </center>
            </td>
            <td>
              <center>{item.phone}</center>
            </td>
            <td>
              <center>{item.nic}</center>
            </td>
            <td>
              <center>{item.specialization}</center>
            </td>

            <td>
              <center>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => deleteStudent(item._id)}
                >
                  Delete
                </Button>
              </center>
            </td>
            <td>
              <a href="editStudent">
                <center>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={() => editStudent(item._id)}
                  >
                    Edit
                  </Button>
                </center>
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ViewStaffs;
