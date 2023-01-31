import "../styles/Image.css";
import {Box} from "@mui/system";

const ImageBox = (props) => {
    return (
        <Box
            pl={{lg:5}}
            className="container"
            maxHeight={{xs: "75vh", sm: "75vh", md: "75vh", lg: "65vh", xl: "60vh"}}
            width={{xs: "115%", sm: "300%", md: "300%", lg: "160%", xl: "150%", xxl: "125%"}}
            maxWidth={{sm: "100vw", md: "60vw"}}>
            <img className="container" src={props.src} alt=""/>
        </Box>
    );
};

export default ImageBox;