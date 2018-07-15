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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

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
          className="form"
        >
          <div className="input">
            <div className="inputline">
              <label htmlFor="orgName">Organization Name: </label>
              <TextField
                type="text"
                name="orgName"
                value={this.state.orgName}
                onChange={this.handleChange}
              />
            </div>
            <div className="inputline">
              <label htmlFor="description">Description: </label>
              <TextField
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="inputline">
              <label htmlFor="url">URL: </label>
              <TextField
                type="text"
                name="url"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateOrg;
