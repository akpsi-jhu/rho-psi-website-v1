import React, {useState} from "react";
import {Grid, Typography, Button, Box, Stack, ThemeProvider, useTheme} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar"


const Img = styled("img")({
	margin: "auto",
	display: "block",
	//	maxWidth: {md: '300px', lg: '600px'}
});

const Hero = () => {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
			setIsOpen(!isOpen)
		}
	const navigate = useNavigate();

	const navigateNext = () => {
		navigate("/recruitment", { replace: true });
	};

	const navigateRegister = () => {
		window.open("https://forms.gle/9Pgy9vX3saK38N239");
	};

	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				minHeight: "600px",
				alignItems: "end",
               // backgroundImage: `url(${hero})`,
				//backgroundRepeat: "no-repeat",
				//backgroundSize: "cover",
				width: "100vw",
				maxWidth: 1920,
			}}>

				
				<Stack spacing={2} sx = {{
                    marginBottom: 22,
                    marginLeft: {xs: 4, sm: 4, md: 5, lg: 10, xl: 20}

                }}>
                    <Stack spacing={.5} sx = {{ }}>
                        <Typography variant='h3' fontSize={{xs: '8vw', sm: 40, md: 50, lg: 50, xl: 50}}
                        color='white' fontFamily={"glegoo"} >
                        ALPHA KAPPA PSI at
                        </Typography>
                        <Typography
                            fontFamily={"glegoo"}
                            variant='h4'
                            fontSize={{xs: '6vw', sm: 30, md: 37, lg: 37, xl: 37}}
                            color='white'
                            >
                                Johns Hopkins University
                        </Typography>
                    </Stack>
						<Button
							onClick={navigateNext}
							variant='outlined'
							sx={{  width: {xs: '80vw', sm: 450, md: 450}, fontSize: 20, padding: 1, color: 'white', borderColor: 'white', borderRadius: 85, fontFamily: "Iceland", boxShadow: 3
                        }}>
							SPRING 2023 RUSH
						</Button>
				</Stack>
		</Box>
	);
};

export default Hero;
