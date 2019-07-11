import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  
  maindiv: {

    flexGrow: 1,
  },
  paperStyle: {
    borderBottom: '2px solid red',
    maxWidth: '85vw',
    padding: theme.spacing(3),
    margin: 'auto',
    marginBottom: 20,
    
  },
  image: {
    width: 200,
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    verticalAlign: 'top'
  },


  title: {
    fontWeight: 'bold',
  }

})
);

const Article = (props) => {
  const classes = useStyles();

  return (
   
    <div className={classes.maindiv }>

      <Grow direction="up" in={true} mountOnEnter unmountOnExit timeout={500}>
       
        <Paper className={classes.paperStyle}>
         
          <Grid container spacing={3}>

            <Grid item>
            <a href={props.item.url} >
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={props.item.title} src={props.item.urlToImage} />
              </ButtonBase>
              </a>
            </Grid>

            <Grid item xs={12} sm container>
              <Grid item xs={9}>
              <a href={props.item.url} >
                <Typography className={classes.title}>
                  {props.item.title}
                </Typography>
              </a>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="body2" style={{ textAlign: "right", overflow: "hidden" }}>
                  {props.item.author &&
                    <React.Fragment>Author: {props.item.author}</React.Fragment>
                  }
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body2">
                  {props.item.content}
                </Typography>
              </Grid>

            </Grid>

          </Grid>
        </Paper>
      </Grow>
      
    </div>
    
  )
}

export default Article