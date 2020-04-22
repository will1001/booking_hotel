/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'aqua',
      height: 100,
      width: 400,
      position: 'absolute',
      bottom: 50
    }
  })
)

interface Props {

}

const CheckAvailability = (props: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    </div>
  )
}

export default CheckAvailability
