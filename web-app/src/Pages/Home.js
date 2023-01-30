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



//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Home = () => {
	return (
        <Stack alignItems='center' overflow='hidden'>
            <Box sx = {{
                    height: "100vh",
                    width: "100vw",
                    minHeight: "600px",
                    backgroundImage: `url(${hero})`,
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflowY: "hidden",
                    overflowX: "hidden",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center"

            }}>
            <Hero></Hero>     
            <Navbar blue={false}></Navbar>
            </Box>
            <Box marginY={10} overflow='hidden' paddingX={{xs: 5, sm: 10, md: 20, lg: 30, xl: 40}} maxWidth={1920} >
            <About></About>
            </Box>
            <Logos></Logos>
            <Box marginY={10} paddingX={{xs: 5, sm: 10, md: 20, lg: 30, xl: 40}} maxWidth={1920}>
            <Rush></Rush>
            </Box>
            <Footer/>




        </Stack>
	);
};

export default Home;
