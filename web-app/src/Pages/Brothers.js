import React, {useState, useEffect} from "react";
import {Stack, Box, Typography, makeStyles, Divider} from "@mui/material";
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer";
import Title from "../Components/Title";
import SideBar from "../Components/Sidebar/Sidebar";

import { BrotherApi } from "../api/Firestore/BrotherApi.ts";
import PcSection from "../Components/PcSection";


//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
            setIsOpen(!isOpen)
        }

    const api = new BrotherApi();

    const pcNames = ["Alpha Lambda", "Alpha Mu", "Alpha Nu", "Alpha Xi", "Alpha Omicron", "Alpha Pi"]

    // const pcNames = ["Alpha Xi"]
    const [brothers, setBrothers] = useState([]);
      useEffect(() => {
          api.getActiveBrothersList().then(result => {
              setBrothers(result);
          })
      }, []);

      //need to create different includes based on class
      const includes = (brother) => {
        //const shortQuery = query.trim().toLowerCase();

        /** 
        return (
          (brother.itemDetails.categories == category ||
          category === 'Filter') && (
          shortQuery === "" ||
          brother.itemDetails.title.toLowerCase().includes(shortQuery) ||
          brother.itemDetails.description.toLowerCase().includes(shortQuery))
          
        );
        */
      };

    if (!brothers.length) {
        return(
            <Stack alignItems='center' overflow='hidden'>
                <Navbar toggle={toggle} blue={true}></Navbar>
                <SideBar  isOpen={isOpen} toggle={toggle}/>  
                <Stack marginY={{xs: 15, md:20}}  overflow='hidden' paddingX={{xs: 5, sm: 10, md: 20, lg: 30, xl: 40}} maxWidth={1920} spacing={6} >
                    <Title wrap={false} header="Active Brothers" body="We’re more than just peers in a business organization on campus. We’re here to build meaningful friendships to last a life time. Meet the amazing members of the Eta Epsilon chapter, where we celebrate our diversity of backgrounds, interests, and perspectives."></Title>
                    <Typography>
                        Loading...
                    </Typography>
                </Stack>
                <Footer/>
            </Stack>
        )
    }
    else {
        return (
            <Stack alignItems='center' overflow='hidden'>
            <Navbar toggle={toggle} blue={true}></Navbar>
           <SideBar  isOpen={isOpen} toggle={toggle}/>  
                <Stack marginY={{xs: 15, md:20}}  overflow='hidden' paddingX={{xs: 5, sm: 10, md: 20, lg: 30, xl: 40}} maxWidth={1920} spacing={4} >
                    <Title wrap={false} header="Active Brothers" body="We’re more than just peers in a business organization on campus. We’re here to build meaningful friendships to last a life time. Meet the amazing members of the Eta Epsilon chapter, where we celebrate our diversity of backgrounds, interests, and perspectives."></Title>
                    <Box>
                        {pcNames.map((pc) => (
                            <Stack>
                                <PcSection brothers={brothers} pc={pc}/>
                                <Divider flexItem sx = {{
                                    borderRightWidth: 5,
                                    borderBottomWidth: 3
                                }}></Divider>
                            </Stack>


                        ))}
                    </Box>
                </Stack>
                <Footer/>
            </Stack>
        );
    }
};
export default Home;
