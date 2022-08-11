import React from "react";
import API from "./API";

class CreateEmployee2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmitEvent = (event) => {
    event.preventDefault();
    const body = {
      name: this.state.name,
    };

    API.post(`/employees`, body)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmitEvent(e)}>
        <label>
          Name:
          <input type="text" onChange={(e) => this.changeName(e)} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateEmployee2;
