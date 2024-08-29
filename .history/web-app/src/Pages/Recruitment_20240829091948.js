import React, {useState} from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar"
import RushMessage from "../Components/RushMessage"
import Footer from "../Components/Footer";
import Title from "../Components/Title";
import recruitment from "../assets/FallRush24Banner.JPEG";
import Faq from "../Components/Faq"
import TagHeader from "../Components/TagHeader";
import SideBar from "../Components/Sidebar/Sidebar";
import "../styles/Image.css";




//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Recruitment = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
            setIsOpen(!isOpen)
        }
	return (
        <Stack alignItems='center' overflow='hidden' >

            <Navbar toggle={toggle} blue={true}></Navbar>
           <SideBar  isOpen={isOpen} toggle={toggle}/>
            <Stack marginY={{xs: 15, md:20}}  overflow='hidden' paddingX={{xs: 5, sm: 10, md: 20, lg: 30, xl: 40}} maxWidth={1920} spacing={6} >

            <Title wrap={true} header="Rush" body="Occurs at the start of every semester. Follow our Instagram page for the latest updates @akpsi_jhu and sign up below!"></Title>
                <TagHeader text="Schedule" ></TagHeader>
                <Box className="container">
                    <img className="container" src={recruitment} alt=""/>
                </Box>
            <RushMessage ></RushMessage>
            <Faq></Faq>
            </Stack>
            <Footer/>
        </Stack>
	);
};

export default Recruitment;
