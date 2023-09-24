"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Link, ListItemButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function FooterLayout() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <main>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ py: 2, px: 4, bgcolor: "#14161d", color: "#c8c8c8" }}
      >
        <Grid direction="row">
          <Typography variant="h4" gutterBottom>
            Jennifer Wallet
          </Typography>
          <Typography gutterBottom>
            Local Brand Of Indonesia. Focus Product Is Bags And Wallet
          </Typography>
          <p>Ruko Jl. Taman Palem Mutiara No.38-39, RT.4/RW.14</p>
          <p> Kecamatan Cengkareng Timur</p>
          <p>Kota Jakarta Barat </p>
          <p>Daerah Khusus Ibukota Jakarta 11730</p>

          <Typography variant="body2" color="#999999" sx={{ mt: 5 }}>
            {"Copyright © "}
            <Link color="inherit" href="https://jenniferwallet.com">
              Jennifer Wallet
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>

        <div className="social">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
            item
            xs={12}
            md={12}
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FacebookIcon sx={{ color: "#c8c8c8" }} />
                    </ListItemIcon>
                    <ListItemText primary="Facebook" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon sx={{ color: "#c8c8c8" }} />
                    </ListItemIcon>
                    <ListItemText primary="Instagram" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon sx={{ color: "#c8c8c8" }} />
                    </ListItemIcon>
                    <ListItemText primary="Tiktok" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </Stack>

            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon sx={{ color: "#c8c8c8" }} />
                    </ListItemIcon>
                    <ListItemText primary="Shopee" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon sx={{ color: "#c8c8c8" }} />
                    </ListItemIcon>
                    <ListItemText primary="Tokopedia" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InstagramIcon sx={{ color: "#c8c8c8" }} />
                    </ListItemIcon>
                    <ListItemText primary="Lazada" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </Stack>
          </Grid>
        </div>

        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          alignSelf="flex-end"
          spacing={0}
        >
          {/* <Typography>Jenniferwallet.com</Typography> */}
        </Stack>
      </Grid>
    </main>
  );
}

export default FooterLayout;
