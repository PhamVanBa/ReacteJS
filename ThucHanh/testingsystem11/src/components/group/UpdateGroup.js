import React from "react";
import GroupApi from "../../api/GroupApi";

class UpdateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getListGroup = async () => {
    try {
      // call api
      const data = await GroupApi.getAll();
      // using data
      this.setState({
        groups: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getListGroup();
  }

  updateGroupByGroupId = async (id) => {
    const body = {
      name: this.state.name,
    };

    try {
      // call api
      await GroupApi.updateByID(id, body);
      // reload list
      this.getListGroup();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const personList = this.state.groups.map((group) => (
      <li key={group.id} onClick={() => this.updateGroupByGroupId(group.id)}>
        {group.name}
      </li>
    ));
    return <ul>{personList}</ul>;
  }
}

export default UpdateGroup;
