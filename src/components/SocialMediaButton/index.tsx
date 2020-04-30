import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      '&.MuiLink-root': {
        color: 'gray'
      }
    }
  })
)

interface Props {
    icon: any;
    href: string;
}

const SocialMediaButton = (props: Props) => {
  const classes = useStyles()
  return (
    <IconButton aria-label="social Media" component="span">
      <Link className={classes.link} href={props.href} target="_blank" rel="noopener">
        <props.icon />
      </Link>
    </IconButton>
  )
}

export default SocialMediaButton
