import React from "react";
import ParentComponent from "./ParentComponent";
import MessageContext from "./MessageContext";

function GrandParentComponentFunction(props) {
  const message = "Cố học đi cháu";
  return (
    <MessageContext.Provider value={message}>
      <ParentComponent />
    </MessageContext.Provider>
  );
}

export default GrandParentComponentFunction;
