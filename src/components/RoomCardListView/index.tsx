import React from 'react'
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
// import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import Tooltip from '@material-ui/core/Tooltip'
import PoolIcon from '@material-ui/icons/Pool'
import KingBedIcon from '@material-ui/icons/KingBed'
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    media: {
      height: 100,
      width: 100
      // paddingTop: '56.25%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  })
)

const StyledRating = withStyles({
  iconFilled: {
    color: 'gray'
  }

})(Rating)

interface Props {

}

const RoomCard = (props: Props) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (

    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image="https://pix10.agoda.net/hotelImages/642/6429894/6429894_19010916340071180658.jpg?s=1024x768"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aliquid deleniti assumenda nisi exercitationem consequatur inventore libero placeat vel asperiores! Accusantium reprehenderit architecto ab doloribus est hic magnam consequuntur quibusdam?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="share">
          <Tooltip title="Swimming Poll" aria-label="Swimming Poll">
            <PoolIcon />
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="King Bed" aria-label="King Bed">
            <KingBedIcon />
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="Smoking Room" aria-label="Smoking Room">
            <SmokingRoomsIcon />
          </Tooltip>
        </IconButton>
        <IconButton aria-label="share">
          <Tooltip title="Bike Rental" aria-label="Bike Rental">
            <DirectionsBikeIcon />
          </Tooltip>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

    </Card>

  )
}

export default RoomCard
