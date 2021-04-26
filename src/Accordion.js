import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',  
    backgroundColor: 'rgb(11, 4, 19)', 
    color: 'white',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    
  }, 
  accordion: {
    width: '100%',  
    backgroundColor: 'rgb(11, 4, 19)', 
    color: 'white',
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: 'white'}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Spotify Clone</Typography>
          <Typography className={classes.secondaryHeading}>Curso: Clever Programming</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'white', color: 'rgb(11, 4, 19)'}}>
          <Typography>Exemplo de um pequeno clone de Spotify, onde inclui Context API, Material UI, Flexbox, User Authentication e a API do Spotify.
            <br /><a href="https://spotify-clone-guilimadev.vercel.app/" target="_blank">Spotify Clone</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
         </div>
  );
}
