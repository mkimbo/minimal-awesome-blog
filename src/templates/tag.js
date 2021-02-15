import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostPreview from '../components/post-preview'

import Grid from '@material-ui/core/Grid'

const Tag = ({ pageContext, data }) => {
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
