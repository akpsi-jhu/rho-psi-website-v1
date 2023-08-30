import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";

import TagHeader from "../Components/TagHeader"
import Title from "../Components/Title"
import HoverCard from "./HoverCard"
import professionalIMG from "../assets/prof.png";
import groupImg from "../assets/group.png";
import rushChairIMG from "../assets/rushChairsFall2023.jpg";



import socialIMG from "../assets/social.png";
import ImageSlideshow from "./ImageSlideshow";
import ImageBox from "./ImageBox";



const RushMessage = () => {


	return (
        <Stack spacing={3} >
            <Box
                sx={{
                    width: 300,
                    fontSize: 16,
                    paddingX: 1,
                    paddingY: 1.5,
                    backgroundColor: '#F0F0F0',
                    borderRadius: 85,
                    fontWeight: 500,
                    color: '#1F282C'
                }}>
                Message from our Rush Chairs
            </Box>
            <Typography variant="h3" textAlign="left">Hey there!</Typography>

            <Stack width={'100%'} direction={{xs: 'column-reverse', md: 'row'}} display="flex" spacing={{xs: 3, md: 5}}
                   sx={{overflow: 'hidden'}}>
                <Stack height="100%" spacing={4} textAlign="left">
                    <Stack spacing={3} textAlign="left">
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>My name is Sneha Raj and I’m one of the rush chairs for Spring
                            2023. I’m a sophomore majoring in biomedical engineering originally from San Jose,
                            California. Outside of AKPsi, I'm involved with Shakti and the MedTech Network. I am
                            extremely grateful for the community I found in AKPsi. It's where I've made so many
                            wonderful friendships, and I'm constantly learning from the people around me.</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>I'm Dylan Shin, the other rush chair, and I'm a junior majoring in
                            mol-cell bio and economics. I am so glad I rushed AKPsi because I got to join such a tight
                            knit and uplifting community where everyone feels welcome. I've made so many great memories
                            with wonderful people in AKPsi. </Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Our first and foremost advice for rush is to be yourself! Dont be
                            shy to meet new people and make meaningful connections. Try to learn about all the awesome
                            experiences our brothers have gotten from AKPsi. Get the most out of rush, and put yourself
                            out their to find out what makes you excited about the brotherhood! We are so so excited to
                            meet you all, so Lights, Cameras, Rush!</Typography>
                    </Stack>
                    <Button
                        href={"https://docs.google.com/forms/d/e/1FAIpQLScylHH9lcGaWcc3XOflA8FTFPPbWITYjS1LvxbtS6RPFYmGxQ/viewform"}
                        target={"_blank"}
                        variant="contained"
                        sx={{
                            width: '100%',
                            fontSize: 20,
                            padding: 1,
                            backgroundColor: '#0C406F',
                            borderRadius: 85,
                            boxShadow: 3
                        }}>
                        Apply Now

                    </Button>
                </Stack>
                <ImageBox src={rushChairIMG}/>
            </Stack>

        </Stack>
	);
};

export default RushMessage;
