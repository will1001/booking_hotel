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
  icon: any;
  children: string;
}

const ButtonWithIcon = (props: Props) => {
  const classes = useStyles()

  return (
    <ButtonStyled
      variant="outlined"
      className={classes.button}
      endIcon={<props.icon />}
    >
      <Link className={classes.link} to="/search">{props.children}</Link>
    </ButtonStyled>
  )
}

export default ButtonWithIcon
