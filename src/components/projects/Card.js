import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/portCard.css'
import ghLogo from '../images/ghlogosm.png'




export default function Project(props) {

    return (
        <div>    
    <Card className="card" sx={{ width: 300 , height: 300}}>
    <CardMedia
        component="img" 
        height="150"
        image={props.img}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> <a href={props.link}> live </a></Button>
        <Button size="small"> <a href={props.github}> <img src= {ghLogo} alt="gh logo" /> </a> </Button>
      </CardActions>
    </Card>

        </div>
    )
    
}