import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { Facebook, Twitter, Language } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  SocialMedia: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignContent: 'center',
    alignItems: 'center',
    margin: '5px 7px',
    width: 'fit-content',
  },
  Facebook: {
    color: '#357cda',
  },
  Twitter: {
    color: '#1d07e6',
  },
  Language: {
    color: '#f30843',
  },
}))

const SocialMedia = () => {
  const classes = useStyles()
  return (
    <div className={classes.SocialMedia}>
      <IconButton>
        <a href="https://facebook.com/Jack.robinz" alt="facebook-link">
          <Facebook className={classes.Facebook} />
        </a>
      </IconButton>
      <IconButton>
        <a href="https://twitter.com/JackMkimbo" alt="twitter-link">
          <Twitter className={classes.Twitter} />
        </a>
      </IconButton>
      <IconButton>
        <a href="https://jackmkimbo.netlify.app" alt="website-link">
          <Language className={classes.Language} />
        </a>
      </IconButton>
    </div>
  )
}

export default SocialMedia
