import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box, Button, IconButton, MenuItem } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Fragment, useState } from "react";

const HamberGer = ({ open, handleOnClose }) => {
  const pages = [
    { name: "درباره من", href: "#Property" },
    { name: "توانایی های من", href: "#Skill" },
    { name: "نمونه کار های من", href: "#Abilist" },
    { name: "ارتباط با من", href: "#Contect" },
  ];
  return (
    <Fragment>
      <Box id="outer-container" className="ltr" textAlign="right">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          isOpen={open}
          onClose={handleOnClose}
        >
          {pages.map((page, index) => (
            <MenuItem key={index}>
              <Link
                href={page.href}
                className="navbar-hover"
                color="light.light"
              >
                {page.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Fragment>
  );
};

export default HamberGer;
