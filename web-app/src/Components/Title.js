import React from "react";
import { Stack, Box, Typography, Divider, Button } from "@mui/material";





const Title = (props) => {
	return (
        <Stack direction={"row"} spacing={10} sx = {{
            textAlign: "left"
        }}>
            <Typography variant="h3" sx = {{
                width: 1400
            }}>{props.header}</Typography>
            <Divider orientation="vertical" flexItem sx = {{
                borderRightWidth: 5 
            }}></Divider>
            <Typography variant="h6">{props.body}</Typography>

        </Stack>
	);
};

export default Title;
