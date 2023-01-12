import React from "react";
import { Stack, Box, Typography, Divider, Button } from "@mui/material";
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import hero from "../assets/city.png";




const Title = (props) => {
	return (
        <Stack direction={"row"} spacing={10} sx = {{
            textAlign: "left"
        }}>
            <Typography variant="h3" sx = {{
                width: 1400
            }}>{props.header}</Typography>
            <Divider orientation="vertical" flexItem></Divider>
            <Typography variant="h6">{props.body}</Typography>

        </Stack>
	);
};

export default Title;
