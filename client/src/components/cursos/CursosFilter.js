import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { TextField, withStyles, Paper, Grid } from '@material-ui/core'

import { getCursos } from '../../actions/cursos'
import getErrorForParam from '../../utils/getErrorForParam'

const styles = theme => ({
    paper: {
        ...theme.customs.paper,
        paddingTop: theme.spacing(2),
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(0),
        marginBottom: theme.spacing(0),
        backgroundColor: theme.palette.primary.paper
    }
});

class CursosFilter extends Component {
    state = {
        anio: '',
        duracion: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }, () => {
            const { anio, duracion } = this.state;
            this.props.getCursos(anio, duracion)
        })
    }

    render() {
        const { errors, classes } = this.props;
        const { anio, duracion } = this.state;

        const errores = {
            anioDictado: getErrorForParam(errors, 'anioDictado'),
            duracion: getErrorForParam(errors, 'duracion')
        }

        return (
            <Paper className={classes.paper} elevation={0}>
                <form noValidate autoComplete="off">
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="anio"
                                name="anio"
                                label={errores.anioDictado || "Año"}
                                onChange={this.handleChange}
                                value={anio}
                                error={errores.anioDictado}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                                id="duracion"
                                name="duracion"
                                label={errores.duracion || "Duración"}
                                onChange={this.handleChange}
                                value={duracion}
                                error={errores.duracion}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Paper>               
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors.errors
})

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { getCursos }
    )
)(CursosFilter);