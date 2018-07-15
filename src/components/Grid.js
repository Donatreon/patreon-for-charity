import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";

import CharityButton from './CharityButton';
import '../assets/css/styles.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes, orgs } = props;
  // console.log(classes, orgs)
  return (
    <div className="wrapper">
      <div className={classes.root}>
        <Grid container spacing={24}>
          {orgs.map((org, index) => (
            <Grid item xs={3} key={index}>
              <Paper className={classes.paper}>
                <CharityButton
                  name={org.name}
                  image={org.logo_url}
                />
              </Paper>
            </Grid>

          ))

          }

        </Grid>
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);