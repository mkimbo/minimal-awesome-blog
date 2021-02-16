import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Typewriter from '../components/typewriter'
import SocialMedia from '../components/social-media'

import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const IndexPage = () => {
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
          <Typography variant="h4">Awesome Blog</Typography>
          <Typewriter />
          <SocialMedia />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
