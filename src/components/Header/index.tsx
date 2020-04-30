import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import NavButton from '../NavButton'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0px 0px',
      transition: '1s',
      zIndex: 1
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      '& div': {
        margin: '0px 30px'
      }
    },
    logo: {
      display: 'flex',
      margin: '0px 50px'
    }

  })
)

interface Props{
  fixed: boolean;
  bg: string;
}

const Header = (props: Props) => {
  const [bgColor, setBgColor] = useState('')

  const handleScroll = () => {
    window.scrollY >= 650 ? setBgColor('black') : setBgColor(props.bg)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    setBgColor(props.bg)
  }, [props.bg])

  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.root}
          style={{
            position: (props.fixed ? 'fixed' : 'unset'),
            backgroundColor: bgColor
          }}
        >
          <div className={classes.logo}>
            <h3>React Hotels</h3>
          </div>
          <div className={classes.menu}>
            {/* <div><Link className={classes.link} to="/">Home</Link></div> */}
            {/* <div><Link className={classes.link} to="/search">Rooms</Link></div> */}
            {/* <div>home</div> */}
            {/* <div>home</div> */}
            {/* <div>home</div> */}
            <NavButton to='/'>Home</NavButton>
            <NavButton to='/search'>Rooms</NavButton>
          </div>
        </div>
      </Grid>

    </Grid>
  )
}

export default Header
