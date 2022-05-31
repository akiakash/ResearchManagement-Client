import axios from "axios";

import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";

function RequestsManagement() {
  const [researcharea, setResearcharea] = useState("");
  const [groupid, setGroupid] = useState("");
  const [document, setDocument] = useState("");
  const [response, setResponse] = useState("");
  const [request, setRequest] = useState("");

  const id = window.sessionStorage.getItem("RequestID");

  useEffect(() => {
    axios.get(`http://localhost:3000/Request/${id}`).then((response) => {
      setResearcharea(response.researcharea);
      setGroupid(response.groupid);
      setDocument(response.document);
      setResponse(response.response);
      setRequest(response.data);
    });
  }, []);

  function submitResponse() {
    axios
      .patch(`http://localhost:3000/Request/${id}`, {
        response: response,
      })

      .then((response) => {
        alert("successfully updates");
        window.location = "/requestsmanagement";
      })
      .catch((error) => {
        alert("something error");
      });
  }

  //   const [requests, setRequest] = useState([]);
  //   const [responses, setResponses] = useState("");
  //   const [response, setResponse] = useState("");

  //   axios
  //     .get(`http://localhost:3000/Request`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       setRequest(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   function addResponse() {
  //     axios
  //       .post("http://localhost:3000/RequestManagementAdmin/", {
  //         response: response,
  //       })
  //       .then((response) => {
  //         alert("submitted");
  //         window.location.reload(true);
  //       })
  //       .catch((error) => {
  //         alert("something went wrong");
  //       });
  //   }

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

        <tr>
          <td>
            <center>{request.researcharea}</center>
          </td>
          <td>
            <center>{request.groupid} </center>
          </td>
          <td>
            <center>{request.document}</center>
          </td>
          <td>
            <center>
              <select
                type="text"
                name="name"
                onChange={(e) => setResponse(e.target.value)}
              >
                <option>Reponse</option>
                <option>Accepted</option>
                <option>Rejected</option>
                <option>Processing</option>
              </select>{" "}
            </center>
          </td>
          <td>
            <center>
              <Button
                variant="contained"
                type="submit"
                onClick={submitResponse}
              >
                Submit
              </Button>
            </center>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RequestsManagement;
