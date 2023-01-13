import { Icon } from "@mui/material";
import React from "react";
import "../styles/HoverCardStyles.scss"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Stack } from "@mui/system";



const HoverCard = ({ body, image, title }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <Stack className="card__content">
        <h4 className="card__title">{title}</h4>
        <p className="card__body">{body}</p>
        <Stack direction="row" alignSelf="flex-end" alignItems="center">
            <button className="card__button">Meet the brothers
            <ArrowForwardIosOutlinedIcon sx = {{
                fontSize: 15,
            }}></ArrowForwardIosOutlinedIcon>
            </button>
        </Stack>
      </Stack>
    </div>
  );
};

export default HoverCard
