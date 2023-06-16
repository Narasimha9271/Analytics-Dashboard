import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    InputBase,
    IconButton,
    Badge,
    Tooltip,
    Box,
} from "@mui/material";
import {
    Search,
    Mail,
    Notifications,
    Language,
    PowerSettingsNew,
} from "@mui/icons-material";

const Navbar = () => {
    const [isSearchBarHovered, setIsSearchBarHovered] = useState(false);

    const handleSearchBarMouseEnter = () => {
        setIsSearchBarHovered(true);
    };

    const handleSearchBarMouseLeave = () => {
        setIsSearchBarHovered(false);
    };

    return (
        <AppBar
            position="static"
            style={{ backgroundColor: "white", minHeight: "64px" }}
        >
            <Toolbar>
                <Box
                    flexGrow={1}
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "20px",
                            border: "1px solid white",
                            borderRadius: "5px",
                            backgroundColor: isSearchBarHovered
                                ? "lightgray"
                                : "white",
                        }}
                        onMouseEnter={handleSearchBarMouseEnter}
                        onMouseLeave={handleSearchBarMouseLeave}
                    >
                        <Search
                            style={{
                                marginRight: "1px",
                                fontSize: "1.5rem",
                                color: "#f5f5ef",
                            }}
                        />
                        <InputBase
                            placeholder="Search topics"
                            style={{
                                width: "300px",
                                padding: "10px 10px 10px 4px",
                            }}
                        />
                    </div>
                </Box>

                <Box display="flex" alignItems="center">
                    <Tooltip title="Messages" placement="bottom">
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="primary">
                                <Mail style={{ color: "gray" }} />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Notifications" placement="bottom">
                        <IconButton color="inherit">
                            <Badge badgeContent={2} color="primary">
                                <Notifications style={{ color: "gray" }} />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Language" placement="bottom">
                        <IconButton color="inherit">
                            <Language style={{ color: "gray" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Power" placement="bottom">
                        <IconButton color="inherit">
                            <PowerSettingsNew style={{ color: "gray" }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
