
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Paper, Avatar, Typography, Button, InputLabel, FormControl, Input, Link } from '@material-ui/core';


const Login='/Login';
const Profile='/Profile';

export class RegisterUser extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Grid container className="background">
                    <Grid item xs={12} sm={12} md={6} elevation={6}>
                        <CssBaseline />
                        <main className="layout">
                            <Paper className="paper">
                                <Typography variant="headline">Registro</Typography>
                                <form className="form">
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="email">Nombre</InputLabel>
                                        <Input id="email" name="email" autoComplete="name" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="email">Apellido</InputLabel>
                                        <Input id="email" name="email" autoComplete="lastname" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="email">Correo</InputLabel>
                                        <Input id="email" name="email" autoComplete="email" autoFocus />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="password">Contraseña</InputLabel>
                                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                                    </FormControl>
                                    <br />
                                    <FormControl margin="normal" fullWidth>
                                        <InputLabel htmlFor="password">Confirme Contraseña</InputLabel>
                                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                                    </FormControl>
                                    <br />
                                    <Button type="submit" variant="contained" color="primary" className="submit" to={Profile}>
                                        Registrar
                                    </Button>
                                    <br /><br />
                                    <Button type="" variant="contained" color="primary" className="" to={Login}>
                                        Cancelar
                                    </Button>
                                </form>
                                <br/>
                            </Paper>
                        </main>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
