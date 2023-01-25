import React from "react";
import { Stack, Box, Typography, Divider, Button } from "@mui/material";





const Title = (props) => {
	return (
        <Stack direction={"row"} spacing={5} sx = {{
            textAlign: "left"
        }}>
            <Typography variant="h3" sx = {{
                fontSize: 40,
                lineHeight: 1.3,
                width: 1000,
            }}>{props.header}</Typography>
            <Divider orientation="vertical" flexItem sx = {{
                borderRightWidth: 5 
            }}></Divider>
            <Typography variant="h6" fontSize={18}>{props.body}</Typography>

        </Stack>
	);
};

export default Title;
