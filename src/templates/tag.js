import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import PostPreview from '../components/post-preview'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const Tag = ({ pageContext, data }) => {
  const classes = useStyles()
  const { tag } = pageContext
  const postEdges = data.allMarkdownRemark.edges
  const totalposts = data.allMarkdownRemark.totalCount
  return (
    <Layout>
      <SEO title="Blog" />
      <Grid container spacing={3} justify="center">
        <Grid item>
          <h3>{`${totalposts} tagged with "${tag}"`}</h3>
        </Grid>
      </Grid>

      <PostPreview postEdges={postEdges} />
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
