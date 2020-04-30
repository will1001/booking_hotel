import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SocialMediaButton from '../SocialMediaButton'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'black',
      color: 'white',
      flexGrow: 1,
      marginTop: 35,
      padding: 20,
      textAlign: 'left'
    },
    columnContainer: {
      '& div': {
        color: 'gray'
      }
    },
    itemRight: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  })
)

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={5} className={classes.columnContainer}>
          <h3>Contact Us:</h3>
          <div>reacthotels@travel.com</div>
          <div>+62 817 0399 9567</div>
        </Grid>
        <Grid item xs={12} md={5}>
          <h3>follow Us:</h3>
          <SocialMediaButton icon={FacebookIcon} href="https://www.fb.com"/>
          <SocialMediaButton icon={TwitterIcon} href="https://www.twitter.com"/>
          <SocialMediaButton icon={InstagramIcon} href="https://www.instagram.com"/>
          <SocialMediaButton icon={YouTubeIcon} href="https://www.youtube.com"/>
        </Grid>
        <Grid item xs={12} md={2} className={`${classes.columnContainer} `}>
          <h3>Help:</h3>
          <div>Help Center</div>
          <div>FAQs</div>
          <div>Terms of use</div>
          <div>Privacy Policy</div>
          <div>Cookie policy</div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
