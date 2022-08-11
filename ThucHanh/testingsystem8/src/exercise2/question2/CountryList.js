// import React, { useEffect, useState } from "react";
// import { getItem } from "./generalMethods";
// import axios from "axios";

// const CountryList = () => {
//   const [countries, setCountries] = useState([]);
//   const [load, setLoad] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     getItem("https://6256a008e07d2c9a6709d7a1.mockapi.io/employees")
//       .then((res) => {
//         setCountries(res);
//         setLoad(true);
//       })
//       .catch((err) => {
//         setError(err);
//         setLoad(true);
//       });
//   }, []);

//   if (load) {
//     return (
//       <ul>
//         {error ? (
//           <li>{error.message}</li>
//         ) : (
//           countries.map((country, index) => <li key={index}>{country.name}</li>)
//         )}
//       </ul>
//     );
//   } else {
//     return <div>Loading...</div>;
//   }
// };

// export default CountryList;
