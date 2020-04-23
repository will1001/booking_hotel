import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CheckAvailability from './CheckAvailability'
// import { useSelector, useDispatch } from 'react-redux'
// import { ChatState } from '../../store/chat/types'
// import { sendMessage } from '../../store/chat/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    slideshow: {
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'grey',
      maxWidth: '100%',
      '& img': {
        width: '100%',
        height: '500px'
      }
    },
    CheckAvailabilityBox: {
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      // display: 'flex',
      // justifyContent: 'center',
      textAlign: 'center',
      '& h1': {
        // position: 'absolute',
        // bottom: 200
      }
    }
  })
)

interface Props {
}

// interface RootState {
//   chat: ChatState
// }

const SlideShowBanner = (props: Props) => {
  // const Chat = useSelector((state: RootState) => state.chat)

  // const dispatch = useDispatch()

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <Paper className={classes.slideshow}>
            <img src="https://pix10.agoda.net/hotelImages/642/6429894/6429894_19010916340071180658.jpg?s=1024x768" alt="" />
            <div className={classes.title}>
              {/* {Chat.messages.map(
                item => <h1 key={item.timestamp}>{item.message}</h1>
              )} */}
              <h1>title</h1>
            </div>
            {/* <button onClick={() => dispatch(sendMessage({
              user: 'Chat Bot',
              message:
        'This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.',
              timestamp: new Date().getTime()
            }))}>send pesan</button> */}
            <div className={classes.CheckAvailabilityBox}>
              <CheckAvailability />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default SlideShowBanner
