import React, { useState } from 'react'
import FilterBox from '../../components/FilterBox'
import RoomCard from '../../components/RoomCard'
import RoomCardListView from '../../components/RoomCardListView'
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

const SearchRoom = () => {
  const classes = useStyles()
  const [ViewMode, SetViewMode] = useState('list')

  const changeView = (view: string) => SetViewMode(view)

  return (
    <div>
      <FilterBox changeView={changeView} />
      <Grid
        className={classes.RoomContainer}
        container spacing={3}>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
        <Grid item xs={ViewMode === 'grid' ? 4 : 12}>
          {ViewMode === 'grid' ? <RoomCard/> : <RoomCardListView/>}
        </Grid>
      </Grid>
    </div>
  )
}

export default SearchRoom
