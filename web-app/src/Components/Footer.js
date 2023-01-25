import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
    Stack,
    Typography,
    IconButton,
  } from "@mui/material";


const Footer = () => {
return (
	<Stack py={4} direction="column" spacing={3} sx ={{backgroundColor: '#0C406F', color: "white"}}>
	<Typography  
                variant="h5"
                component="div"
                 sx = {{
                    fontFamily: "glegoo",
                }}
                >AKΨ</Typography>
	<Stack direction="row" spacing={2} justifyContent="center" >
        <IconButton href="https://www.instagram.com/akpsi_jhu/" aria-label="instagram" sx={{color: "white", border: 1}}>
            <InstagramIcon fontSize="small"/></IconButton>
        <IconButton href="https://www.facebook.com/johnshopkinsakpsi/" aria-label="facebook" sx={{color: "white", border: 1}}>
            <FacebookOutlinedIcon fontSize="small"/></IconButton>
        <IconButton href="https://www.linkedin.com/company/alpha-kappa-psi" aria-label="linkedin" sx={{color: "white", border: 1}}>
            <LinkedInIcon fontSize="small"/></IconButton>
	</Stack>
    <Typography sx={{fontSize:12, fontFamily: "glegoo"}}>Copyright @ 2023 Alpha Kappa Psi Rho Psi. All Rights Reserved. </Typography>
	</Stack>
);
};
export default Footer;
