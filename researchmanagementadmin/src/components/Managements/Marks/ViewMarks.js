import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function ViewMarks() {
  const [marks, setMarks] = useState([]);

  const getRequest = () => {
    axios
      .get(`http://localhost:3000/MarksManagement`)
      .then((res) => {
        console.log(res.data);
        setMarks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [marks]);

  function deleteMarks(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/MarksManagement/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Marks Successfully Deleted...!");
    });
  }

  function editMarks(_id) {
    console.log("Marks" + _id);
    window.sessionStorage.setItem("MarksID", _id);
    // window.location("/editSchedule");
  }

  return (
    <div>
      <table style={{ border: "40px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Group ID</th>
          <th style={{ border: "1px solid #dddddd" }}>Student Id</th>
          <th style={{ border: "1px solid #dddddd" }}>Marks</th>
          <th style={{ border: "1px solid #dddddd" }}>Grade </th>

          <th style={{ border: "1px solid #dddddd" }}>Action</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {marks.map((item) => (
          <tr>
            <td>
              <center>{item.groupid}</center>
            </td>
            <td>
              <center>{item.studentid} </center>
            </td>
            <td>
              <center>{item.marks}</center>
            </td>
            <td>
              <center>{item.grade}</center>
            </td>

            <td>
              <center>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => deleteMarks(item._id)}
                >
                  Delete
                </Button>
              </center>
            </td>
            <td>
              <a href="editMarks">
                <center>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={(e) => editMarks(item._id)}
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

export default ViewMarks;
