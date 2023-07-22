import React, { useState } from "react";
import {
  alpha,
  makeStyles,
  AppBar,
  Toolbar,
  InputBase,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import GreenIconButton from "./IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  iconButtonActions,
  mobileButtonActions,
} from "../actions/IconButtonActions";
import { drawerComponentActions } from "../actions/DrawerComponentActions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import GreenDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import { adminLogoutActions } from "../actions/AdminLoginActions";
import cn from "classnames";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuSpace: {
    marginBottom: "0.5em",
  },
  innerGrow: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const AppBars = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openBtn, openBtnMo } = useSelector((state) => state.buttons);
  const isMenuOpen = Boolean(openBtn);
  const isMobileMenuOpen = Boolean(openBtnMo);
  const { top } = useSelector((state) => state.drawer);

  const handleProfileMenuOpen = (event) => {
    dispatch(iconButtonActions(event.currentTarget));
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(drawerComponentActions(anchor, open));
  };

  const handleMobileMenuClose = () => {
    dispatch(mobileButtonActions(null));
  };

  const handleMenuClose = () => {
    dispatch(iconButtonActions(null));
    handleMobileMenuClose();
  };

  const handleProfileOpen = () => {
    navigate("/profile");
    dispatch(iconButtonActions(null));
    handleMobileMenuClose();
  };

  const handleMenuLogout = () => {
    dispatch(adminLogoutActions());
    navigate("/login");
    dispatch(iconButtonActions(null));
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    dispatch(mobileButtonActions(event.currentTarget));
  };
  // setCookies("token", token);
  // setLocalStorage("loginData", user);
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={openBtn}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfileOpen} className={cn(classes.menuSpace)}>
        <PersonIcon />
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuLogout}>
        <ExitToAppIcon /> Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={openBtnMo}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <GreenIconButton
          AriaLabel="account of current user"
          AriaControlId="primary-search-account-menu"
          AriaHashPopUp="true"
          Color="inherit"
        />
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.innerGrow}>
        <Toolbar>
          <GreenIconButton
            Edge="start"
            Color="inherit"
            AriaLabel="open drawer"
            Icon={<MenuIcon />}
            Onclick={toggleDrawer("top", true)}
          />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <GreenIconButton
              Edge="end"
              AriaLabel="account of current user"
              AriaControlId={menuId}
              AriaHashPopUp="true"
              Onclick={handleProfileMenuOpen}
              Color="inherit"
              Icon={<AccountCircle />}
            />
          </div>
          <div className={classes.sectionMobile}>
            <GreenIconButton
              AriaLabel="show more"
              AriaControlId={mobileMenuId}
              AriaHashPopUp="true"
              Onclick={handleMobileMenuOpen}
              Color="inherit"
              Icon={<MoreIcon />}
            />
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <GreenDrawer
        toggleDrawer={toggleDrawer}
        keyValue="top"
        anchor="top"
        open={top}
      />
    </div>
  );
};

export default AppBars;
