import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',  
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
        <AccordionDetails style={{backgroundColor: 'rgb(19 13 31)', color: 'white)'}}>
          <Typography>Exemplo de um pequeno clone de Spotify, onde inclui Context API, Material UI, Flexbox, User Authentication e a API do Spotify.
            <br /><a href="https://spotify-clone-guilimadev.vercel.app/" target="_blank">Spotify Clone</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: 'white'}} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Hulu Clone</Typography>
          <Typography className={classes.secondaryHeading}>Curso: Sonny Sangha</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgb(19 13 31)', color: 'white)'}}>
          <Typography>Exemplo da front page do aplicativo Hulu, com integração com a API do The Movie DB. Utilização de Tailwind.css, Next.js e é completamente
            responsivo. Aplicação de Lazy Loading, Hero Icons e mais várias funções do Next.js.
            <br /><a href="https://hulu-clone-guilimadev.vercel.app/" target="_blank">Hulu Clone</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: 'white'}} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Covid Tracker</Typography>
          <Typography className={classes.secondaryHeading}>Curso: JavaScript Mastery</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgb(19 13 31)', color: 'white)'}}>
          <Typography>Covid tracker é uma aplicação que mostra as informações sobre a Covid-19 em um âmbito global como também por país. Utilização de Material UI, Axios para consumo de API
            e React Hooks.
            <br /><a href="https://covid-tracker-guilimadev.vercel.app/" target="_blank">Covid Tracker</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
         </div>
  );
}
