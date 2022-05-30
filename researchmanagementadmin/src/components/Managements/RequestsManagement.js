import axios from "axios";

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function RequestsManagement() {
  const [requests, setRequest] = useState([]);
  const [responses, setResponses] = useState("");

  axios
    .get(`http://localhost:3000/Request`)
    .then((res) => {
      // console.log(res.data);
      setRequest(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  function addresponse() {
    axios.post(``);
  }

  return (
    <div>
      <table style={{ border: "40px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>Research Area</th>
          <th style={{ border: "1px solid #dddddd" }}>Group ID</th>
          <th style={{ border: "1px solid #dddddd" }}>Document</th>
          <th style={{ border: "1px solid #dddddd" }}>Response</th>
          <th style={{ border: "1px solid #dddddd" }}>Submit</th>
        </tr>
        {requests.map((item) => (
          <tr>
            <td style={{ border: "1px solid #dddddd" }}>{item.researcharea}</td>

            <td style={{ border: "1px solid #dddddd" }}>{item.groupid}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.document}</td>
            <td style={{ border: "1px solid #dddddd" }}>
              <select name="cars" id="cars">
                <option value="accepted">Select</option>
                <option value="accepted">Accepted</option>
                <option value="declined">Declined</option>
                <option value="processing">PRocessing</option>
              </select>
            </td>
            <td>
              <Button variant="contained">Submit</Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RequestsManagement;
