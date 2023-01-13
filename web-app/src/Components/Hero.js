import React from "react";
import { Grid, Typography, Button, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	//	maxWidth: {md: '300px', lg: '600px'}
});

const Hero = () => {
	const navigate = useNavigate();

	const navigateNext = () => {
		navigate("/signup", { replace: true });
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
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
				<Stack spacing={2} sx = {{
                    marginBottom: 25,
                    marginLeft: 15

                }}>
                    <Stack spacing={.5} sx = {{ }}>
                        <Typography variant='h3'
                        color='white' fontFamily={"glegoo"} >
                        ALPHA KAPPA PSI at
                        </Typography>
                        <Typography
                            fontFamily={"glegoo"}
                            variant='h4'
                            fontSize={42}
                            color='white'
                            >
                                Johns Hopkins University
                        </Typography>
                    </Stack>
						<Button
							onClick={navigateNext}
							variant='outlined'
							sx={{ width: 450, fontSize: 20, padding: 1, color: 'white', borderColor: 'white', borderRadius: 85, fontFamily: "Iceland", boxShadow: 3
                        }}>
							SPRING 2023 RUSH: COMING SOON
						</Button>
				</Stack>
		</Box>
	);
};

export default Hero;
