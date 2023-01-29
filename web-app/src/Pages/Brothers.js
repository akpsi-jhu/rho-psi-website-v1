import React, {useState, useEffect} from "react";
import { Stack, Box, Typography, makeStyles } from "@mui/material";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer";
import Title from "../Components/Title";
import BrotherCard from "../Components/BrotherCard"

import { BrotherApi } from "../api/Firestore/BrotherApi.ts";


//fontSize={{xs: 24, md: 30, lg: 40, xl: 42}}

const Home = () => {

    const api = new BrotherApi();

    const pcNames = ["Alpha Lambda", "Alpha Mu", "Alpha Nu", "Alpha Xi", "Alpha Omicron"]

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

    
    return (
        <Stack alignItems='center' overflow='hidden'>
            <Navbar blue={true}></Navbar>
            <Stack marginY={10} overflow='hidden' paddingX={{xs: 5, sm: 5, md: 5, lg: 20, xl: 30}} maxWidth={1920} spacing={6} >
                <Title wrap={false} header="Active Brothers" body="We’re more than just peers in a business organization on campus. We’re here to build meaningful friendships to last a life time. Meet the amazing members of the Eta Epsilon chapter, where we celebrate our diversity of backgrounds, interests, and perspectives."></Title>
                <Box>
                    {brothers.filter(includes).map((brother, index) => (
                        <BrotherCard 
                            brother={brother}
                            key={index}
                        ></BrotherCard>
                    ))}
                </Box>

            
            </Stack>
            <Footer/>
        </Stack>
    );
};
export default Home;
