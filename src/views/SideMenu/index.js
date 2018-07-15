import React from 'react';

import Drawer from '@material-ui/core/Drawer';

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

import OrgManageList from './OrgManageList'


const styles = {
    container: {
        padding: 20
    },
    list: {
      width: 360,
    },
    fullList: {
      width: 'auto',
    },
  };

// const range = [...Array(7).keys()];

const SideMenu = ({ classes, open, toggleOpen, updateState, ctx: {user, orgs} }) => {
    const user_subs = user.subs.map((sub) => {
        return {
           ...orgs.find((org) => org.ID === sub.id ),
           ...sub
        }
    })

    return (
        <Drawer open={open} onClose={toggleOpen(false)}>
            <GridContainer direction="column" className={classes.container}>
                <GridItem xs={12}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={toggleOpen(false)}
                        onKeyDown={toggleOpen(false)}
                    >
                        <Typography variant="display1" gutterBottom style={{display: 'inline'}}>
                            Manage Account
                        </Typography>
                    </div>
                    <div className={classes.list}>
                        <List>
                            <ListItem dense button className={classes.listItem}>
                                <Avatar alt={user.name} src={user.image} />
                                <ListItemText primary={`${user.name}'s Subs`} />
                            </ListItem>
                        </List>
                    </div>
                </GridItem>

                <GridItem xs={12}>
                    <OrgManageList orgs={user_subs} updateState={updateState} />
                </GridItem>


            </GridContainer>
        </Drawer>
    )
}

// export default SideMenu
export default withStyles(styles)(SideMenu);
