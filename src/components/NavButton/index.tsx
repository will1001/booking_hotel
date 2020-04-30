import React from 'react'
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: 15,
      '& .MuiButton-root ,.MuiButtonBase-root': {
        color: 'white',
        backgroundcolor: 'white'
      }
    },
    link: {
      color: 'white',
      textDecoration: 'none'
    }
  })
)
const ButtonStyled = withStyles(() => ({
  root: {
    color: 'white',
    borderColor: 'white'
  }
}))(Button)

interface Props {
  children: string;
  to: string;
}

const NavButton = (props: Props) => {
  const classes = useStyles()

  return (
    <ButtonStyled
      variant="text"
      className={classes.button}
    >
      <Link className={classes.link} to={props.to}>{props.children}</Link>
    </ButtonStyled>
  )
}

export default NavButton
