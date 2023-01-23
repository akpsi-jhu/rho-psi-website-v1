import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/SlideshowStyles.css";
import brotherhoodIMG from "../assets/brotherhood.png";
import professionalIMG from "../assets/social.png";
import socialIMG from "../assets/prof.png";
import groupIMG from "../assets/group.png";


export default function ImageSlideshow() {
  const fadeImages = [
    brotherhoodIMG, professionalIMG, socialIMG, groupIMG
];

  return (
      <div className="slide-container">
        <Fade arrows={false} autoplay={true} infinite={true} pauseOnHover={false} indicators={true} duration={2000} transitionDuration={2000}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} alt="slide" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} alt="slide" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} alt="slide" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} alt="slide" />
            </div>
          </div>
        </Fade>
      </div>
  );
}
