import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2)

    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      '& div': {
        margin: theme.spacing(2)
      }
    },
    logo: {
      display: 'flex'
    }
  })
)

interface Props {

}

const Header = (props: Props) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}>
          <div className={classes.logo}>
            <h1>Logo:</h1>
          </div>
          <div className={classes.menu}>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/search">Rooms</Link></div>
            {/* <div>home</div> */}
            {/* <div>home</div> */}
            {/* <div>home</div> */}
          </div>
        </div>
      </Grid>

    </Grid>
  )
}

export default Header
