import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";

import TagHeader from "../Components/TagHeader"
import Title from "../Components/Title"
import HoverCard from "./HoverCard"
import brotherhoodIMG from "../assets/brotherhood.png";
import professionalIMG from "../assets/prof.png";
import groupImg from "../assets/group.png";

import socialIMG from "../assets/social.png";
import ImageSlideshow from "./ImageSlideshow";



const About = () => {


	return (
        <Stack spacing = {3}>
            <TagHeader text="Recruitment" textAlign></TagHeader>
        <Stack direction="row" spacing = {10}>
            <Stack spacing={4} textAlign="left">
                <Typography variant="h3">Rush AKPSI</Typography>
            <Stack spacing={3} textAlign="left">
                <Typography variant="h7" fontFamily="" lineHeight={1.5} fontWeight={500}>Alpha Kappa Psi is the oldest and largest professional business fraternity with more than 160,000 initiated members world-wide at 265 active chapters. Recognized as the premier developer of principled business leaders, AKPsi prides itself on sending driven and inspiring members into the professional sphere.</Typography>
                <Typography variant="h7" lineHeight={1.5}>Our chapter’s own alumni now currently work at companies such as JPMorgan, Bain & Co., Bridgewater Associates, McKinsey & Co., Amazon, Capital One, Bloomberg, Facebook, Accenture, and Goldman Sachs. Some have successfully established their own companies and gone on to become finalists at TechCrunch Disrupt, the world’s premier startup competition, while others have founded their own non-profit organizations.</Typography>
                <Typography variant="h7" lineHeight={1.5}>We love to see our chapter grow and are always excited to welcome new members though our Fall and Spring recruitment. If you have any questions about Alpha Kappa Psi, please do not hesitate to email our Executive Board at akpsijhu@gmail.com or check our</Typography>
            </Stack>
            <Button
                                variant="contained"
                                sx={{ width: 400, fontSize: 20, padding: 1, backgroundColor: '#0C406F', borderRadius: 85, boxShadow: 3
                            }}>
                                Sign up for Rush

            </Button>
            </Stack>
            <ImageSlideshow></ImageSlideshow>
        </Stack>

        </Stack>
	);
};

export default About;
