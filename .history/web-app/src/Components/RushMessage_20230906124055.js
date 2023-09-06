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
                                    fontWeight={400}>I'm Avery Kuo, one of the rush chairs, and I'm a sophomore from Pleasanton, California majoring in Computer Science and Neuroscience. 
                                    I’m really happy that I rushed AKPsi because I’m now a part of such a welcoming and close-knit community. 
                                    Through AKPsi, I’ve been able to meet so many new people, leading to genuine friendships and lasting memories!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>My name is Vaishnavi Pinni, one of the rush chairs, and I’m a junior from St. Louis, Missouri studying Biomedical Engineering.
                                     I joined AKPsi because of all of the genuine and amazing people I met during rush. Every brother is incredibly supportive and always down to help out in whatever ways they can. 
                                     Rushing AKPsi was one of the best decisions i made at Hopkins and I’ve made lifelong friends through the fraternity!!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Hi! I’m Katherine Forbes, one of the rush chairs, and I'm a junior from The Woodlands, Texas majoring in Computer Science. 
                                    By joining AKPSI, I’ve made so many fond memories and became friends with so many people that I otherwise would never have gotten to meet. 
                                    I’m so glad that I made the decision to rush when I got to Hopkins, and I’m excited to get to know everyone joining this semester!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Our first and foremost advice for rush is to be yourself! Dont be
                            shy to meet new people and make meaningful connections. Try to learn about all the awesome
                            experiences our brothers have gotten from AKPsi. Get the most out of rush, and put yourself
                            out their to find out what makes you excited about the brotherhood! We are so so excited to
                            meet you all!</Typography>
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
