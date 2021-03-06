import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

import PostCover from '../components/post-cover'
import PostTags from '../components/post-tags'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
    margin: 'auto',
    marginBottom: '50px',
    backgroundColor: '#fff',
    display: 'grid',
    padding: '3px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  actionArea: {
    height: '90%',
  },
  imagePreview: {
    width: '100%',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}))

const PostPreview = ({ postEdges }) => {
  const classes = useStyles()
  return (
    <div>
      {postEdges.map((post) => (
        <Card className={classes.root} key={post.node.id} raised>
          <Link to={`/blog${post.node.fields.slug}`}>
            <CardActionArea>
              <PostCover
                className={classes.imagePreview}
                filename={post.node.frontmatter.cover}
                alt={post.node.frontmatter.title}
              />
              <Typography
                variant="h5"
                component="h3"
                color="primary"
                className={classes.title}
              >
                {post.node.frontmatter.title}
              </Typography>
            </CardActionArea>
          </Link>
          <div
            className="snippet"
            dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
          />
          <PostTags tags={post.node.frontmatter.tags} />
        </Card>
      ))}
    </div>
  )
}

export default PostPreview
