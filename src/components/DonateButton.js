import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function DonateButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" href="#contained-buttons" color="primary" className={classes.button}>
        Donate
      </Button>
    </div>
  );
}

DonateButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DonateButton);