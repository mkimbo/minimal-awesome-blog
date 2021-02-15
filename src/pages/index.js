import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Typewriter from '../components/typewriter'
import SocialMedia from '../components/social-media'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center" align="center">
        <Grid item xs={10}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h3">Awesome Blog</Typography>
          <Typewriter />
          <SocialMedia />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage