import {Card, CardContent, CardMedia, Typography} from "@mui/material";

function Description(props) {
    if (props.display == "major") {
        return <Typography sx ={{ display: 'inline-block', fontSize: '14px' }} variant="body">
            {props.brother.majors[0]}
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
            {(new Date(props.brother.graduationDate.toMillis())).getFullYear()}
        </Typography>
    }
}

const BrotherCard = (props) => {
    const {brother, display="major", year=true} = props;
    return (
        <Card sx={{boxShadow: "none"}}>
            <CardMedia sx={{height: 300, width: "100%", padding: 0}} component="img" image={brother.imageUrl}/>
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