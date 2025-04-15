import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";


interface SettingMenuProps {
    onLogout: () => Promise<void>;
}

export const SettingMenu = ({onLogout}: SettingMenuProps) => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = async () => {
        setAnchorElUser(null);
        await onLogout();
    };

    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{mt: "45px"}}
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
                <MenuItem key="logout" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};