

import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@material-ui/core/TextField";
import { AddCircle, MoreHoriz } from "@material-ui/icons";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Button, Card } from "@mui/material";
import "@fontsource/roboto";
import App from '../App';
import Table from 'react-bootstrap/Table'
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';




function ViewMarks() {
  return (

    <div>
      <h1 style={{ textAlign: "center" }}> Student Results</h1>
      <form style={{ textAlign: "center" }} action="/" method="get">


        
<div>
        <TextField id="search"
            label="Search"
            style={{backgroundColor: "FFF1EF", width:"42%"}}
            InputProps={{ endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment> }}
          />
          </div>
      </form>
      <Card

        style={{
          width: "800px",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "50px",
          backgroundColor: "FFF1EF",
          padding: "50px 20px 30px 20px"
        }}
      >

        <div>
          <Table borderless>
            <thead style={{ backgroundColor: "FFF1EF" }}>
              <tr>

                <th></th>
                <th>Group ID</th>

                <th>Student ID</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody style={{ background: "white" }}>
              <tr style={{ marginBottom: "20px" }}>
                <td>
                  <input
                    type="checkbox"
                    name="nameOfChoice"
                    value="1"
                  />
                </td>
                <td>Grb123</td>
                <td>IT20276398</td>
                <td>79</td>
                <td>A</td>
              </tr>
              <tr style={{ marginBottom: "20px" }}>
                <td>
                  <input
                    type="checkbox"
                    name="nameOfChoice"
                    value="1"
                  />
                </td>
                <td>Grb129</td>
                <td>IT18920876</td>
                <td>89</td>
                <td>A+</td>
              </tr>
              <tr style={{ marginBottom: "20px" }}>
                <td>
                  <input
                    type="checkbox"
                    name="nameOfChoice"
                    value="1"
                  />
                </td>
                <td>Grb178</td>
                <td>IT28902982</td>
                <td>69</td>
                <td>B</td>
              </tr>
            </tbody>
          </Table>
          {/* <input
            type="checkbox"
            name="nameOfChoice"
            value="1"
            style={{ marginLeft: "200px", marginTop: "20px" }}
          />{" "} */}

        </div>
        {/* <div>
          <input
            type="checkbox"
            name="nameOfChoice"
            value="1"
            style={{ marginLeft: "200px", marginTop: "20px" }}
          />{" "}

        </div>
        <div>
          <input
            type="checkbox"
            name="nameOfChoice"
            value="1"
            style={{ marginLeft: "200px", marginTop: "20px" }}
          />{" "}

        </div> */}



        <Box textAlign='center'>
          {/* <Button style={{ backgroundColor: '#FF715B' }} variant='contained'>Download PDF
          </Button> */}
           <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#FF715B', borderRadius:"20px" }}
              size="large"
              startIcon={<ArrowCircleDownIcon />}
            >
              Download
            </Button>
        </Box>

       

      </Card>

    </div>
  )
}

export default ViewMarks

