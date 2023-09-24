"use client";
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
import { Grid, Card, CardContent } from "@mui/material";
import Link from 'next/link'

import jsonData from "@/config/jsonData.json";
import CorouselProduct from "@/components/corouselProduct";
import MediaCard from "@/components/MediaCard";
import CorouselHeader from "@/components/corouselHeader";
import CategoryHeader from "@/components/CategoryHeader";

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
    <main>
      <Container maxWidth="xl">
        <CorouselHeader />

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{ mb: 4, mt: { xs: 2, md: 10 } }}
        >
          <Grid container spacing={6}>
            <CategoryHeader />
          </Grid>
        </Grid>

        <CorouselProduct />

        <Typography variant="h4" sx={{ mt: 10, ml: 3, mb: 1 }}>
          Produk Terlaris
        </Typography>

        <Grid container spacing={2}>
          {jsonData.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Link key={i} href={`/produk/${item.id}/${item.label}`}>
                <MediaCard
                  key={i}
                  title={item.label}
                  image={item.imgPath}
                  desc="Lorem ipsum"
                />
            </Link>
              </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
export default ResponsiveAppBar;
