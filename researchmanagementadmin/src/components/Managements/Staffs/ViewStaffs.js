import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function ViewStaffs() {
  const [staff, setStaff] = useState([]);
  const getRequest = () => {
    axios
      .get(`http://localhost:3000/StaffManagement`)
      .then((res) => {
        console.log(res.data);
        setStaff(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [staff]);

  function deleteStaff(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/StaffManagement/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Staff Successfully Deleted...!");
    });
  }

  function editStaff(_id) {
    console.log("Staff" + _id);
    window.sessionStorage.setItem("StaffID", _id);
    window.location("/editStaff");
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
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {staff.map((item) => (
          <tr>
            <td>
              <center>{item.firstname}</center>
            </td>
            <td>
              <center>{item.lastname} </center>
            </td>
            <td>
              <center>{item.department}</center>
            </td>
            <td>
              <center>{item.qualification}</center>
            </td>
            <td>
              <center>{item.researcharea}</center>
            </td>
            <td>
              <center>{item.type}</center>
            </td>
            <td>
              <center>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => deleteStaff(item._id)}
                >
                  Delete
                </Button>
              </center>
            </td>
            <td>
              <a href="editStaff">
                <center>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={() => editStaff(item._id)}
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
