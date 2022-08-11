import React, { useState } from "react";

function SpoilerAlertHook({ spoilerText }) {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <span>{spoilerText}</span>}
    </div>
  );
}

export default SpoilerAlertHook;
