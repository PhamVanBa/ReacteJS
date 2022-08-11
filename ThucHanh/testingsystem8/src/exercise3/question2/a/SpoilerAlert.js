import React, { useState } from "react";

// function SpoilerAlert({ spoilerText }) {
//   const [isVisible, setVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setVisible(!isVisible)}>
//         {isVisible ? "Hide" : "Show"}
//       </button>
//       {isVisible && <span>{spoilerText}</span>}
//     </div>
//   );
// }

function SpoilerAlert({ spoilerText }) {
  // useToggle doesn't exist yet, but what if it did?
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisible}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <span>{spoilerText}</span>}
    </div>
  );
}

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}

// const [isVisible, setVisible] = useState(initialValue);

// const showModal = () => setVisible(true);
// const hideModal = () => setVisible(false);

function useBoolean(initialValue) {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, setTrue, setFalse];
}

// const [isVisible, showModal, hideModal] = useBoolean(initialValue);

export default SpoilerAlert;
