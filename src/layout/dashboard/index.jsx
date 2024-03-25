import React from "react";
import { Stack } from "@mui/material";
import HeaderNav from "./HeaderNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <Stack direction="column" sx={{ height: "100%" }}>
                <HeaderNav/>
                <Outlet/>
            </Stack>
        </>
    );
};

export default DashboardLayout;
