import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import rushChairIMG from "../assets/rushChairsSp24.jpg";
import ImageBox from "./ImageBox";



const RushMessage = () => {


	return (
        <Stack spacing={8} >
            <Stack spacing={3}>
                              <Button
                        href={"https://forms.gle/fq1G2xXcj9zkYxYB6"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                             color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5,

                        }}>
                        Non-binding Interest Form
                    </Button>
                    <Button
                        href={"https://forms.gle/if1AYZEhwTCmqu3t5"}
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
                                    fontWeight={400}>Hi everyone! My name is Julie Alan, and I’m super excited to be one of the rush chairs this semester! I’m a sophomore from Haworth, New Jersey, majoring in Public Health. I initially wasn’t sure I wanted to join AKPsi, but after coming to Meet the Brothers and talking to so many cool people, I knew I wanted to be a part of this community! I feel so lucky to have rushed, and I hope to make even more lifelong memories with everyone joining this semester!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Hi! I’m Ria and I’m a sophomore majoring in BME from Boston, Massachusetts. By joining AKPsi, I’ve really found a community here on campus and have made so many lifelong friends. From just hanging out at someone’s place to bonding with everyone at retreat, a ton of my favorite Hopkins memories are from AKPsi and I’m so glad I made the decision to rush. I’m so excited to be one of your rush chairs this semester and I’m looking forward to getting to meet you all rushing this semester!</Typography>
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
