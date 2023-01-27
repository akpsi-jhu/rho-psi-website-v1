import React from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import hero from "../assets/city.png";
import About from "../Components/About"
import Rush from "../Components/Rush"
import Logos from "../Components/Logos";
import Footer from "../Components/Footer";
import { maxWidth } from "@mui/system";
import Title from "../Components/Title";
import EmailForm from "../Components/EmailForm";



//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Contact = () => {
	return (
        <Stack alignItems='center' overflow='hidden'>

            <Navbar blue={true}></Navbar>
            <Stack marginY={10} overflow='hidden' paddingX={{xs: 5, sm: 5, md: 5, lg: 20, xl: 30}} maxWidth={1920} spacing={6} >
            <Title wrap={false} header="Contact Us" body="Questions? Fill out the form below and we will respond to you via email as soon as possible.
You may also reach us directly at akpsi@gmail.com or via Instagram @akpsi_jhu! We look forward to hearing from you."></Title>
            <EmailForm></EmailForm>
            </Stack>
            <Footer/>




        </Stack>
	);
};

export default Contact;
