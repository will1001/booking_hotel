import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import GridOnIcon from '@material-ui/icons/GridOn'
import ListIcon from '@material-ui/icons/List'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
)

interface Props {
  changeView: any;
}

const FilterBox = (props: Props) => {
  const classes = useStyles()
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  )

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const [price, setPrice] = React.useState('')

  const ChangePrice = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPrice(event.target.value as string)
  }

  const [roomSize, setRoomSize] = React.useState('')

  const ChangeRoomSize = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRoomSize(event.target.value as string)
  }

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" direction='row' alignItems='center'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            minDate={Date()}
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="Check-In"
            label="Check-In"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            minDate={Date()}
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="Check-Out"
            label="Check-Out"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="Guest"
          label="Guest"
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="room-price">Price</InputLabel>
          <Select
            labelId="room-price"
            id="price"
            value={price}
            onChange={ChangePrice}
          >
            <MenuItem value={10}>Lowest Price</MenuItem>
            <MenuItem value={20}>Highest Price</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="room-size">Room size</InputLabel>
          <Select
            labelId="room-size"
            id="RoomSize"
            value={roomSize}
            onChange={ChangeRoomSize}
          >
            <MenuItem value={10}>Smallest room</MenuItem>
            <MenuItem value={20}>Largest room</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          onClick={props.changeView}
          color="primary" aria-label="grid view" component="span">
          <GridOnIcon/>
        </IconButton>
        <IconButton
          onClick={props.changeView}
          color="primary" aria-label="list view" component="span">
          <ListIcon />
        </IconButton>

      </Grid>
    </div>
  )
}

export default FilterBox
