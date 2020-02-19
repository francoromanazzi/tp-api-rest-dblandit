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
            <ListItemText primary={`${alumno.apellido}, ${alumno.nombre}`} />
        </ListItem>
    )
}

export default withStyles(styles)(AlumnoItem)