import React from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import hero from "../assets/city.png";
import About from "../Components/About"
import Rush from "../Components/Rush"
import Logos from "../Components/Logos";
import Footer from "../Components/Footer";




const Home = () => {
	return (
        <Stack>
        <Box sx = {{
                height: "100vh",
                width: "100vw",
				display: "flex",
				minHeight: "600px",
				alignItems: "end",
                backgroundImage: `url(${hero})`,
                backgroundAttachment: "fixed",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
                overflowY: "hidden",
                overflowX: "hidden",
                position: "relative"
        }}>
        <Navbar></Navbar>
        <Hero></Hero>                     
        </Box>
        <Box marginY={10} marginX={30}>
        <About></About>
        </Box>
        <Logos></Logos>
        <Box marginY={10} marginX={30}>
        <Rush></Rush>
        </Box>
        <Footer />



        </Stack>
	);
};

export default Home;
