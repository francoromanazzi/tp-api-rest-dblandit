import React from 'react'

import { withStyles, ListItem, ListItemText } from '@material-ui/core'

const styles = theme => ({
    item: {
        paddingLeft: theme.spacing(4),
    },
})

function AlumnoItem({ alumno, classes }) {
    return (
        <ListItem className={classes.item}>
            <ListItemText
                primary={`${alumno.apellido}, ${alumno.nombre} (${alumno.nota})`}
                secondary={`DNI ${alumno.dni} - ${alumno.direccion}`}
            />
        </ListItem>
    )
}

export default withStyles(styles)(AlumnoItem)