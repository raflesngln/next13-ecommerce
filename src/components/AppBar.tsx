"use client";
import * as React from "react";
import {useState} from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { Button, Menu, MenuItem, Popover } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from 'next/link'
import Image from 'next/image'

// const menuPages = ["Wallet", "Belt", "Cap", "Bags", "Card Holder"];
const menuPages = [
  { id: 1, url: "/", title: "Home", submenu: [] },
  { id: 1, url: "/kategori/wallet", title: "Wallet", submenu: [] },
  { id: 2, url: "/kategori/belt", title: "Belt", submenu: [] },
  { id: 3, url: "/kategori/cap", title: "Cap", submenu: [] },
  { id: 4, url: "/kategori/bags", title: "Bags", submenu: [] },
  { id: 5, url: "/kategori/cap-holder", title: "Card Holder", submenu: [] },
  {
    id: 6,
    url: "kategori/produk/",
    title: "kategori",
    submenu: [
      { id: 1, url: "Tas", title: "Tas" },
      { id: 1, url: "Kameja", title: "Kameja" },
      { id: 1, url: "Topi", title: "Topi" },
    ],
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#29292d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="/logo-light.png" alt="Jennifer Wallet" width={80} height={80}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "gray",
              textDecoration: "none",
            }}
          >
             |Jennifer Wallet
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {menuPages.map((val, id) => (
                <MenuItem key={val.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{val.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JFR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {menuPages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <HorizontalMenuWithSubmenu />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function HorizontalMenuWithSubmenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: { currentTarget: any }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {menuPages.map((val, i) => (
          <span key={i}>
            {val.submenu.length > 0 ? (
                // HAS SUB_MENU
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  endIcon={<ArrowDropDownIcon />}
                  sx={{ color: "#c8c8c8",top:'15px' }}
                >
                  {val.title}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                 
                  {
                    val.submenu.map((sub,i)=>{
                      return <MenuItem key={i} onClick={handleClose}>{sub.title}</MenuItem>
                    })
                  }
                </Menu>
              </>
            ) : (
              // NO SUB_MENU
              <Link key={i} href={`${val.url}`}>
              
              <Button
                key={val.id}
                sx={{ my: 2, color: "#c8c8c8", display: "block" }}
              >
                {val.title}
              </Button>
              </Link>
            )}
          </span>
        ))}
      </Box>
    </div>
  );
}

export default ResponsiveAppBar;
