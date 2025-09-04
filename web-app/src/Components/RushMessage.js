import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import rushChairIMG from "../assets/RushChairsFall2025.png";
import ImageBox from "./ImageBox";

const RushMessage = () => {
	return (
        <Stack spacing={8} >
            <Stack spacing={3}>
                              <Button
                        href={"https://docs.google.com/forms/d/e/1FAIpQLScsmJPT5l4XvycBIF6ZP-8mlkTnhVmS1kpQn_PHQBf6xKLABw/viewform"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                             color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5,
                        }}>
                        Non-binding Interest Form
                    </Button>
                    <Button
                        href={"https://docs.google.com/forms/d/e/1FAIpQLSdF1Ps6sBavdxlI8Ieshh5_MnKDnnpp7X8ugreWKbkFuPDPJA/viewform"}
                        target={"_blank"}
                        variant="outlined"
                        sx={{
                            color: "#0C406F", borderColor: "#0C406F", borderRadius: 20, paddingY: 1.5,
                        }}>
                        Sign Up for Coffee Chats
                    </Button>
                    <Button    
                        href={"https://web.groupme.com/join_group/109515248/Z1ME1DPB"}
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
                                    fontWeight={400}>Hey everyone! I’m Sofia, a junior studying Economics, and I rushed AKPsi last fall where I met some of my closest friends. I love how AKPsi brings together people from different backgrounds and has pushed me to explore professionally by learning from so many around me. I took on the role of Rush Chair because I want to help AKPsi continue to grow and make the process as smooth and fun as it was for me. Can’t wait to meet you all soon!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Hey guys! My name is Martin Hilser, and I’m excited to meet all of you as a Rush Chair this semester! I’m a senior studying Molecular and Cellular Biology, and I grew up in Ellicott City, Maryland. Through AKPsi, I have been lucky to meet so many lively and motivated people who have become some of my best friends, and so I am grateful for this opportunity to give back to AKPsi, and to help it continue to grow. I can’t wait to meet you guys, and to give you the same amazing rush experience I had!</Typography>
                        <Typography variant="h7" fontFamily="" lineHeight={1.5} fontSize={{xs: 16, md: 16, lg: 16}}
                                    fontWeight={400}>Our advice for rush would be to have fun with the process, be yourself, and remember it’s also about seeing if we’re the right fit for you. We’re just as excited to meet you as you are to meet us!</Typography>
                    </Stack>
                </Stack>
                <ImageBox src={rushChairIMG}/>
            </Stack>
            </Stack>

        </Stack>
	);
};

export default RushMessage;
