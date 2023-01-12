import React from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";

import TagHeader from "../Components/TagHeader"
import Title from "../Components/Title"





const About = () => {
	return (
        <Stack spacing={3}>
        <TagHeader text="About who we are"></TagHeader>
        <Title header="Shaping People Shaping Business" body="Since our founding in 2001, our chapter has worked to develop
         principled business leaders of the future. As the business powerhouse of Johns Hopkins University, we continue to bring together Hopkins’ highest achieving,
          business-minded students to foster a community of growth, brotherhood, and success."></Title>
        </Stack>
	);
};

export default About;
