import {Box, Stack} from "@mui/system";
import BrotherCard from "./BrotherCard";
import {Grid, Typography} from "@mui/material";
import Title from "./Title";
import React from "react";

const PcSection = (props) => {
    const {brothers, pc} = props;
    let pcBrothers = brothers.filter(brother => {
        return brother.pledgeClass == pc;
    })

   // console.log(pcBrothers)
    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            py = {8}
        >
            <Typography variant="h4" marginBottom={3} py={4}>{pc}</Typography>
            <Box>
                <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16}}>
                    {pcBrothers.map((brother, index) => (
                        <Grid item xs={2} sm={4} md={4} lg={4} key={index}>
                            <BrotherCard
                                brother={brother}
                                key={index}
                            ></BrotherCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
};

export default PcSection;