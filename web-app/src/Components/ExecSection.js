import {Box, Stack} from "@mui/system";
import BrotherCard from "./BrotherCard";
import {Grid, Typography} from "@mui/material";
import Title from "./Title";
import React from "react";

const ExecSection = (props) => {
    const {brothers, pc} = props;
    let pcBrothers = brothers.filter(brother => {
        return brother.position; // This will include brothers whose 'position' is neither null, undefined, nor an empty string
    })
    
    // sort by position name
    pcBrothers = pcBrothers.sort((a, b) => {
        return a.position.localeCompare(b.position)});

    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            py = {8}
        >
            <Typography variant="h4" marginBottom={3} py={4}>Executive Board</Typography>
            <Box>
                <Grid justifyContent="center" container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 9, md: 24, lg: 24}}>
                    {pcBrothers.map((brother, index) => (
                        <Grid item xs={2} sm={3} md={4} lg={4} key={index}>
                            <BrotherCard
                                brother={brother}
                                key={index}
                                display={"position"}
                                year = {false}
                            ></BrotherCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
};

export default ExecSection;