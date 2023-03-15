import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material";
import { AccountCircle, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled("div")(() => ({
  display: "flex",
}));

const Layout = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <LayoutContainer>
      <AppBar
        color="inherit"
        sx={{
          minHeight: 64,
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            Cars App
          </Typography>
          <Typography variant="body2">Test User</Typography>
          <div>
            <IconButton onClick={handleOpenUserMenu} color="inherit">
              <AccountCircle />
              <KeyboardArrowDownOutlined />
            </IconButton>
            <Menu
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          width: "100%",
          padding: 3,
          marginTop: 8,
        }}
      >
        <Outlet />
      </Box>
    </LayoutContainer>
  );
};

export default Layout;
