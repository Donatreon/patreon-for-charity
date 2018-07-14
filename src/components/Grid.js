import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";

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
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #1</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #4</Paper>
        </Grid>    <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #5</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #7</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #8</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #9</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #10</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #11</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Charity #12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);