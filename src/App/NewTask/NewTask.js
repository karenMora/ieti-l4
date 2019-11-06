import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input, Link } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './NewTask.css';
import DialogContent from "@material-ui/core/DialogContent";

const Profile='/Profile';

export class NewTask extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Grid container className="background">
                    <Grid item xs={12} sm={12} md={6} elevation={6}>
                        <CssBaseline />
                        <main className="layout">
                            <Paper className="paper">
                                <Typography variant="headline">NEW TASK</Typography>
                                 <form className="form">
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="email">Descripción</InputLabel>
                                        <Input id="email" name="email" autoComplete="name" autoFocus />
                                    </FormControl>
                                    <br /><br />
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="email">Responsable</InputLabel>
                                        <Input id="email" name="email" autoComplete="lastname" autoFocus />
                                    </FormControl>
                                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                                    <br /><br /><br /><br /><br /><br /><br /><br />
                                    <Fab color="primary" aria-label="add" className={"fab"}>
                                    <AddIcon />
                                    </Fab>
                                 </form>
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
}
