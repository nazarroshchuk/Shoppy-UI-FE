"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Redeem from "@mui/icons-material/Redeem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {SettingMenu} from "./SettingMenu";
import {AuthContext} from "@/context/auth-context";
import {routes, unauthenticatedRoutes} from "@/constants/routes";
import Link from "next/link";
import {useContext} from "react";
import {useRouter} from "next/navigation";

interface HeaderProps {
    logout: () => Promise<void>;
}

export default function Header({logout}: HeaderProps) {
    const router = useRouter();
    const isAuthenticated = useContext(AuthContext);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const pages = isAuthenticated ? routes : unauthenticatedRoutes

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Redeem
                        sx={{display: {xs: "none", md: "flex"}, mr: 1}}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: "none", md: "flex"},
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Shoppy
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
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
                                display: {xs: "block", md: "none"},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.path} onClick={() => {
                                    router.push(page.path);
                                    handleCloseNavMenu()
                                }}>
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Redeem
                        sx={{display: {xs: "flex", md: "none"}, mr: 1}}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: "flex", md: "none"},
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Shoppy
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: "white", display: "block"}}
                            >
                                <Link href={page.path}>{page.title}</Link>
                            </Button>
                        ))}
                    </Box>
                    {isAuthenticated && <SettingMenu onLogout={logout}/>}
                </Toolbar>
            </Container>
        </AppBar>
    );
}


