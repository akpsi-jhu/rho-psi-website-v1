import React from "react";
import { Stack, Box, Typography, makeStyles, Button } from "@mui/material";
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import hero from "../assets/city.png";




const TagHeader = (props) => {
	return (
        <Box
        sx={{ width: 160, fontSize: 16, paddingX: 1, paddingY: 1.5, backgroundColor: '#F0F0F0', borderRadius: 85, fontWeight: 500, color: '#1F282C'
    }}>
        {props.text}
    </Box>
	);
};

export default TagHeader;
