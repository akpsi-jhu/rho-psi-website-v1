import React, {useState} from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer";
import Title from "../Components/Title";
import EmailForm from "../Components/EmailForm";
import SideBar from "../Components/Sidebar/Sidebar";


//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}
const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Stack alignItems='center' overflow='hidden'>

            <Navbar toggle={toggle} blue={true}></Navbar>
            <SideBar  isOpen={isOpen} toggle={toggle}/>
            <Stack marginY={{xs: 15, md:20}} overflow='hidden' paddingX={{xs: 5, sm: 10, md: 20, lg: 30, xl: 40}} maxWidth={1920} spacing={6} >
                <Title wrap={false} header="Calendar" body="Bored or lonely? No longer! Find out when to hang with the brothers. Everyone would love to see you, so clear your calendars."></Title>
                <iframe src="https://calendar.google.com/calendar/embed?src=akpsijhu%40gmail.com&ctz=America%2FNew_York" height="600"></iframe>
            </Stack>
            <Footer/>




        </Stack>
    );
};

export default Contact;
