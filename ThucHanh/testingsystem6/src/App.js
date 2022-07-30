import "./App.css";
import React from "react";
import { Routes } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import LifeCycle from "./exercise1/question1/LifeCycle";
import LifeCycleDemo from "./exercise1/question2/LifeCycleDemo";
import WarningBanner from "./exercise1/question3/WarningBanner";
import Number from "./exercise1/question4/Number";
import Person from "./exercise2/question1/Person";
import PersonPure from "./exercise2/question1/PersonPure";
//import "./exercise3/question1/AppCss.css";
import PersonCssModule from "./exercise3/question1/PersonCssModule";
import Notification from "./exercise3/question3/Notification";
import Counter from "./error/Counter";
import Countererro1 from "./errorbounding/VD1/Countererro1";
import ErrorBoundary from "./errorbounding/VD1/ErrorBoundary";
import About2 from "./errorbounding/VD2/About2";
import Error2 from "./errorbounding/VD2/Error2";
import ErrorBoundary2 from "./errorbounding/VD2/ErrorBoundary2";
import Home2 from "./errorbounding/VD2/Home2";
import PersonDetail2 from "./errorbounding/VD2/PersonDetail2";
import PersonList2 from "./errorbounding/VD2/PersonList2";
import ErrorBoundary3 from "./errorbounding/VD3/ErrorBoundary3";
import Counter3 from "./errorbounding/VD3/Counter3";
import Counterstateerror from "./stateerror/Counterstateerror";
import CounterTryCatch from "./trycatch/CounterTryCatch";

// Question 1: Lifecycle
// Viết lại VD1

// function App() {
//   return (
//     <div>
//       <LifeCycle />
//     </div>
//   );
// }

// Question 2:
// Viết lại VD2
// Hãy console log ra tên các method
// a) khi component mouting
// b) khi component updating
// c) khi component unmouting

// function App() {
//   return (
//     <div>
//       <LifeCycleDemo />
//     </div>
//   );
// }

// Question 3: render()
// Hãy thiết kế lại theo VD sau:

// function App(props) {
//   if (!props.warn) {
//     return null;
//   }
//   return (
//     <div className="warning">
//       <h3>Warning!</h3>
//       <WarningBanner />
//     </div>
//   );
// }

// Question 4: forceUpdate()
// Hãy thiết kế chương trình random number

// function App() {
//   return (
//     <div>
//       <Number />
//     </div>
//   );
// }

