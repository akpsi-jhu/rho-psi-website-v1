import React from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";

import TagHeader from "../Components/TagHeader"
import Title from "../Components/Title"
import HoverCard from "./HoverCard"
import brotherhoodIMG from "../assets/brotherhood.png";
import professionalIMG from "../assets/prof.png";
import socialIMG from "../assets/social.png";


const About = () => {
	return (
        <Stack spacing = {5} width='100%' >
        <Stack spacing={4}>
        <TagHeader text="About who we are"></TagHeader>
        <Title wrap={true} header="Shaping People Shaping Business" body="Since our founding in 2001, our chapter has worked to develop
         principled business leaders of the future. As the business powerhouse of Johns Hopkins University, we continue to bring together Hopkins’ highest achieving,
          business-minded students to foster a community of growth, brotherhood, and success."></Title>
          </Stack>
        <Stack  direction={{ sm: 'column', md: 'row' }} spacing={{xs: 8, md: 3, lg: 8, xl: 8}} justifyContent="space-between" alignItems="center" >
                <HoverCard
                image={brotherhoodIMG}
                title= "Brotherhood"
                body="Our brotherhood has 71 members from diverse backgrounds and 20 majors, hailing from countries including Brazil, Morocco, and Australia."
                ></HoverCard>
                                <HoverCard
                image={professionalIMG}
                title= "Professionalism"
                body="From pledge projects, mentorship programs, professional development resources, to an extensive alumni network, we set brothers up for lifelong success."
                ></HoverCard>
                                <HoverCard
                image={socialIMG}
                title= "Social"
                body="Our foremost priority is to be a platform for like-minded, driven individuals to meet. You'll find your closest and truest friends here."
                ></HoverCard>
        </Stack>

          
        </Stack>
	);
};

export default About;
