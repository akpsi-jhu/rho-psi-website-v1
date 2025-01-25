import React from "react";
import { Stack, Typography, Button } from "@mui/material";

import TagHeader from "../Components/TagHeader"
import brotherhoodIMG from "../assets/brotherhood.png";
import ImageBox from "./ImageBox";



const Rush = () => {
	return (
        <Stack spacing = {3}  >
            <TagHeader text="Recruitment" ></TagHeader>
            <Typography variant="h3" textAlign="left">Rush AKPSI</Typography>
        <Stack direction={{ xs: 'column-reverse', md: 'row' }} overflow='hidden' display="flex"  spacing = {2}>
            <Stack spacing={4} textAlign="left">
            <Stack spacing={3} textAlign="left" >
                <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}} fontWeight={400}>Alpha Kappa Psi is the oldest and largest professional business fraternity with more than 160,000 initiated members world-wide at 265 active chapters. Recognized as the premier developer of principled business leaders, AKPsi prides itself on sending driven and inspiring members into the professional sphere.</Typography>
                <Typography variant="h7"  fontFamily="" lineHeight={1.5}  fontSize={{xs: 16, md: 16, lg: 16}} fontWeight={400}>Our chapter’s own alumni now currently work at companies such as JPMorgan, Bain & Co., Bridgewater Associates, McKinsey & Co., Amazon, Capital One, Bloomberg, Facebook, Accenture, and Goldman Sachs. Some have successfully established their own companies and gone on to become finalists at TechCrunch Disrupt, the world’s premier startup competition, while others have founded their own non-profit organizations.</Typography>
                <Typography variant="h7"   fontFamily="" lineHeight={1.5}  fontSize={{xs: 16, md: 16, lg: 16}} fontWeight={400}>We love to see our chapter grow and are always excited to welcome new members though our Fall and Spring recruitment. If you have any questions about Alpha Kappa Psi, please do not hesitate to email our Executive Board at akpsijhu@gmail.com or check our instagram @akpsi_jhu.</Typography>
            </Stack>
            <Button href={"https://forms.gle/P5WAQzvQY9kP1BxPA"} target={"_blank"}
                                variant="contained"
                                sx={{ width: '100%', fontSize: 20, padding: 1, backgroundColor: '#0C406F', borderRadius: 85, boxShadow: 3
                            }}>
                                Rush Interest Form
            </Button>
            </Stack>
            <ImageBox src={brotherhoodIMG}/>
        </Stack>

        </Stack>
	);
};

export default Rush;
