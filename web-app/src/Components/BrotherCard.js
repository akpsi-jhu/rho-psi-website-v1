import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const BrotherCard = (props) => {
    const {brother, key} = props;
    return (
        <Card sx = {{boxShadow: "none"}}>
            <CardMedia sx={{ height: 350, width: "110%"  }} component="img" image={brother.imageUrl}/>
            <CardContent>
                <div>
                    <Typography sx ={{ fontWeight: "bold", display: 'inline-block'}} variant="body">
                        {brother.firstName} {brother.lastName}
                    </Typography>
                </div>
                <div>
                    <Typography sx ={{ display: 'inline-block' }} variant="body">
                        {brother.majors.join(', ')}
                    </Typography>
                </div>
                <div>
                    <Typography sx ={{ display: 'inline-block' }} variant="body">
                        {(new Date(brother.graduationDate.toMillis())).getFullYear()}
                    </Typography>
                </div>

            </CardContent>
        </Card>
    );
};

export default BrotherCard;