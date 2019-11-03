import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter, Switch, Route, Link as RouterLink} from "react-router-dom";

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import ToggleTheme from './ToggleTheme';

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'

import Container from '@material-ui/core/Container';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from '@material-ui/core/Paper';

import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

library.add(fab)

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  footer: {
    position: 'fixed',
    width: '100%',
    bottom: 0
  }
}));

function App() {
  const classes = useStyles();

  const [theme, setTheme] = useState('light');

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, tabIndex) => {
    setTabIndex(tabIndex);
  };

  const muiTheme = createMuiTheme({
    palette: {
      type: theme
    }
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light'
      ? 'dark'
      : 'light'
    setTheme(newTheme)
  }

  return (<ThemeProvider theme={muiTheme}>
    <Container maxWidth="sm" className={classes.root}>

      <ToggleTheme theme={theme} onToggleTheme={toggleTheme}/>

      <div>

        <BrowserRouter>
          <Button component={RouterLink} color="primary" to="/">home</Button>
          <Button component={RouterLink} color="primary" to="/about">about</Button>
          <Button component={RouterLink} color="primary" to="/skills">skills</Button>
          <Button component={RouterLink} color="primary" to="/contact">contact</Button>
          <Button component={RouterLink} color="primary" to="/projects">projects</Button>

          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>

      <div className={classes.footer}>

        <Typography component="h6" variant="h6">
          made with
          <FavoriteIcon/>
          in react
        </Typography>

      </div>

    </Container>

  </ThemeProvider>);
}

export default App;
