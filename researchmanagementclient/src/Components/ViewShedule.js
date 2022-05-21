

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




function ViewShedule() {
  return (

    <div>
      <h1 style={{ textAlign: "center" }}> Requested Student List</h1>
      <form style={{ textAlign: "center" }} action="/" method="get">


        {/* <label htmlFor="header-search">
          <span className="visually-hidden">Search</span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search"
          name="s"
          style={{backgroundColor: "FFF1EF", border:"none", borderRadius:"5px", height:"30px", }}
        /> */}
        {/* <Button style={{ Align: "center" }} type="submit">Search</Button> */}

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

                <th>Date</th>
                <th>Time</th>
                <th>Allocated pannle</th>
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
                <td>20/12/2022</td>
                <td>12.25</td>
                <td>0779299587</td>
              </tr>
              <tr style={{ marginBottom: "20px" }}>
                <td>
                  <input
                    type="checkbox"
                    name="nameOfChoice"
                    value="1"
                  />
                </td>
                <td>Grb123</td>
                <td>20/12/2022</td>
                <td>12.5</td>
                <td>0779299587</td>
              </tr>
              <tr style={{ marginBottom: "20px" }}>
                <td>
                  <input
                    type="checkbox"
                    name="nameOfChoice"
                    value="1"
                  />
                </td>
                <td>Grb123</td>
                <td>21/12/2022</td>
                <td>12.25</td>
                <td>0772908276</td>
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

export default ViewShedule