// Exercise 2: PureComponent
// Question 1:Viết lại VD theo cả 2 cách
// a) Sử dụng shouldComponentUpdate() trong component

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         {
//           id: 1,
//           firstName: "Nguyen Van",
//           lastName: "A",
//         },
//         {
//           id: 2,
//           firstName: "Nguyen Van",
//           lastName: "B",
//         },
//         {
//           id: 3,
//           firstName: "Nguyen Van",
//           lastName: "C",
//         },
//       ],
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState((oldState) => {
//         return { persons: [...oldState.persons] };
//       });
//     }, 1000);
//   }

//   render() {
//     console.log("App rendered!");

//     const personList = this.state.persons.map((person) => (
//       <Person
//         key={person.id}
//         id={person.id}
//         firstName={person.firstName}
//         lastName={person.lastName}
//       />
//     ));
//     return <div>{personList}</div>;
//   }
// }

// b) Sử dụng PureComponent

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         {
//           id: 1,
//           firstName: "Nguyen Van",
//           lastName: "A",
//         },
//         {
//           id: 2,
//           firstName: "Nguyen Van",
//           lastName: "B",
//         },
//         {
//           id: 3,
//           firstName: "Nguyen Van",
//           lastName: "C",
//         },
//       ],
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState((oldState) => {
//         return { persons: [...oldState.persons] };
//       });
//     }, 1000);
//   }

//   render() {
//     console.log("App rendered!");

//     const personList = this.state.persons.map((person) => (
//       <PersonPure
//         key={person.id}
//         id={person.id}
//         firstName={person.firstName}
//         lastName={person.lastName}
//       />
//     ));
//     return <div>{personList}</div>;
//   }
// }

// Exercise 3: Styling
// Question 1:
// Viết lại VD sau theo các cách sau:
// a) Inline styling
// o Style trực tiếp

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1
//           style={{
//             color: "Green",
//             backgroundColor: "lightBlue",
//             padding: "10px",
//             fontFamily: "Arial",
//           }}
//         >
//           FullName: Nguyen Van A
//         </h1>
//       </div>
//     );
//   }
// }

// o Sử dụng object

// class App extends React.Component {
//   render() {
//     const fullNameStyle = {
//       color: "Green",
//       backgroundColor: "lightBlue",
//       padding: "10px",
//       fontFamily: "Arial",
//     };

//     return (
//       <div>
//         <h1 style={fullNameStyle}>FullName: Nguyen Van A</h1>
//       </div>
//     );
//   }
// }

// b) CSS in CSS
// o CSS Stylesheet

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 className="fullName">FullName: Nguyen Van A</h1>
//       </div>
//     );
//   }
// }

// o CSS Module

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <PersonCssModule />
//       </div>
//     );
//   }
// }

// c) CSS in JS
// o Styled Component

// class App extends React.Component {
//   render() {
//     const H1 = styled.h1`
//       color: Green;
//       background-color: lightBlue;
//       padding: 10px;
//       font-family: Arial;
//     `;
//     return (
//       <div>
//         <H1>FullName: Nguyen Van A</H1>
//       </div>
//     );
//   }
// }

// Question 2:
// Viết lại VD trên bằng cách sử dụng Styled Component và truyền props
// color vào:

// class App extends React.Component {
//   render() {
//     const H1 = styled.h1`
//       color: ${(props) => props.textColor};
//       background-color: lightBlue;
//       padding: 10px;
//       font-family: Arial;
//     `;
//     return (
//       <div>
//         <H1 textColor="green">FullName: Nguyen Van A</H1>
//       </div>
//     );
//   }
// }

// Question 3:
// Viết lại VD sau sử dụng Styled Component:

// function App() {
//   return (
//     <div>
//       <Notification />
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     const H1 = styled.h1`
//       color: Green;
//       background-color: lightBlue;
//       padding: 10px;
//       font-family: Arial;
//       &:hover {
//         color: red;
//       }
//     `;
//     return (
//       <div>
//         <H1>FullName: Nguyen Van A</H1>
//       </div>
//     );
//   }
// }

// error

// class App extends React.Component {
//   render() {
//     return <Counter />;
//   }
// }

// errorbounding

// class App extends React.Component {
//   render() {
//     return (
//       <ErrorBoundary>
//         <Countererro1 />
//       </ErrorBoundary>
//     );
//   }
// }

// errorbounding 2

// function App() {
//   return (
//     <ErrorBoundary2>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/persons">Persons</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" component={Home2} exact />
//           <Route path="/about" component={About2} exact />
//           <Route path="/persons/:id" component={PersonDetail2} />
//           <Route path="/persons" component={PersonList2} />
//           <Route component={Error2} />
//         </Routes>
//       </div>
//     </ErrorBoundary2>
//   );
// }

// errorbounding 3

// function App() {
//   return (
//     <div>
//       <ErrorBoundary3>
//         <p>Counter 1 & 2</p>
//         <Counter3 />
//         <Counter3 />
//       </ErrorBoundary3>
//       <ErrorBoundary3>
//         <p>Counter 3</p>
//         <Counter3 />
//       </ErrorBoundary3>
//       <ErrorBoundary3>
//         <p>Counter 4</p>
//         <Counter3 />
//       </ErrorBoundary3>
//     </div>
//   );
// }

// state error

// class App extends React.Component {
//   render() {
//     return <Counterstateerror />;
//   }
// }

// try cstch error

class App extends React.Component {
  render() {
    return <CounterTryCatch />;
  }
}

export default App;
