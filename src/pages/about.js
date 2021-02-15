import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50.33%',
    flexShrink: 0,
  },
  faqHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '80.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))
const About = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [faqs, setFaqs] = React.useState(true)
  function handleClick(id) {
    switch (id) {
      case 'features':
        setFeatures(!features)
        break
      case 'faqs':
        setFaqs(!faqs)
        break
      default:
    }
  }
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Layout>
      <SEO title="About" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h5>
            Hyblog is part of the Hyreads platform and this page briefly
            explains all the features of Hyreads including this blog for
            informational purposes.
          </h5>
        </Grid>
      </Grid>
      <Divider />
      <List component="nav" className={classes.root}>
        <ListItem id="features" button onClick={() => handleClick('features')}>
          <ListItemIcon>
            <StarIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Hyreads Features" />
          {features ? (
            <ExpandMore color="primary" />
          ) : (
            <ExpandLess color="primary" />
          )}
        </ListItem>
        <Collapse in={!features} timeout="auto" unmountOnExit>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Discourse</Typography>
              <Typography className={classes.secondaryHeading}>
                Share and Broadcast Ideas
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.Nulla
                facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.Nulla facilisi.
                Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>ChatRoom</Typography>
              <Typography className={classes.secondaryHeading}>
                Connect with your contacts
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.Donec placerat, lectus sed mattis
                semper, neque lectus feugiat lectus, varius pulvinar diam eros
                in elit. Pellentesque convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>Creators</Typography>
              <Typography className={classes.secondaryHeading}>
                Express your ideas with creativity
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>Journals</Typography>
              <Typography className={classes.secondaryHeading}>
                Read on from the greatest philosophers
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography className={classes.heading}>Hyblog</Typography>
              <Typography className={classes.secondaryHeading}>
                well, this is this
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue..
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Collapse>
        <ListItem button onClick={() => handleClick('faqs')}>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="FAQs" />
          {faqs ? (
            <ExpandMore color="primary" />
          ) : (
            <ExpandLess color="primary" />
          )}
        </ListItem>
        <Collapse in={!faqs} timeout="auto" unmountOnExit>
          <Accordion
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography className={classes.faqHeading}>
                What is the purpose of the Hyreads platform?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.Nulla
                facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.Nulla facilisi.
                Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel7'}
            onChange={handleChange('panel7')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography className={classes.faqHeading}>
                How Do I Sign Up for Hyreads?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.Nulla
                facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.Nulla facilisi.
                Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel8'}
            onChange={handleChange('panel8')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8bh-content"
              id="panel8bh-header"
            >
              <Typography className={classes.faqHeading}>
                How Do I Subscribe to the Hyreads Blog Updates?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.Nulla
                facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.Nulla facilisi.
                Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Collapse>
      </List>
    </Layout>
  )
}

export default About
