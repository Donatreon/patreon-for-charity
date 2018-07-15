import React from 'react';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  };

const range = [...Array(7).keys()];



const SideMenu = ({ classes, open, toggleOpen }) => {
    console.log('enu', open)
    return (
        <Drawer open={open} onClose={toggleOpen(false)}>
            <div
                tabIndex={0}
                role="button"
                onClick={toggleOpen(false)}
                onKeyDown={toggleOpen(false)}
            >
                <div className={classes.list}>
                <List>
                    {range}
                </List>
                </div>
            </div>
        </Drawer>
    )
}

// export default SideMenu
export default withStyles(styles)(SideMenu);
