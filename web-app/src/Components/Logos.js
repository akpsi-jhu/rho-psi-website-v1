import "../styles/LogosStyles.css"
import amazonIMG from "../assets/Logos/amazon.png";
import appleIMG from "../assets/Logos/apple.png";
import bofaIMG from "../assets/Logos/bofa.png";
import deloitteIMG from "../assets/Logos/Deloitte.png";
import googleIMG from "../assets/Logos/google.png";
import goldmanIMG from "../assets/Logos/Goldman.png";
import bainIMG from "../assets/Logos/bain.png";
import bcgIMG from "../assets/Logos/BCG.png";
import blackstoneIMG from "../assets/Logos/blackstone.png";
import bloombergIMG from "../assets/Logos/bloomberg.png";
import citadelIMG from "../assets/Logos/citadel.png";
import citiIMG from "../assets/Logos/citi.png";
import harvardIMG from "../assets/Logos/harvard.png";
import jhuIMG from "../assets/Logos/apple.png";
import jpmIMG from "../assets/Logos/jpm.png";
import mckinseyIMG from "../assets/Logos/mckinsey.png";
import metaIMG from "../assets/Logos/meta.png";
import microsoftIMG from "../assets/Logos/microsoft.png";
import morganstanleyIMG from "../assets/Logos/morganstanley.png";
import ucsfIMG from "../assets/Logos/ucsf.png";
import whartonIMG from "../assets/Logos/wharton.png";
import yIMG from "../assets/Logos/Y.png";

import { Box } from "@mui/system";


const Logos = () => {

    const speed = 30000 //higher the slower
    

    const images = [
       appleIMG, harvardIMG, goldmanIMG, googleIMG, bofaIMG, mckinseyIMG, whartonIMG, yIMG, bcgIMG, deloitteIMG, amazonIMG, bainIMG, citadelIMG, ucsfIMG, metaIMG, morganstanleyIMG, blackstoneIMG
       , bloombergIMG, jhuIMG, microsoftIMG, jpmIMG, citiIMG
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
  