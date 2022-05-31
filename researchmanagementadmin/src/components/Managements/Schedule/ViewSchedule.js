import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function ViewSchedule() {
  const [schedule, setSchedule] = useState([]);

  const getRequest = () => {
    axios
      .get(`http://localhost:3000/ScheduleManagement`)
      .then((res) => {
        console.log(res.data);
        setSchedule(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRequest();
  }, [schedule]);

  function deleteSchedule(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/ScheduleManagement/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Staff Successfully Deleted...!");
    });
  }

  function editSchedule(_id) {
    console.log("Schedule" + _id);
    window.sessionStorage.setItem("ScheduleID", _id);
    window.location("/editSchedule");
  }

  return (
    <div>
      <table style={{ border: "40px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Group ID</th>
          <th style={{ border: "1px solid #dddddd" }}>Date</th>
          <th style={{ border: "1px solid #dddddd" }}>Time</th>
          <th style={{ border: "1px solid #dddddd" }}>Allocated Panel</th>

          <th style={{ border: "1px solid #dddddd" }}>Action</th>
          <th style={{ border: "1px solid #dddddd" }}>Edit</th>
        </tr>
        {schedule.map((item) => (
          <tr>
            <td>
              <center>{item.groupid}</center>
            </td>
            <td>
              <center>{item.date} </center>
            </td>
            <td>
              <center>{item.time}</center>
            </td>
            <td>
              <center>{item.allocatedpanel}</center>
            </td>

            <td>
              <center>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => deleteSchedule(item._id)}
                >
                  Delete
                </Button>
              </center>
            </td>
            <td>
              <a href="editSchedule">
                <center>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={(e) => editSchedule(item._id)}
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

export default ViewSchedule;
