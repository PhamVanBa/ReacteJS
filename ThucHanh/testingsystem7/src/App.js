import "./App.css";
import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./exercise1/question1/Home";
import EmployeeList from "./exercise1/question1/EmployeeList";
import CreateEmployee from "./exercise1/question1/CreateEmployee";
import DeleteEmployee from "./exercise1/question1/DeleteEmployee";
import Home2 from "./exercise1/question2/Home2";
import EmployeeList2 from "./exercise1/question2/EmployeeList2";
import CreateEmployee2 from "./exercise1/question2/CreateEmployee2";
import DeleteEmployee2 from "./exercise1/question2/DeleteEmployee2";
import Home3 from "./exercise1/question3/components/Home3";
import EmployeeList3 from "./exercise1/question3/components/EmployeeList3";
import CreateEmployee3 from "./exercise1/question3/components/CreateEmployee3";
import DeleteEmployee3 from "./exercise1/question3/components/DeleteEmployee3";
import Home211 from "./exercise2/question1/loading1/components/Home211";
import EmployeeContainer211 from "./exercise2/question1/loading1/containers/EmployeeContainer211";
import UserContainer211 from "./exercise2/question1/loading1/containers/UserContainer211";
import Home212 from "./exercise2/question1/loading2/components/Home212";
import EmployeeContainer212 from "./exercise2/question1/loading2/containers/EmployeeContainer212";
import UserContainer212 from "./exercise2/question1/loading2/containers/UserContainer212";
import HomeDpName from "./exercise2/question1/loading2displayname/components/HomeDpName";
import EmployeeContainerDpName from "./exercise2/question1/loading2displayname/containers/EmployeeContainerDpName";
import UserContainerDpName from "./exercise2/question1/loading2displayname/containers/UserContainerDpName";
import AuthenticatedContext22 from "./exercise2/question2/context/AuthenticatedContext22";
import Home22 from "./exercise2/question2/components/Home22";
import EmployeeContainer22 from "./exercise2/question2/containers/EmployeeContainer22";
import UserContainer22 from "./exercise2/question2/containers/UserContainer22";
import Hello from "./exercise2/question3/styling/Hello";
import WithStyling from "./exercise2/question3/styling/withStyling";
import HelloDefault from "./exercise2/question3/defaultprops/HelloDefault";
import WithDefaultName from "./exercise2/question3/defaultprops/withDefaultName";
import UsingComponent from "./exercise3/question1/UsingComponent";
import withMouse from "./exercise3/question2/HOC/hoc/withMouse";
import MyComponentRenderProps from "./exercise3/question2/rederProps/MyComponentRenderProps";
import MyComponent from "./exercise3/question2/HOC/MyComponent";
import MyComponent33 from "./exercise3/question3/MyComponent33";
import WithMouse33 from "./exercise3/question3/hoc/withMouse33";
import MyComponent34 from "./exercise3/question4/MyComponent34";
import Wrapper from "./exercise3/question5/aTaoBoDem/Wrapper";
import WrapperList from "./exercise3/question5/bTaoDanhSachDuLieu/WrapperList";
import Watch from "./exercise3/question5/cTaoMatDongHo/Watch";

// Exercise 1: Axios
// Question 1:
// Tạo MockAPI và viết lại VD1 bằng cách sử dụng Promise hoặc Async
// await

// function App(props) {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/employees">Employee List</Link>
//           </li>
//           <li>
//             <Link to="/createemployee">Create Employee</Link>
//           </li>
//           <li>
//             <Link to="/deleteemployee">Delete Employee</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/" component={Home} exact />
//         <Route path="/employees" component={EmployeeList} exact />
//         <Route path="/createemployee" component={CreateEmployee} exact />
//         <Route path="/deleteemployee" component={DeleteEmployee} exact />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

// Question 2:
// Create axios instance với config baseUrl, timeout để không phải viết
// lại URL nhiều

// function App(props) {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/employees">Employee List</Link>
//           </li>
//           <li>
//             <Link to="/createemployee">Create Employee</Link>
//           </li>
//           <li>
//             <Link to="/deleteemployee">Delete Employee</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/" component={Home2} exact />
//         <Route path="/employees" component={EmployeeList2} exact />
//         <Route path="/createemployee" component={CreateEmployee2} exact />
//         <Route path="/deleteemployee" component={DeleteEmployee2} exact />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

// Question 3:
// Tách các file api trong question 1 ra giống như mục API Organization
// trong slide

// function App(props) {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/employees">Employee List</Link>
//           </li>
//           <li>
//             <Link to="/createemployee">Create Employee</Link>
//           </li>
//           <li>
//             <Link to="/deleteemployee">Delete Employee</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/" component={Home3} exact />
//         <Route path="/employees" component={EmployeeList3} exact />
//         <Route path="/createemployee" component={CreateEmployee3} exact />
//         <Route path="/deleteemployee" component={DeleteEmployee3} exact />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

// Exercise 2: Higher-Order Components
// Question 1: Reuse code, maintain
// Gõ lại VD1 loading1

// function App(props) {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/employees">Employee List</Link>
//           </li>
//           <li>
//             <Link to="/users">User List</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/" component={Home211} exact />
//         <Route path="/employees" component={EmployeeContainer211} exact />
//         <Route path="/users" component={UserContainer211} exact />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

