import React, { useState } from 'react'
import FilterBox from '../../components/FilterBox'
import RoomCard from '../../components/RoomCard'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2)
    //   backgroundColor: 'black'
    },
    RoomContainer: {
      padding: theme.spacing(2)
    }
  })
)

interface Props {

}

const SearchRoom = (props: Props) => {
  const classes = useStyles()
  const [gridView, SetGridView] = useState(true)

  const changeView = () => {
    SetGridView(!gridView)
  }
  return (
    <div>
      <FilterBox changeView={changeView} />
      <Grid
        className={classes.RoomContainer}
        container spacing={3}>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
        <Grid item xs={gridView ? 4 : 12}>
          <RoomCard/>
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchRoom
