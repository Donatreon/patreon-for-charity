import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import DonateButton from './DonateButton';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
});

const CharityButton = ({ name, image, classes }) =>
  (
    <div className={classes.root}>
      <div>
        {name}
      </div>
      <img src={image} alt={name} className="logos" />
      <DonateButton />
    </div>
  )

CharityButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharityButton);