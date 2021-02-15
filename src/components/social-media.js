import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { Facebook, Twitter, Instagram } from '@material-ui/icons'

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
  Instagram: {
    color: '#f30843',
  },
}))

const SocialMedia = () => {
  const classes = useStyles()
  return (
    <div className={classes.SocialMedia}>
      <IconButton>
        <Facebook className={classes.Facebook} />
      </IconButton>
      <IconButton>
        <Twitter className={classes.Twitter} />
      </IconButton>
      <IconButton>
        <Instagram className={classes.Instagram} />
      </IconButton>
    </div>
  )
}

export default SocialMedia
