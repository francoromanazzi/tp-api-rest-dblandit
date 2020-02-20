import React, { Component } from 'react'

import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse
} from '@material-ui/core'
import GroupIcon from '@material-ui/icons/Group';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import AlumnoItem from './AlumnoItem'

class Alumnos extends Component {
    state = {
        open: false
    }

    handleClick = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render() {
        const { alumnos } = this.props;
        const { open } = this.state;

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Alumnos" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense>
                        {alumnos && alumnos.map((alumno, i) => <AlumnoItem key={i} alumno={alumno}/>)}
                    </List>
                </Collapse>
            </List>
        )
    }
}

export default Alumnos
