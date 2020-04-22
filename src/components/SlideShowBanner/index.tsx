/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CheckAvailability from '../CheckAvailability'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    slideshow: {
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'grey',
      minHeight: '100vh',
      maxWidth: '100%',
      '& img': {
        width: '100%',
        height: '100%'
      }
    },
    CheckAvailabilityBox: {
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      position: 'absolute',
      display: 'flex',
      justifyContent
      top: 0

    }
  })
)

interface Props {

}

const SlideShowBanner = (props: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <Paper className={classes.slideshow}>
            <img src="https://cdn.idntimes.com/content-images/community/2020/03/230556-0f1177963ba6ed033faf9a2152b5ae08_600x400.jpg" alt="" />
            <div className={classes.title}>
              <h1>title</h1>
            </div>
            <div className={classes.CheckAvailabilityBox}>
              <CheckAvailability />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default SlideShowBanner
