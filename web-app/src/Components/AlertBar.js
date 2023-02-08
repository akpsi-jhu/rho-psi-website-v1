import React from "react";
import {
    Stack,
    Typography,
    Link,
} from "@mui/material";

const AlertBar = () => {
    return (
        <Stack py={0.4} direction="column" spacing={3} sx ={{backgroundColor: '#0C406F', color: "white"}} width='100vw'>
            <Typography fontFamily="" lineHeight={1.5} fontSize={{xs: 11, md: 14}} fontWeight={400}>
                Applications for new members are now available! <Link target={"_blank"} href="https://forms.gle/GwUL8q4f918FyePPA" sx={{color: "white", textDecorationColor: "white"}}>Apply here.</Link>
            </Typography>
        </Stack>
    );
};
export default AlertBar;