// Exercise 2: Higher-Order Components
// Question 1: Reuse code, maintain
// Gõ lại VD1 loading2

// function App(props) {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/employees">Employee List</Link>
//           </li>
//           <li>
//             <Link to="/users">User List</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/" component={Home212} exact />
//         <Route path="/employees" component={EmployeeContainer212} exact />
//         <Route path="/users" component={UserContainer212} exact />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

// Exercise 2: Higher-Order Components
// Question 1: Reuse code, maintain
// Gõ lại VD1 loading 2 DisplayName

// function App(props) {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/employees">Employee List</Link>
//           </li>
//           <li>
//             <Link to="/users">User List</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/" component={HomeDpName} exact />
//         <Route path="/employees" component={EmployeeContainerDpName} exact />
//         <Route path="/users" component={UserContainerDpName} exact />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

// Question 2: Conditional component render
// Gõ lại VD2

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isAuthenticated: false,
//     };
//   }

//   render() {
//     return (
//       <AuthenticatedContext22.Provider value={this.state.isAuthenticated}>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/employees">Employee List (Protected)</Link>
//               </li>
//               <li>
//                 <Link to="/users">User List</Link>
//               </li>
//             </ul>
//           </nav>

//           <Switch>
//             <Route path="/" component={Home22} exact />
//             <Route path="/employees" component={EmployeeContainer22} exact />
//             <Route path="/users" component={UserContainer22} exact />
//             <Redirect to="/" />
//           </Switch>
//         </div>
//       </AuthenticatedContext22.Provider>
//     );
//   }
// }

// Question 3: Provide props
// Gõ lại VD3, VD4 styling

// class App extends React.Component {
//   render() {
//     const HelloWithStylling = WithStyling(Hello);

//     return <HelloWithStylling name="Nguyen Van A" />;
//   }
// }

// Question 4: nested HOC default Props
// Gõ lại VD5

// class App extends React.Component {
//   render() {
//     const HelloWithDefaultName = WithDefaultName(HelloDefault);

//     return <HelloWithDefaultName name="Nguyen Van A" />;
//   }
// }

// Exercise 3: Render props
// Question 1: Syntax
// Gõ lại theo syntax trong slide

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <UsingComponent />
//       </div>
//     );
//   }
// }

// Question 2:
// Gõ lại VD1 trong slide theo cả 2 cách sử dụng HOC và render props
// hoc

// class App extends React.Component {
//   render() {
//     const MyComponentwithMouse = withMouse(MyComponent);

//     return <MyComponentwithMouse />;
//   }
// }

// Question 2:
// Gõ lại VD1 trong slide theo cả 2 cách sử dụng HOC và render props
// render props

// class App extends React.Component {
//   render() {
//     return <MyComponentRenderProps />;
//   }
// }

// Question 3: Convert render props to HOC
// Gõ lại VD2 trong slide

// class App extends React.Component {
//   render() {
//     const MyComponentWithMouse = WithMouse33(MyComponent33);

//     return <MyComponentWithMouse />;
//   }
// }

// Question 4: render children
// Code lại Question 1 theo cách sử dụng props.children

// class App extends React.Component {
//   render() {
//     return <MyComponent34 />;
//   }
// }

// Question 5: Practices
// Code lại theo VD sau Creating a counter
// a tao bo dem

// class App extends React.Component {
//   render() {
//     return (
//       <Wrapper
//         render={({ increment, decrement, count }) => (
//           <div>
//             <div>
//               <h3>Render Props Counter</h3>
//             </div>
//             <div>
//               <p>{count}</p>
//               <button onClick={() => increment()}>Increment</button>
//               <button onClick={() => decrement()}>Decrement</button>
//             </div>
//           </div>
//         )}
//       />
//     );
//   }
// }

// Tạo danh sách dữ liệu
//Creating a data list

// class App extends React.Component {
//   render() {
//     return (
//       <WrapperList
//         link="https://6256a008e07d2c9a6709d7a1.mockapi.io"
//         render={({ list, isLoading, error }) => (
//           <div>
//             <h2>Random Users</h2>
//             {error ? <p>{error.message}</p> : null}
//             {isLoading ? (
//               <h2>Loading...</h2>
//             ) : (
//               <ul>
//                 {list.map((user) => (
//                   <li key={user.id}>{user.name}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}
//       />
//     );
//   }
// }

// const App = () => {
//   return (
//     <WrapperList
// link="https://6256a008e07d2c9a6709d7a1.mockapi.io"
//       render={({ list, isLoading, error }) => (
//         <div>
//           <h2>Random Users</h2>
//           {error ? <p>{error.message}</p> : null}
//           {isLoading ? (
//             <h2>Loading...</h2>
//           ) : (
//             <ul>
//               {list.map((user) => (
//                 <li key={user.id}>{user.name}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     />
//   );
// };

// c tao mat dong ho

class App extends React.Component {
  render = () => (
    <Fragment>
      <Watch face={(date) => <DayFace date={date} />} />
      <Watch />
      <Watch face={(date) => <AnalogFace date={date} />} />
      <Watch face={(date) => <DateFace date={date} />} />
      <Watch face={(date) => <SecondsFace date={date} />} />
    </Fragment>
  );
}

export default App;
