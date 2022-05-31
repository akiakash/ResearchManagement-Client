import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

function EditSchedule() {
  const [groupid, setGroupid] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [allocatedpanel, setAllocatedpanel] = useState("");

  const [schedule, setSchedule] = useState([]);

  const id = window.sessionStorage.getItem("ScheduleID");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/ScheduleManagement/${id}`)
      .then((response) => {
        //   console.log(response.data);
        setGroupid(response.data.groupid);
        setDate(response.data.date);
        setTime(response.data.time);
        setAllocatedpanel(response.allocatedpanel);

        setSchedule(response.data);
        console.log(response.data);
      });
  }, []);

  function updateSchedule() {
    axios
      .patch(`http://localhost:3000/ScheduleManagement/${id}`, {
        groupid: groupid,
        date: date,
        time: time,
        allocatedpanel: allocatedpanel,
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
          <th style={{ border: "1px solid #dddddd" }}>Date</th>
          <th style={{ border: "1px solid #dddddd" }}>Time</th>
          <th style={{ border: "1px solid #dddddd" }}>Allocated PAnel</th>

          <th style={{ border: "1px solid #dddddd" }}>Action</th>
        </tr>
        <tr>
          <td>
            <center>
              <input
                onChange={(e) => setGroupid(e.target.value)}
                defaultValue={schedule.groupid}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setDate(e.target.value)}
                defaultValue={schedule.date}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setTime(e.target.value)}
                defaultValue={schedule.time}
              ></input>
            </center>
          </td>
          <td>
            <center>
              <input
                onChange={(e) => setAllocatedpanel(e.target.value)}
                defaultValue={schedule.allocatedpanel}
              ></input>
            </center>
          </td>

          <td>
            <center>
              <Button
                variant="contained"
                type="submit"
                onClick={updateSchedule}
              >
                Update
              </Button>
            </center>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EditSchedule;
