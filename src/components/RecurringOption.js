import React from "react";
import classNames from "classnames";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx";

class CheckboxRadioSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
    };
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    const wrapperDiv = classNames(
      classes.checkboxAndRadio,
      classes.checkboxAndRadioHorizontal
    );
    return (
      <div>
        <div className={wrapperDiv}>
          <FormControlLabel
            control={
              <Checkbox
                tabIndex={-1}
                onClick={() => this.handleToggle(22)}
                checked={
                  this.state.checked.indexOf(22) !== -1 ? true : false
                }
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{ checked: classes.checked }}
              />
            }
            classes={{ label: classes.label }}
            label="Monthly recurring donation"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CheckboxRadioSwitch);