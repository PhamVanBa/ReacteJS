// import React, { useState } from "react";
// import { useToggle } from "./hooks";

// function SpoilerAlertUToggle({ spoilerText }) {
//   // useToggle doesn't exist yet, but what if it did?
//   const [isVisible, toggleVisible] = useToggle(false);

//   return (
//     <div>
//       <button onClick={toggleVisible}>{isVisible ? "Hide" : "Show"}</button>
//       {isVisible && <span>{spoilerText}</span>}
//     </div>
//   );
// }

// function useToggle(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   const toggleValue = () => setValue(!value);

//   return [value, toggleValue];
// }
// function useBoolean(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   const setTrue = () => setValue(true);
//   const setFalse = () => setValue(false);

//   return [value, setTrue, setFalse];
// }

// export default SpoilerAlertUToggle;
