import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import rushChairIMG from "../assets/RushChairsSpring2025.png";
import ImageBox from "./ImageBox";

const RushMessage = () => {
	return (
        <Stack spacing={8} >
            <Stack spacing={3}>
                              <Button
                        href={"https://forms.gle/P5WAQzvQY9kP1BxPA"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                             color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5,
                        }}>
                        Non-binding Interest Form
                    </Button>
                    <Button
                        href={"https://forms.gle/JCfdiab8YntV1TGC6"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                            color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5,
                        }}>
                        Sign Up for Coffee Chats
                    </Button>
                    <Button    
                        href={"https://groupme.com/join_group/105397629/5fu5jMwM"}
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
                                    fontWeight={400}>Hi everyone! I’m Julia Tuinman, and I’m thrilled to be your rush chair this semester. I’m a sophomore majoring in Computer Science from Michigan. Going through the rush process with AKPsi was one of the best decisions I’ve made—it introduced me to some incredible people and a supportive community that I’m so grateful to be part of. AKPsi has also helped me grow professionally and opened doors to exciting new opportunities. I can’t wait to meet all of you at our events!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Hi everyone! My name is Miles and I’m a sophomore studying Applied Math, originally from Berwyn, Pennsylvania. I’m looking forward to meeting you all as your rush chair! I’ve met so many great people and gained access to so many amazing opportunities through AKPsi and I want to do my best to give back. I’ll do my best to make rush as fun for you as it was for me.</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Hi! My name is Alyssa Chu, and I’m so excited to be one of your rush chairs this semester! I am a sophomore majoring in Public Health and Molecular and Cellular Biology from Pasadena, California. Joining AKPsi has helped me grow so much professionally and socially, and I have had the pleasure of meeting so many motivated, intelligent, and lively people through this fraternity. I am so pumped to meet you all through our events and show you what AKPsi is all about!</Typography>
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
