import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/portCard.css'




export default function Project(props) {

    return (
        <div>    
    <Card className="card" sx={{ maxWidth: 345 , maxHeight: 345}}>
    <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="primary">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.link}</Button>
        <Button size="small">{props.github}</Button>
      </CardActions>
    </Card>

        </div>
    )
    
}