import React from 'react';


import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';

import { withStyles } from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = {
    container: {
        padding: 20
    },
    list: {
      width: 360,
    },
    panel: {
        width: '100%' 
    }
  };


class OrgManageItem extends React.Component {
    state = {
        open: false,
        recurring: this.props.org.recurring
    }

    handleChange = () => {
        this.setState({
            open: !this.state.open
        })
    }

    updateSub = () => {
        const {update} = this.props
        const next_state = ! this.state.recurring

        update('sub', {
            ID: this.props.org.ID,
            recurring: next_state
        })

        this.setState({
            recurring: next_state
        })
    }

    render() {
        const {classes, org } = this.props
        const freqMap = {
            q: 'quarterly',
            m: 'monthly'
        }
        const statusText = org.active
            ? `$${org.amount}, ${org.recurring ? `recurring ${freqMap[org.interval]}` : ''}`
            : `inactive, total given so far: $${org.total}`

        return (
            <ListItem dense button className={classes.listItem}>
    
                <ExpansionPanel expanded={this.state.open} onChange={this.handleChange} className={classes.panel}>
    
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        
                        <Avatar alt={org.name} src={org.logo_url} />
                        <ListItemText
                            primary={`${org.name}`}
                            secondary={`${statusText}`}
                        />

                    </ExpansionPanelSummary>
        
                    <ExpansionPanelDetails>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <Checkbox
                                onChange={this.updateSub}
                                checked={this.state.recurring && this.props.org.active}
                            />                        
                            <span>recurring </span>
                        </div>

                    </ExpansionPanelDetails>
    
                </ExpansionPanel>
    
            </ListItem>
        )
    }
}


const OrgManageList = ({ classes, orgs, updateState }) => {
    return (
        <List className={classes.list}>
            {orgs.map((org)=> <OrgManageItem key={org.ID} classes={classes} org={org} update={updateState} />)}           
        </List>
    )
}

export default withStyles(styles)(OrgManageList);
