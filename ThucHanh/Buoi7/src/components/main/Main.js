import "./Main.css";

import DemoState from "../state/DemoState";

import Table from "../fragment/Table";
import DemoForm from "../form/DemoForm";
import ShareDataDemo from "../sharedata/ShareDataDemo";

const Main = (props) => {
  return (
    <div className="main">
      <DemoState name="Demo state 2" />
      <hr></hr>
      <Table />
      <hr></hr>
      <DemoForm />

      <ShareDataDemo />
    </div>
  );
};

export default Main;
