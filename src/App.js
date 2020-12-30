import './App.css';
import {Container, Paper, Box, Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles'
import Theme from './Theme'


const useStyles = makeStyles((theme) =>({
  root: {
    width:"100vw",
    height:"100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(5)
    
  },
  mr:{
    marginRight:theme.spacing(2),
  }
}));
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.root}>
      <Paper 
      component={Box}
      textAlign="left"
      width="30%"
      p={3}
      mx="auto"
      >
      <Typography variant="h5" color="primary">Nodejs Latest Feature</Typography>
       <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quis. Nostrum vitae, facilis nisi iste explicabo enim soluta fuga, illum consequatur aspernatur at vel veritatis quidem recusandae aliquam sit quas.</Typography>
       <Button variant="contained" color="primary" className={classes.mr}>Read More</Button>
       <Button variant="contained" color="secondary">Share Post</Button>
      </Paper>
    </Container>
    </ThemeProvider>
  );
}

export default App;
