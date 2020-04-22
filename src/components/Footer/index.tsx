import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
      color: 'white',
      flexGrow: 1

    }
  })
)

interface Props {

}

const Footer = (props: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <h1>Contact Us:</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>follow Us:</h1>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
