import React from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer";
import Title from "../Components/Title";

//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Home = () => {
    return (
        <Stack alignItems='center' overflow='hidden'>
            <Navbar blue={true}></Navbar>
            <Stack marginY={10} overflow='hidden' paddingX={{xs: 5, sm: 5, md: 5, lg: 20, xl: 30}} maxWidth={1920} spacing={6} >
                <Title wrap={false} header="Active Brothers" body="We’re more than just peers in a business organization on campus. We’re here to build meaningful friendships to last a life time. Meet the amazing members of the Eta Epsilon chapter, where we celebrate our diversity of backgrounds, interests, and perspectives."></Title>
            </Stack>
            <Footer/>
        </Stack>
    );
};
export default Home;
