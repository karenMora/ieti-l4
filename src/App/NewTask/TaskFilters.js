
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input, Link } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DialogContent from "@material-ui/core/DialogContent";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Profile='/Profile';
const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function TaskFilters() {
  const classes = useStyles();

  const [date, setDate] = React.useState('');
  const [opend, setOpend] = React.useState(false);
  const handleChangeD = event => {setDate(event.target.value);};
  const handleCloseD = () => {setOpend(false);};
  const handleOpenD = () => {setOpend(true);};


  const [responsable, setResponsable] = React.useState('');
  const [openR, setOpenR] = React.useState(false);
  const handleChangeR = event => {setResponsable(event.target.value);};
  const handleCloseR = () => {setOpenR(false);};
  const handleOpenR = () => {setOpenR(true);};



  const [status, setStatus] = React.useState('');
  const [openS, setOpenS] = React.useState(false);
  const handleChangeS = event => {setStatus(event.target.value);};
  const handleCloseS = () => {setOpenS(false);};
  const handleOpenS = () => {setOpenS(true);};


  return (
    <React.Fragment>
        <Grid container className="background">
            <Grid item xs={12} sm={12} md={6} elevation={6}>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="headline">NEW TASK</Typography>
                        <div>
                          <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Due Date</InputLabel>
                            <Select
                              labelId="demo-controlled-open-select-label"
                              id="demo-controlled-open-select"
                              open={opend}
                              onClose={handleCloseD}
                              onOpen={handleOpenD}
                              value={date}
                              onChange={handleChangeD}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>1</MenuItem>
                              <MenuItem value={20}>2</MenuItem>
                              <MenuItem value={30}>3</MenuItem>
                            </Select>
                          </FormControl>
                          <br/><br/>
                          <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Responsable</InputLabel>
                            <Select
                              labelId="demo-controlled-open-select-label"
                              id="demo-controlled-open-select"
                              open={openR}
                              onClose={handleCloseR}
                              onOpen={handleOpenR}
                              value={responsable}
                              onChange={handleChangeR}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Alto</MenuItem>
                              <MenuItem value={20}>Media</MenuItem>
                              <MenuItem value={30}>Baja</MenuItem>
                            </Select>
                          </FormControl>
                          <br/><br/>
                          <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Status</InputLabel>
                            <Select
                              labelId="demo-controlled-open-select-label"
                              id="demo-controlled-open-select"
                              open={openS}
                              onClose={handleCloseS}
                              onOpen={handleOpenS}
                              value={status}
                              onChange={handleChangeS}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>10</MenuItem>
                              <MenuItem value={20}>9</MenuItem>
                              <MenuItem value={30}>8</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                       <br/>
                       <Button type="submit" variant="contained" color="black" className="submit" component={Link} to={Profile}>
                           Apply
                       </Button>
                       <br/>
                       <Button type="submit" variant="contained" color="black" className="submit" component={Link} to={Profile}>
                           Clear All
                       </Button>
                       <br/>
                       <Button type="submit" variant="contained" color="black" className="submit" component={Link} to={Profile}>
                           volver
                       </Button>
                   </Paper>
               </main>
           </Grid>
       </Grid>
   </React.Fragment>
  );
}
