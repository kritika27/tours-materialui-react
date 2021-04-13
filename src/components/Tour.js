    import React, { useState } from "react";
    import { makeStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardActionArea from '@material-ui/core/CardActionArea';
    import CardActions from '@material-ui/core/CardActions';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Button from '@material-ui/core/Button';
    import Typography from '@material-ui/core/Typography';
    
export default function Tour({ handleDelete, id, image, info, name, price }) {
  const [toggle, setToggle] = useState(false);
  
  const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      align:"center",
    },
    media: {
      height: 240,
    },
  });    
  const classes = useStyles();
      return (
        <Card className={classes.root} >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               
                {toggle && info}
        {!toggle && info.substring(0, 250)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           {!toggle ? (
         <Button onClick={() => setToggle(!toggle)} size="small" color="primary">
              Read More
            </Button>
      ) : (
       <Button onClick={() => setToggle(!toggle)} size="small" color="primary">
              Show Less
            </Button>
      )}
           
            <Button size="small" color="primary"  onClick={() => handleDelete(id)}>
              Remove
            </Button>
          </CardActions>
        </Card>
      );
    }
    