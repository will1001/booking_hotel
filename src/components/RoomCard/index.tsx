import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      backgroundColor: 'green'
    }
  })
)

interface Props {

}

const RoomCard = (props: Props) => {
  const classes = useStyles()
  return (

    <div className={classes.root}>
      <h1>aasd</h1>
      <h1>aasd</h1>
      <h1>aasd</h1>
      <h1>aasd</h1>
    </div>

  )
}

export default RoomCard
