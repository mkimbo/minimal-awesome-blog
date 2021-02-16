import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { Facebook, Twitter, Language } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  SocialMedia: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: '15px 0',
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
      <IconButton href="https://facebook.com/Jack.robinz">
        <Facebook className={classes.Facebook} />
      </IconButton>
      <IconButton href="https://twitter.com/JackMkimbo">
        <Twitter className={classes.Twitter} />
      </IconButton>
      <IconButton href="https://jackmkimbo.netlify.app">
        <Language className={classes.Language} />
      </IconButton>
    </div>
  )
}

export default SocialMedia
