import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withStyles } from '@material-ui/core'

import { getCursos } from '../../actions/cursos'
import CursosItem from './CursosItem'

const styles = theme => ({
    root: {
        marginTop: theme.spacing(2)
    }
});

class Cursos extends Component {
    componentDidMount() {
        this.props.getCursos();
    }

    render() {
        const { classes, cursos: { cursos } } = this.props;
        return (
            <div className={classes.root}>
                {cursos && cursos.map(curso => <CursosItem key={curso._id} curso={curso} />)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cursos: state.cursos
});

export default compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        { getCursos }
    )
)(Cursos);

