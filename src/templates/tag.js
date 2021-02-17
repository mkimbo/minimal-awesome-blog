import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import PostPreview from '../components/post-preview'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const postEdges = data.allMarkdownRemark.edges
  const totalposts = data.allMarkdownRemark.totalCount
  return (
    <Layout>
      <SEO title="Blog" />
      <Grid container spacing={3} justify="center" align="center">
        <Grid item xs={12}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{`${totalposts} tagged with "${tag}"`}</Typography>
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
