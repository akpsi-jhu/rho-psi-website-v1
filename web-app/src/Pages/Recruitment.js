import React from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import hero from "../assets/city.png";
import About from "../Components/About"
import RushMessage from "../Components/RushMessage"
import Logos from "../Components/Logos";
import Footer from "../Components/Footer";
import { maxWidth } from "@mui/system";
import Title from "../Components/Title";
import EmailForm from "../Components/EmailForm";
import recruitment from "../assets/aboveandbeyond.png";
import Faq from "../Components/Faq"
import TagHeader from "../Components/TagHeader";




//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Recruitment = () => {
	return (
        <Stack alignItems='center' overflow='hidden'>

            <Navbar blue={true}></Navbar>
            <Stack marginY={10} overflow='hidden' paddingX={{xs: 5, sm: 5, md: 5, lg: 20, xl: 30}} maxWidth={1920} spacing={6} >

            <Title wrap={true} header="Spring Rush 2023" body="Recruitment begins the second week of February, from 2/8 - 2/18.
Follow our Instagram page for the latest updates: @akpsi_jhu and sign up below!"></Title>
                <TagHeader text="Schedule" ></TagHeader>
                <img src={recruitment} alt={"Spring rush"}  style={{width: '100%', objectFit: 'cover', height: 'auto'}}/>
            <RushMessage></RushMessage>
            <Faq></Faq>
            </Stack>
            <Footer/>




        </Stack>
	);
};

export default Recruitment;
