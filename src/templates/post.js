import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

import Divider from '@material-ui/core/Divider'

import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import PostBanner from '../components/post-banner'
import SEO from '../components/seo'
import PostInfo from '../components/post-info'
import PostTags from '../components/post-tags'
import ShareLinks from '../components/share-links'
import PostSuggestions from '../components/post-suggestions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  postBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
}))
const Post = ({ pageContext, data }) => {
  const classes = useStyles()
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  const disqusConfig = {
    shortname: 'okblog-1', //your site shortname here
    config: { identifier: slug, title: post.title },
  }

  return (
    <Layout>
      <SEO title={post.title} />
      <Grid>
        <div className={classes.postBanner}>
          <PostBanner filename={post.cover} alt={post.title} />
        </div>
        <div className={classes.postBody}>
          <Typography variant="h4">{post.title}</Typography>
          <PostInfo postNode={postNode} />
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <PostTags tags={post.tags} />
          <ShareLinks postPath={slug} postNode={postNode} />
          <PostSuggestions
            prevSlug={prevslug}
            prevTitle={prevtitle}
            nextSlug={nextslug}
            nextTitle={nexttitle}
          />
        </div>
        <Divider />
        <DiscussionEmbed {...disqusConfig} />
      </Grid>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`
