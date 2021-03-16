import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../App.css'

const useStyles = makeStyles({
    root: {
      width:500,
      margin: 'auto',
      marginTop: 35,
      marginBottom:35,
      backgroundColor: '#f8f8f8'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  


const QuestionCard = () => {
    const classes = useStyles();

    
    return (
            <div className='card' >
            <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          askedby
        </Typography>
        <Typography variant="h5" component="h2">
          Title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          dated
        </Typography>
        <Typography variant="body2" component="p">
          question
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='secondary' size="small">see more</Button>
      </CardActions>
    </Card>
    </div>
    )
}

export default QuestionCard




