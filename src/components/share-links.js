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
  return (
    <div className={classes.SocialLinks}>
      <WhatsappShareButton
        url={`https://minimal-awesome-blog.netlify.app`}
        title={`Check out this awesome blog created by Jack`}
      >
        <WhatsappIcon round size={36} />
      </WhatsappShareButton>
      <TwitterShareButton
        url={`https://minimal-awesome-blog.netlify.app`}
        title={`Check out this awesome blog created by Jack`}
      >
        <TwitterIcon round size={36} />
      </TwitterShareButton>
      <FacebookShareButton
        url={`https://minimal-awesome-blog.netlify.app`}
        quote={`Check out this awesome blog created by Jack`}
      >
        <FacebookIcon round size={36} />
      </FacebookShareButton>
      <LinkedinShareButton
        url={`https://minimal-awesome-blog.netlify.app`}
        title={`Check out this awesome blog`}
        description={`It was created by Jack`}
      >
        <LinkedinIcon round size={36} />
      </LinkedinShareButton>
      <TelegramShareButton url={`https://minimal-awesome-blog.netlify.app`}>
        <TelegramIcon round size={36} />
      </TelegramShareButton>
      <RedditShareButton
        url={`https://minimal-awesome-blog.netlify.app`}
        title={`Check out this awesome blog created by Jack`}
      >
        <RedditIcon round size={36} />
      </RedditShareButton>
    </div>
  )
}

export default ShareLinks
