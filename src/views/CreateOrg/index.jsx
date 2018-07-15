import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const initialState = {
  orgName: "",
  description: "",
  url: "",
  address: {
    street: "",
    city: "",
    state: ""
  }
};

class CreateOrg extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Set up your Organization</h2>
        <form
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
          className="container"
        >
          <TextField
            id="required"
            label="Organization Name"
            className="textfield"
            value={this.state.orgName}
            onChange={this.handleChange("orgName")}
            margin="normal"
          />
          <TextField
            id="required"
            label="Description"
            className="textfield"
            value={this.state.description}
            onChange={this.handleChange("description")}
            margin="normal"
          />
          <TextField
            id="name"
            label="URL"
            className="textfield"
            value={this.state.url}
            onChange={this.handleChange("url")}
            margin="normal"
          />
          <div className="button">
            <Button
              size="medium"
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateOrg;
