import { Box, Stack } from "@mui/system";
import BrotherCard from "./BrotherCard";
import { Grid, Typography } from "@mui/material";
import Title from "./Title";
import React from "react";

const PcSection = (props) => {
    const { brothers, pc } = props;
    const pcNames = ["Alpha Nu", "Alpha Xi", "Alpha Omicron", "Alpha Pi", "Alpha Rho", "Alpha Sigma", "Alpha Tau"];
    const pcYears = ["2021-1", "2021-2", "2022-1", "2022-2", "2023-1", "2023-2", "2024-1"];

    // Find the index of the pc in pcYears
    const pcIndex = pcYears.indexOf(pc);

    // Use the index to get the corresponding name from pcNames
    const pcName = pcNames[pcIndex] || pc;

    let pcBrothers = brothers.filter(brother => {
        // console.log(brother.pledgeClass, pc);
        return brother.pledgeClass === pc;
    });

    // console.log(pcBrothers);
    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            py={8}
        >
            <Typography variant="h4" marginBottom={3} py={4}>{pcName}</Typography>
            <Box>
                <Grid container justifyContent="center" spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
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
