import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withStyles, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import { getCursos } from '../../actions/cursos'
import CursosItem from './CursosItem'
import CursosFilter from './CursosFilter'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(2)
    },
    addCurso: {
        margin: 0,
        top: 'auto',
        right: theme.spacing(4),
        bottom: theme.spacing(4),
        left: 'auto',
        position: 'fixed',
    }
});

class Cursos extends Component {
    componentDidMount() {
        this.props.getCursos();
    }

    render() {
        const { classes, cursos: { cursos }, isAuthenticated } = this.props;
        return (
            <div className={classes.root}>
                <CursosFilter />
                {cursos && cursos.map(curso => <CursosItem key={curso._id} curso={curso} />)}
                {isAuthenticated && 
                    <Fab color="secondary" aria-label="add" className={classes.addCurso} component={Link} to="/cursos/nuevo">
                        <AddIcon />
                    </Fab>            
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cursos: state.cursos,
    isAuthenticated: state.auth.isAuthenticated
});

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { getCursos }
    )
)(Cursos);

