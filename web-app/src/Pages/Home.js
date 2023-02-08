import React, { useState } from "react";
import { Stack, Box} from "@mui/material";
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar/Navbar"
import hero from "../assets/city.png";
import About from "../Components/About"
import Rush from "../Components/Rush"
import Logos from "../Components/Logos";
import Footer from "../Components/Footer";
import SideBar from "../Components/Sidebar/Sidebar";
import AlertBar from "../Components/AlertBar";





//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Home = () => {

        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => {
                setIsOpen(!isOpen)
            }

        
	return (

        <Stack alignItems='center' overflow='hidden' >
            <AlertBar/>

            <Box sx = {{
                    height: "100vh",
                    width: "100vw",
                    minHeight: "600px",
                    backgroundImage: `url(${hero})`,
                    backgroundAttachment: {xs: "scroll", md: "scroll", lg: "fixed", xl: "fixed"},
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    overflowY: "hidden",
                    overflowX: "hidden",
                    position: "relative",
                    justifyContent: "center",
                    display: "flex",



            }}>

            <Hero></Hero>   
            <SideBar  isOpen={isOpen} toggle={toggle}/>  
            <Navbar toggle={toggle} blue={false}></Navbar>

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
