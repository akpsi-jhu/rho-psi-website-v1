import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import rushChairIMG from "../assets/RushChairsFall2024.jpeg";
import ImageBox from "./ImageBox";



const RushMessage = () => {


	return (
        <Stack spacing={8} >
            <Stack spacing={3}>
                              <Button
                        href={"https://forms.gle/aSVKr1MofaEgidGg8"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                             color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5,

                        }}>
                        Non-binding Interest Form
                    </Button>
                    <Button
                        href={"https://forms.gle/J9Cb4Sfeg2oabzt86"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                            color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5,


                        }}>
                        Sign Up for Coffee Chats
                    </Button>
                    <Button    
                        href={"https://groupme.com/join_group/98277256/unc1aT9M"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                            color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5

                        }}>
                        Join Rush GroupMe
                    </Button>
                    </Stack>
                    <Stack spacing={3}> 
            <Box
                sx={{
                    width: 300,
                    fontSize: 16,
                    paddingX: 1,
                    paddingY: 1.5,
                    backgroundColor: '#F0F0F0',
                    borderRadius: 85,
                    fontWeight: 500,
                    color: '#1F282C',
                }}>
                Message from our Rush Chairs
            </Box>

            <Typography variant="h3" textAlign="left">Hey there!</Typography>

            <Stack width={'100%'} direction={{xs: 'column-reverse', md: 'row'}} display="flex" spacing={{xs: 3, md: 5}}
                   sx={{overflow: 'hidden'}}>
                <Stack height="100%" spacing={4} textAlign="left">
                    <Stack spacing={3} textAlign="left">
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Hi! My name is Justin Wang, and I’m a junior majoring in Applied Math and Physics from Columbia Maryland. I’m super excited to be your rush chair this semester! I’ve found many of my close friends through this community and have made some of my favorite memories at Hopkins hanging out and going on trips with everyone here. I’m looking forward to meeting all of you at our events!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Hi everyone! I'm Matthew Dao, and I'm pumped to be your rush chair this semester. I'm a junior studying mechanical engineering from Las Vegas, Nevada. AKPsi has given me so many opportunities and tons of great friends, and I'm super excited to share this community with you. Rush is a one-of-a-kind experience, so make sure to get the most out of it! Can't wait to meet you at all of our rush events!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Our first and foremost advice for rush is to be yourself! Dont be
                            shy to meet new people and make meaningful connections. Try to learn about all the awesome
                            experiences our brothers have gotten from AKPsi. Get the most out of rush, and put yourself
                            out there to find out what makes you excited about the brotherhood! We are so so excited to
                            meet you all!</Typography>
                    </Stack>
                </Stack>
                <ImageBox src={rushChairIMG}/>
            </Stack>
            </Stack>

        </Stack>
	);
};

export default RushMessage;
