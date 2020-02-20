import React from 'react'

import { withStyles, Grid, TextField, IconButton, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    paper: {
        ...theme.customs.paper,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    delete: {
        marginTop: theme.spacing(2)
    }
})

function AgregarAlumnos({ classes, alumnos, handleAlumnoChange, handleAlumnoDelete }) {
    return (
        <React.Fragment>
            {
                alumnos && alumnos.map((alumno, i) => 
                    <Paper key={i} elevation={5} className={classes.paper}>
                        <Grid 
                            container
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <Grid item>
                                <TextField
                                        label="Nombre"
                                        name="nombre"
                                        onChange={handleAlumnoChange.bind(this, i)}
                                        fullWidth
                                        value={alumno.nombre}
                                        required
                                    />  
                                <TextField
                                    label="Apellido"
                                    name="apellido"
                                    onChange={handleAlumnoChange.bind(this, i)}
                                    fullWidth
                                    value={alumno.apellido}
                                    required
                                />      
                                <TextField
                                    label="DNI"
                                    name="dni"
                                    onChange={handleAlumnoChange.bind(this, i)}
                                    fullWidth
                                    value={alumno.dni}
                                    required
                                />      
                                <TextField
                                    label="Direccion"
                                    name="direccion"
                                    onChange={handleAlumnoChange.bind(this, i)}
                                    fullWidth
                                    value={alumno.direccion}
                                    required
                                />      
                                <TextField
                                    label="Nota"
                                    name="nota"
                                    onChange={handleAlumnoChange.bind(this, i)}
                                    fullWidth
                                    value={alumno.nota}
                                    required
                                />                            
                            </Grid>
                            <Grid item>                      
                                <IconButton edge="end" onClick={handleAlumnoDelete.bind(this, i)} className={classes.delete}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                )
            }
        </React.Fragment>
    )
}

export default withStyles(styles)(AgregarAlumnos)