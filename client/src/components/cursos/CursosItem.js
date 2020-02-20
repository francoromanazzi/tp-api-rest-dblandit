import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Typography, withStyles, Paper, IconButton, Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

import Alumnos from './alumnos/Alumnos'
import { deleteCurso } from '../../actions/cursos'

const styles = theme => ({
    paper: { ...theme.customs.paper }
});

class CursosItem extends Component {
    handleDeleteClick = cursoId => {
        console.log(cursoId)
        this.props.deleteCurso(cursoId)
    }

    render() {
        const { curso, classes, isAuthenticated } = this.props;

        return (
            <Paper className={classes.paper} elevation={3}>
                <Grid container alignItems="flex-start" justify="space-between" direction="row">
                    <Grid item>
                        <Typography variant="h6">{curso.tema} ({curso.anioDictado})</Typography>
                    </Grid>
                    {isAuthenticated &&
                        <Grid item>                      
                            <IconButton edge="end" onClick={() => this.handleDeleteClick(curso._id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    }                  
                </Grid>
                <Typography variant="subtitle1">{curso.duracion} horas</Typography>
                <Alumnos alumnos={curso.alumnos}/>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { deleteCurso }
    )
)(CursosItem)
