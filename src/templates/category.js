import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostPreview from '../components/post-preview'

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

const Category = ({ pageContext, data }) => {
  const classes = useStyles()
  const { category } = pageContext
  const postEdges = data.allMarkdownRemark.edges
  const totalposts = data.allMarkdownRemark.totalCount
  return (
    <Layout>
      <SEO title="Blog" />
      <Grid container spacing={3} justify="center">
        <Grid item>
          <h3>{`${totalposts} categorized under ${category}`}</h3>
        </Grid>
      </Grid>

      <PostPreview postEdges={postEdges} />
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
