import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RoomCard from '../RoomCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    //   backgroundColor: 'black'
    }
  })
)

interface Props {

}

const OurRoomSection = (props: Props) => {
  const classes = useStyles()
  return (
    <Grid
      className={classes.root}
      container
      spacing={3}
    >

      <Grid item xs={12} >
        <h1>Our Rooms</h1>
      </Grid>

      <Grid item xs={4} >
        <RoomCard />
      </Grid>

      <Grid item xs={4}>
        <RoomCard />
      </Grid>

      <Grid item xs={4}>
        <RoomCard />
      </Grid>

    </Grid>
  )
}

export default OurRoomSection
