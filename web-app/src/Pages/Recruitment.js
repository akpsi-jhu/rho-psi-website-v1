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
import recruitment from "../assets/aboveandbeyond.png";
import Faq from "../Components/Faq"




//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Recruitment = () => {
	return (
        <Stack alignItems='center' overflow='hidden'>

            <Navbar blue={true}></Navbar>
            <Stack marginY={10} overflow='hidden' paddingX={{xs: 5, sm: 5, md: 5, lg: 20, xl: 30}} maxWidth={1920} spacing={6} >
            <Title wrap={true} header="Spring Rush 2023" body="Alpha Kappa Psi Spring 2023 Recruitment begins the third week of February, from February 15 - February 23. We’re open to all majors — Submit an interest form here!
Like our Facebook page: https://www.facebook.com/akpsibruins Follow us on Instagram for more updates: @ucla.akpsi"></Title>
                <img src={recruitment} alt={"Spring rush"}  style={{width: '100%', objectFit: 'cover', height: 'auto'}}/>
            <Rush></Rush>
            <Faq></Faq>
            </Stack>
            <Footer/>




        </Stack>
	);
};

export default Recruitment;
