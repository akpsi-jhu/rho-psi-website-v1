import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
    Stack,
    Typography,
    IconButton, ThemeProvider,
} from "@mui/material";

import {logoTheme} from "../themes/theme";


const Footer = () => {
return (
	<Stack py={4} direction="column" spacing={3} sx ={{backgroundColor: '#0C406F', color: "white"}} width='100vw'>
        <ThemeProvider theme={logoTheme}>
	<Typography
                variant="h5"
                component="div"
                >AKΨ</Typography>
        </ThemeProvider>
	<Stack direction="row" spacing={2} justifyContent="center" >
        <IconButton href="https://www.instagram.com/akpsi_jhu/" aria-label="instagram" sx={{color: "white", border: 1}}>
            <InstagramIcon fontSize="small"/></IconButton>
        <IconButton href="https://www.facebook.com/johnshopkinsakpsi/" aria-label="facebook" sx={{color: "white", border: 1}}>
            <FacebookOutlinedIcon fontSize="small"/></IconButton>
        <IconButton href="https://www.linkedin.com/company/alpha-kappa-psi" aria-label="linkedin" sx={{color: "white", border: 1}}>
            <LinkedInIcon fontSize="small"/></IconButton>
	</Stack>
    <Stack spacing={1}>
        <Typography sx={{fontSize:12, fontFamily: "glegoo"}}>Copyright @ 2023 Alpha Kappa Psi Rho Psi. All Rights Reserved. </Typography>
        <Typography sx={{fontSize:12, fontFamily: "glegoo"}}>Site by Anthony Sky Ng-Thow Hing & Liwen Tran & Ethan Lee</Typography>
    </Stack>
	</Stack>
);
};
export default Footer;
