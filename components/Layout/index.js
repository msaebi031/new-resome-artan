import { Box, Grid, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HamberGer from "../Header/menu";
import { Fragment, useState } from "react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOnClose = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <HamberGer open={open} handleOnClose={handleOnClose} />

      <Grid container>
        <Grid xs={12} md={5.5} item>
          {children}
        </Grid>
        <Grid
          md={6.5}
          item
          display={{ xs: "none", md: "block" }}
          position="relative"
        >
          <Box
            component="img"
            src="/img/header-1.jpg"
            alt="عکس هدر"
            className="img-fixed"
            zIndex="-2"
          />
        </Grid>
        <IconButton className="menu-icon" onClick={() => handleOnClose()}>
          <MenuRoundedIcon color="light" />
        </IconButton>
      </Grid>
    </Fragment>
  );
};

export default Layout;
