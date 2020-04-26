import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Drawer,
    List,
    Divider,
} from "@material-ui/core";
import {
    Menu,
    Notifications,
    Mail,
    AccountCircle,
    ChevronLeft,
    ExitToApp,
} from "@material-ui/icons";

import { Wrapper, useStyles } from "./styles";

import api from "../../services/api";
import { logout, getToken } from "../../services/auth";

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const history = useHistory();

    const token = getToken();

    const handleDrawer = () => {
        setOpen(!open);
    };

    const handleLogout = async () => {
        const response = await api.post("auth/logout", {
            headers: {
                Authorization: `Basic ${token}`,
            },
        });
        logout();
        history.push("/");
    };
    return (
        <Wrapper className={classes.root}>
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Mail />
                    </IconButton>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    ),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawer}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List>{/* mainListItems */}</List>
                <Divider />
                <List>{/* secondaryListItems */}</List>
            </Drawer>
        </Wrapper>
    );
}
