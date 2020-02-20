import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom';

import { withStyles, Grid, Paper, Typography, TextField, Button, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import AgregarAlumnos from './AgregarAlumnos'
import { postCurso } from '../../../actions/cursos'
import getErrorForParam from '../../../utils/getErrorForParam'

const styles = theme => ({
    paper: { ...theme.customs.paper },
    input: {
        marginTop: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(4)
    },
    addAlumno: {
        marginTop: theme.spacing(4)
    }
})

class AgregarCurso extends Component {
    state = {
        tema: '',
        anioDictado: '',
        duracion: '',
        alumnos: []
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.postCurso(this.state, this.props.history);
    }

    handleAddAlumnoClick = e => {
        this.setState(prevState => ({
            alumnos: [...prevState.alumnos, {
                nombre: '',
                apellido: '',
                dni: '',
                direccion: '',
                nota: ''
            }]
        }))
    }

    handleAlumnoChange = (i, e) => {
        console.log({i, e})
        const { name, value } = e.target;
        this.setState(prevState => ({
            alumnos: prevState.alumnos.map((alumno, i2) => {
                if(i === i2) {
                    return {
                        ...alumno,
                        [name]: value
                    }
                } else {
                    return alumno
                }
            })
        }))
    }

    handleAlumnoDelete = i => {
        this.setState(prevState => ({
            alumnos: prevState.alumnos.filter((_, i2) => i !== i2)
        }))
    }

    render() {
        const { errors, classes } = this.props;
        const { tema, anioDictado, duracion, alumnos } = this.state;

        const errores = {
            tema: getErrorForParam(errors, 'tema'),
            duracion: getErrorForParam(errors, 'duracion'),
            anioDictado: getErrorForParam(errors, 'anioDictado')
        }

        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                spacing={3}
            >
                <Grid item>
                    <Paper className={classes.paper} elevation={3}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            align="center"
                        >
                            Agregar curso
                        </Typography>
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <TextField
                                label={errores.tema || 'Tema'}
                                name="tema"
                                onChange={this.handleChange}
                                fullWidth
                                value={tema}
                                required
                                className={classes.input}
                                error={!!errores.tema}
                            />
                            <TextField
                                label={errores.duracion || 'Duracion (hs)'}
                                name="duracion"
                                onChange={this.handleChange}
                                fullWidth
                                value={duracion}
                                required
                                className={classes.input}
                                error={!!errores.duracion}
                            />
                            <TextField
                                label={errores.anioDictado || 'Año dictado'}
                                name="anioDictado"
                                onChange={this.handleChange}
                                fullWidth
                                value={anioDictado}
                                required
                                className={classes.input}
                                error={!!errores.anioDictado}
                            />
                            <AgregarAlumnos
                                alumnos={alumnos}
                                handleAlumnoChange={this.handleAlumnoChange}
                                handleAlumnoDelete={this.handleAlumnoDelete}
                            />
                            <Fab
                                color="primary"
                                aria-label="add"
                                variant="extended"
                                className={classes.addAlumno}
                                onClick={this.handleAddAlumnoClick}
                                size="small"
                            >
                                <AddIcon />
                                Agregar alumno
                            </Fab>   
                            <Button
                                variant="contained"
                                type="submit"
                                color="secondary"
                                fullWidth
                                className={classes.button}
                            >
                                Agregar
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors.errors
})

export default compose(
    withStyles(styles),
    withRouter,
    connect(
        mapStateToProps,
        { postCurso }
    )
)(AgregarCurso)
