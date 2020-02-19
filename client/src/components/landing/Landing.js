import React from 'react'
import { Link } from 'react-router-dom'

import { Typography, withStyles, Button, Grid } from '@material-ui/core'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(6)
    },
    button: {
        marginTop: theme.spacing(2)
    }
});

function Landing({ classes }) {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}
        >
            <Grid item xs={12}>
                <Typography variant="h4" align="center">Gestión de cursos DBlandIT</Typography>
            </Grid>
            <Grid item xs={12} className={classes.button}>
                <Button variant="contained" color="primary" component={Link} to="/cursos">
                    Ver cursos
                </Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Landing)