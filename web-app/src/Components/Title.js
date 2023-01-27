import React from "react";
import { Stack, Box, Typography, Divider, Button } from "@mui/material";





const Title = (props) => {
	return (
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{xs: 2, md: 5}} sx = {{
            textAlign: "left",
            width: '100%',
            alignItems: "center"
        }}>
            <Typography variant="h3" sx = {{
                fontSize: {xs: 26, sm: 26, md: 30, lg: 36, xl: 36},
                lineHeight: {md: 1.3, lg: 1.3, xl: 1.3},
                whiteSpace: props.wrap ? "normal": "nowrap",
                width: props.wrap ? '100%' : '%',
                maxWidth: {md: 800, lg: 1000, xl: 1000},
            }}>{props.header}</Typography>
            <Divider orientation={{sm: "horizontal", md: "vertical" }}flexItem sx = {{
                borderRightWidth: 5,
                borderBottomWidth: 3
            }}></Divider>
            <Typography variant="h6" sx = {{
                 fontSize: {xs: 16, md: 16, lg: 18, xl: 18},
            }}>{props.body}</Typography>
        </Stack>
	);
};

export default Title;
