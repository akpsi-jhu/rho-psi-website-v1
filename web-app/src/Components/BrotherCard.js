import {Card, CardContent, CardMedia, Typography} from "@mui/material";

function Description(props) {
    if (props.display == "major") {
        const firstMajor = props.brother.majors.split(',')[0];
        return <Typography sx ={{ display: 'inline-block', fontSize: '14px' }} variant="body">
            {firstMajor}
        </Typography>
    } else if (props.display == "position") {
        return <Typography sx ={{ display: 'inline-block', fontSize: '14px' }} variant="body">
            {props.brother.position}
        </Typography>
    }
}

function Year(props) {
    if (props.year) {
        return <Typography sx={{display: 'inline-block', fontSize: '14px'}} variant="body">
            {props.brother.graduationYear} 
        </Typography>
    }
}

const BrotherCard = (props) => {
    const {brother, display="major", year=true} = props;
    return (
        <Card sx={{boxShadow: "none"}}>
            <CardMedia sx={{height: 300, width: "100%", padding: 0}} component="img" image={brother.headshotImageUrl}/>
            <CardContent>
                <div>
                    <Typography sx={{fontWeight: "bold", display: 'inline-block'}} variant="body">
                        {brother.firstName} {brother.lastName}
                    </Typography>
                </div>
                <div>
                    <Description brother={brother} display={display} />
                </div>
                <div>
                    <Year brother={brother} year={year} />
                </div>

            </CardContent>
        </Card>
    );
};

export default BrotherCard;