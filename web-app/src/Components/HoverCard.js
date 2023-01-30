import React from "react";
import "../styles/HoverCardStyles.scss"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Box, Stack } from "@mui/system";
import {NavLinkR} from "./Navbar/NavbarElements";



const HoverCard = ({ body, image, title }) => {
  return (
    <Box className="card" style={{ backgroundImage: `url(${image})` }} sx = {{
      width: '100%',
    }} >
      <Stack className="card__content">
        <h4 className="card__title">{title}</h4>
        <p className="card__body">{body}</p>
        <Stack direction="row" alignSelf="flex-end" alignItems="center">
            <NavLinkR
                      to="/brothers"
                // smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >
            <button className="card__button">Meet the brothers
            <ArrowForwardIosOutlinedIcon sx = {{
                fontSize: 15,
            }}></ArrowForwardIosOutlinedIcon>
            </button>
            </NavLinkR>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HoverCard
