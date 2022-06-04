import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { getToken, removeUserSession, getUser } from "../Utils/Common";

import { Link } from "react-router-dom";
const pages = ["Home", "Product", "Services", "Contact us", "Logout"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    window.location = "/";
  };

  const registerform = () => {
    window.location = "/registerform";
  };

  const registertopic = () => {
    window.location = "/registertopic";
  };

  const request = () => {
    window.location = "/request";
  };

  const requeststatus = () => {
    window.location = "/requeststatus";
  };

  const viewmarks = () => {
    window.location = "/viewmarks";
  };

  const profile = () => {
    window.location = "/profile";
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      style={{ backgroundColor: "transparent", fontFamily: "Poppins" }}
    >
      <Container maxWidth="xl" style={{ fontFamily: "Poppins" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <a href="/home">
              <img src="./EDUvation.png"></img>
            </a>
          </Typography>

          <Box
            style={{ fontFamily: "Poppins" }}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
            style={{ fontFamily: "Poppins" }}
          >
            <Button
              onClick={registerform}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Register Team
            </Button>
            <Button
              onClick={registertopic}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Register Topic
            </Button>
            <Button
              onClick={request}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Request
            </Button>
            <Button
              onClick={requeststatus}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Request Status
            </Button>
            <Button
              onClick={viewmarks}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Marks
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Calender
            </Button>

            <Button
              onClick={profile}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Profile
            </Button>

            <Button
              onClick={handleLogout}
              sx={{ my: 2, color: "black" }}
              style={{ marginRight: "10px" }}
            >
              Logout
            </Button>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
