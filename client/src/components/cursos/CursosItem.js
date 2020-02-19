import React from 'react'

import { Typography, withStyles, Paper } from '@material-ui/core'
import Alumnos from './alumnos/Alumnos'

const styles = theme => ({
    paper: { ...theme.customs.paper }
});

function CursosItem({ curso, classes }) {
    return (
        <Paper className={classes.paper} elevation={3}>
            <Typography variant="h6">{curso.tema} ({curso.anioDictado})</Typography>
            <Typography variant="subtitle1">{curso.duracion} horas</Typography>
            <Alumnos alumnos={curso.alumnos}/>
        </Paper>
    )
}

export default withStyles(styles)(CursosItem)
