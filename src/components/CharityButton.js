import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "../assets/jss/material-kit-react.jsx";
import DonateModal from "./DonateModal";

// custom components
// import DonateModal from './DonateModal';

const style = {
  ...imagesStyles,
  cardTitle,
};

class CharityButton extends React.Component {
  render() {
    const { name, image, classes, org, updateSubs } = this.props;

    return (
      <CardBody>
        <h4 className={classes.cardTitle}>{name}</h4>
        <img
          style={{ height: "180px", width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={image}
          alt={name}
        />
        {/* <Button color="primary">Donate now</Button> */}
        <DonateModal
          org={org}
          onConfirm={updateSubs}
        />
      </CardBody>
    );
  }
}

export default withStyles(style)(CharityButton);