import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withStyles, Paper, Grid, TextField, Button } from '@material-ui/core'

import { loginUser } from '../../actions/auth'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(4)
    },
    paper: {
        ...theme.customs.paper
    }
});

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push('/cursos');
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const { username, password } = this.state;

        this.props.loginUser({ username, password });
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { classes } = this.props;
        const { username, password } = this.state;

        return (
            <Paper className={classes.paper} elevation={0}>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            <TextField
                                id="username"
                                name="username"
                                label="Username"
                                onChange={this.handleChange}
                                value={username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                id="password"
                                name="password"
                                label="Password"
                                onChange={this.handleChange}
                                value={password}
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                type="submit"
                                className={classes.root}
                            >
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>     
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { loginUser }
    )
)(Login);