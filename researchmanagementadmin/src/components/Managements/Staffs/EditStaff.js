import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

function EditStaff() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [department, setDepartment] = useState("");
  const [qualification, setQualification] = useState("");
  const [researcharea, setResearcharea] = useState("");
  const [type, setType] = useState("");
  const [staff, setStaff] = useState([]);

  const id = window.sessionStorage.getItem("StaffID");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/StaffManagement/${id}`)
      .then((response) => {
        //   console.log(response.data);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setDepartment(response.data.department);
        setQualification(response.qualification);
        setResearcharea(response.researcharea);
        setType(response.type);
        setStaff(response.data);
        console.log(response.data);
      });
  }, []);

  function updateStaff() {
    axios
      .patch(`http://localhost:3000/StaffManagement/${id}`, {
        firstname: firstname,
        lastname: lastname,
        department: department,
        qualification: qualification,
        researcharea: researcharea,
        type: type,
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
          <th style={{ border: "1px solid #dddddd" }}>First Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Last Name</th>
          <th style={{ border: "1px solid #dddddd" }}>Department</th>
          <th style={{ border: "1px solid #dddddd" }}>Qualification</th>
          <th style={{ border: "1px solid #dddddd" }}>Research Area</th>
          <th style={{ border: "1px solid #dddddd" }}>Type</th>
          <th style={{ border: "1px solid #dddddd" }}>Action</th>
        </tr>
        <tr>
          <td>
            <center>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                defaultValue={staff.firstname}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setLastname(e.target.value)}
                defaultValue={staff.lastname}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setDepartment(e.target.value)}
                defaultValue={staff.department}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setQualification(e.target.value)}
                defaultValue={staff.qualification}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setResearcharea(e.target.value)}
                defaultValue={staff.researcharea}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setType(e.target.value)}
                defaultValue={staff.type}
              ></input>
            </center>
          </td>

          <td>
            <a href="editStaff">
              <center>
                <Button variant="contained" type="submit" onClick={updateStaff}>
                  Update
                </Button>
              </center>
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EditStaff;
