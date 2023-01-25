import "../styles/LogosStyles.css"
import amazonIMG from "../assets/amazon.png";
import appleIMG from "../assets/apple.png";
import bofaIMG from "../assets/bofa.png";
import deloitteIMG from "../assets/deloitte.png";
import googleIMG from "../assets/google.png";
import goldmanIMG from "../assets/goldman.png";
import { Box } from "@mui/system";


const Logos = () => {

    const speed = 10000 //higher the slower
    

    const images = [
      amazonIMG, appleIMG, bofaIMG, deloitteIMG, googleIMG, goldmanIMG
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));

    return (
      <Box className="inner">
        <Box className="wrapper">
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
        </Box>
      </Box>
    );
  };
  
  export default Logos;
  