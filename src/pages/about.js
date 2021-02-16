import React from 'react'
import { Link } from 'gatsby'
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
      <Grid container spacing={3} justify="center" align="center">
        <Grid item xs={12}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">
            Deliver content to your readers faster,securely and across all
            devices on a platform that suits your every need, including your
            budget.
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <List component="nav" className={classes.root}>
        <ListItem id="features" button onClick={() => handleClick('features')}>
          <ListItemIcon>
            <StarIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Blog Features" />
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
              <Typography className={classes.heading}>Secure</Typography>
              <Typography className={classes.secondaryHeading}>
                Online security is important
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Awesome blog is well secured against random attacks from hackers
                as seen on a certain blogging platform whose name starts with
                letter W. Get in touch I might tell you who they are and how
                awesome blog overcomes these security challenges.
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
              <Typography className={classes.heading}>Speed</Typography>
              <Typography className={classes.secondaryHeading}>
                Faster Loading times
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                This blog is statically generated which makes it blazing fast
                even in slow internet connections. It also uses efficient image
                optimization technology that ensures all images are smoothly
                loaded and optimized for all screen sizes.
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
              <Typography className={classes.heading}>SEO</Typography>
              <Typography className={classes.secondaryHeading}>
                Indexed on google search
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Awesome blog has already been optimized for search engines to
                enable readers to easily find the blog site online.
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
              <Typography className={classes.heading}>
                Offline Support
              </Typography>
              <Typography className={classes.secondaryHeading}>
                For your smartphone and computer
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                The magic of this PWA blog site is that it can be installed on
                any Android, IOS or Windows platform to provide full access to
                the blog like a native application. All posts can be read
                offline and new posts are updated whenever there is an internet
                connection.
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
              <Typography className={classes.heading}>Organized</Typography>
              <Typography className={classes.secondaryHeading}>
                Categories and tags
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                All the posts are grouped into categories and also tagged with
                relevant phrases. These categories and tags organise the blog so
                you can easily get all posts in a particular category or those
                tagged with a certain phrase.
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
                What is a PWA?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                A Progressive Web App is a web application that is normally
                accessed via a web browser but has superpowers that allow it to
                be installed on almost all mobile and computer systems just like
                normal apps from Play/App Store or desktop applicatons. It also
                offers offline support among other things.
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
                How do I install a PWA like Awesome Blog?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Installing a PWA is easy. For android users on google chrome, a
                pop up should have appeared at the bottom of your screen when
                you accessed the site the first time.This{' '}
                <Link to={`/blog/installing-awesome-blog`}>
                  post on this blog
                </Link>{' '}
                shows the few installation steps for IOS Safari,Windows,
                Mac,Linux users and also android users. Uninstalling a PWA is
                similar to any other application. N/B..IOS Chrome doesnt support
                PWA technology.
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
                How Do I Migrate from my normal website to a PWA?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                Awesome blog can be customized to suit the colors and features
                you want including easily migrating all your posts and data from
                your current site. Get in touch with me through my social media
                in the menu for more info.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Collapse>
      </List>
    </Layout>
  )
}

export default About
