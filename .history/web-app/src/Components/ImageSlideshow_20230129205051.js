import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/SlideshowStyles.css";
import brotherhoodIMG from "../assets/brotherhood.png";
import professionalIMG from "../assets/social.png";
import socialIMG from "../assets/prof.png";
import groupIMG from "../assets/group.png";
import { Box } from "@mui/system";


export default function ImageSlideshow() {
  const fadeImages = [
    brotherhoodIMG, professionalIMG, socialIMG, groupIMG
];

  return (
      <Box className="slide-container" maxWidth={{xs: '80vw', sm: '80vw', md: '60vw', lg: '50vw', xl: '60vw'}} width="300%">
        <Fade arrows={false} autoplay={true} infinite={true} pauseOnHover={false} indicators={true} duration={2000} transitionDuration={2000}>
          <Box className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} alt="slide" />
            </div>
          </Box>
          <Box className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} alt="slide" />
            </div>
          </Box>
          <Box className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} alt="slide" />
            </div>
          </Box>
          <Box className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} alt="slide" />
            </div>
          </Box>
        </Fade>
      </Box>
  );
}
