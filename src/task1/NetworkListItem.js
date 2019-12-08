import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  card: {
    width: 350,
    height:600,
    maxHeight:600,
    maxWidth: 350,
    margin:20,
    borderRadius: '30px',
    
  },
  actionArea: {
    width: 350,
    height:600,
  },
  img: {
    position:"absolute",
    top: '5%',
    left:'35%',
    right:'25%',
    width: 100,
    height: 100,
    borderRadius: '50%', 
  },

  typo:{
    
    paddingTop: 5,
    paddingBottom: 5,
    // maxWidth:'80%',
    // marginLeft:30,
    // marginTop:70,
  },
  // cardContentClass: {
  //   maxWidth: '70%',
    
  // },
  button: {
    position:"absolute",
    top:'880px',
    left:'44%',
    border: 'solid white 1px',
    padding:0,
    borderRadius: '30px',

  }
});

// network card bluePrint

export default function NetworkListItem(props) {
  const classes = useStyles();

  const styleBG = {
    background: `url('${props.network.backgroundImageUrl}')`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: 350,
    height:600,
    
  };


  //card logic 
  function handleClickOpen() {
    console.log('clicked => ' + props.network.guid)
       
  }

  //render results 

  return (
    <Card
      className={classes.card}
      style={styleBG}
      onClick={() => handleClickOpen()}>
      <CardActionArea className={classes.actionArea}> 
        <CardMedia
          className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          image={props.network.imageUrl}
          title={props.network.imageUrl}
        />
        <CardContent className={classes.cardContentClass}>
          <Typography className={classes.typo} variant="h5" style={{color: 'white'}} component="h2" align="center">
            {props.network.name}
          </Typography>
          <Typography className={classes.typo} variant="caption" style={{color: 'white'}}  component="h6" align="center">
            {props.network.guid}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
            align="center"
            className={classes.typo}
            style={{color: 'white'}} 
          >
            {props.network.description}
          </Typography>
        </CardContent>
       
      
      </CardActionArea>
      {/* <CardActions > */}
      <Button className={classes.button} size="small" color="primary" 
          style={{color: 'white'}}>
          open
        </Button>
      {/* </CardActions> */}
    </Card>
  );
}
