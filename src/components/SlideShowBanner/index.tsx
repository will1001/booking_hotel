import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CheckAvailability from './CheckAvailability'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    slideshow: {
      textAlign: 'center',
      color: 'white',
      height: '100%',
      // backgroundColor: 'black',
      '& img': {
        width: '100%',
        height: '650px'
      }
    },
    boxFilter: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '650px'
    },
    CheckAvailabilityBox: {
      display: 'flex',
      justifyContent: 'center'

    },
    title: {
      position: 'absolute',
      top: 200,
      textAlign: 'center',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      zIndex: 1
    }
  })
)

const SlideShowBanner = () => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      src: 'https://pix10.agoda.net/hotelImages/642/6429894/6429894_19010916340071180658.jpg?s=1024x768'
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      src: 'https://pix10.agoda.net/hotelImages/1198373/-1/43cc893c81e31356ac2bb63b0395a849.jpg?s=1024x768'

    }
  ]

  const CarouselSetting = {
    interval: 3000,
    indicators: false,
    timeout: 1500
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <Carousel {...CarouselSetting}>
            {
              items.map(item => {
                return (
                  <div key={item.name} className={classes.slideshow}>
                    <img src={item.src} alt={item.name} />
                    <div className={classes.boxFilter}></div>
                    <div className={classes.title}>
                      <h1>{item.description}</h1>
                    </div>
                  </div>
                )
              }
              )
            }
          </Carousel>
          <div className={classes.CheckAvailabilityBox}>
            <CheckAvailability />
          </div>

        </Grid>
      </Grid>
    </div>
  )
}

export default SlideShowBanner
