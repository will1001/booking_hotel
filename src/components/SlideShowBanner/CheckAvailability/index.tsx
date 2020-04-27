import React, { useState } from 'react'
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import HotelIcon from '@material-ui/icons/Hotel'
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      position: 'absolute',
      bottom: 50
    },
    dateInput: {
      '& .MuiInputAdornment-root ,.MuiSvgIcon-root ,.MuiInputLabel-root ,.MuiInputBase-root ': {
        color: 'white'
      },
      '&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
        color: 'white'
      }
    },
    guestInput: {
      margin: 15,
      display: 'flex',
      '& .MuiInputLabel-root ': {
        color: 'white'
      },
      '& .MuiInputBase-root': {
        color: 'white'
      },
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white'
      }

    },
    button: {
      margin: 15,
      '& .MuiButton-root ,.MuiButtonBase-root': {
        color: 'white',
        backgroundcolor: 'white'
      }
    }
  })
)

const CheckRoomButton = withStyles(() => ({
  root: {
    color: 'white',
    borderColor: 'white'
  }
}))(Button)

const CheckAvailability = () => {
  const classes = useStyles()

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date()
  )

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.dateInput}
              disableToolbar
              autoOk
              minDate={Date()}
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="Check-In"
              label="Check-In"
              value={selectedDate}
              onChange={handleDateChange}
              InputProps={{
                disableUnderline: true
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
            <KeyboardDatePicker
              className={classes.dateInput}
              disableToolbar
              autoOk
              minDate={Date()}
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="Check-Out"
              label="Check-Out"
              value={selectedDate}
              onChange={handleDateChange}
              InputProps={{
                disableUnderline: true
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </MuiPickersUtilsProvider>

        </Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.guestInput}
            id="Guest"
            label="Guest"
            type="number"
            variant="filled"
            defaultValue={1}
            InputProps={{
              inputProps: { min: 1 },
              disableUnderline: true
            }}
            InputLabelProps={{
              shrink: true
            }}
          />
          <CheckRoomButton
            variant="outlined"
            className={classes.button}
            endIcon={<HotelIcon />}
          >
        Check Room
          </CheckRoomButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default CheckAvailability
