import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'

const useStyles = makeStyles((theme) => ({
  SocialLinks: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: '15px 0',
  },
}))
const ShareLinks = ({ postPath, postNode }) => {
  const classes = useStyles()
  const post = postNode.frontmatter
  return (
    <div className={classes.SocialLinks}>
      <WhatsappShareButton
        url={`https://awesome-blog.netlify.app${postPath}`}
        title={`Check out this awesome post: ${post.title}`}
      >
        <WhatsappIcon round size={36} />
      </WhatsappShareButton>
      <TwitterShareButton
        url={`https://awesome-blog.netlify.app${postPath}`}
        title={`Check out this awesome post: ${post.title}`}
      >
        <TwitterIcon round size={36} />
      </TwitterShareButton>
      <FacebookShareButton
        url={`https://awesome-blog.netlify.app${postPath}`}
        quote={postNode.excerpt}
      >
        <FacebookIcon round size={36} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={`https://awesome-blog.netlify.app${postPath}`}
        title={`Check out this awesome post: ${post.title}`}
        description={postNode.excerpt}
      >
        <LinkedinIcon round size={36} />
      </LinkedinShareButton>
      <TelegramShareButton url={`https://awesome-blog.netlify.app${postPath}`}>
        <TelegramIcon round size={36} />
      </TelegramShareButton>
      <RedditShareButton
        url={`https://awesome-blog.netlify.app${postPath}`}
        title={`Check out this awesome post: ${post.title}`}
      >
        <RedditIcon round size={36} />
      </RedditShareButton>
    </div>
  )
}

export default ShareLinks
