import axios from "axios";

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function RequestsManagement() {
  const [requests, setRequest] = useState([]);
  const [responses, setResponses] = useState("");
  const [response, setResponse] = useState("");

  const getRequest = () => {
    axios
      .get(`http://localhost:3000/Request`)
      .then((res) => {
        // console.log(res.data);
        setRequest(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRequest();
  }, [requests]);

  function addResponse(_id) {
    console.log("Request" + _id);
    window.sessionStorage.setItem("RequestID", _id);
    window.location("/AddResponse");
    console.log("RequestID");
  }

  return (
    <div>
      <table style={{ border: "40px black ", width: "100%" }}>
        <tr>
          <th style={{ border: "1px solid #dddddd" }}>View</th>
          <th style={{ border: "1px solid #dddddd" }}>Research Area</th>
          <th style={{ border: "1px solid #dddddd" }}>Group ID</th>
          <th style={{ border: "1px solid #dddddd" }}>Document</th>
          <th style={{ border: "1px solid #dddddd" }}>Response</th>
        </tr>
        {requests.map((item) => (
          <tr>
            <td>
              <a href="/AddResponse">
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => addResponse(item._id)}
                >
                  View
                </Button>
              </a>
            </td>
            <td style={{ border: "1px solid #dddddd" }}>{item.researcharea}</td>

            <td style={{ border: "1px solid #dddddd" }}>{item.groupid}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.document}</td>
            <td style={{ border: "1px solid #dddddd" }}>{item.response}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RequestsManagement;
