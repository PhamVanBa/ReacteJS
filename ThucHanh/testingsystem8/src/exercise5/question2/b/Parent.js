// import React from "react";

// function Parent(a, b) {
//   // Will skip rerendering if the argument `a` will not change
//   const childA = React.useMemo(() => <childA item={a} />, [a]);

//   // Will skip rerendering if `b` remains the same. Similar to `React.memo()` method
//   const childB = React.useMemo(() => <childB item={b} />, [b]);

//   return (
//     <>
//       {childA}
//       {childB}
//     </>
//   );
// }

// export default Parent;
