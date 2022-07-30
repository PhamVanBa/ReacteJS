import "./App.css";
import React from "react";
import Calculator from "./exercise1/question1/Calculator";
import InputName from "./exercise1/question2/InputName";
//import Calculator from "./exercise1/question3/Calculator";
import CalculatorUSDVN from "./exercise1/question3/CalculatorUSDVN";
import GrandParentComponent from "./exercise2/question1/vd1contextclass/GrandParentComponent";
import GrandParentComponent2 from "./exercise2/question1/vd2contextclass/GrandParentComponent2";
import GrandParentComponent3 from "./exercise2/question1/vd3contextclass/GrandParentComponent3";
import GrandParentComponent4 from "./exercise2/question1/vd4contextclass/GrandParentComponent4";
import GrandParentComponentFunction from "./exercise2/question1/vd1contextfunction/GrandParentComponentFunction";
//import PersonList from "./exercise3/question1/PersonList";
import PersonList2 from "./exercise3/question2/PersonList2";
import { Switch, Route, Link, withRouter, Redirect } from "react-router-dom";
import Home from "./exercise4/question1/Home";
import About from "./exercise4/question1/About";
import PersonList from "./exercise4/question1/PersonList";
import Error from "./exercise4/question1/Error";
import Home2 from "./exercise4/question2/Home2";
import About2 from "./exercise4/question2/About2";
//import PersonList22 from "./exercise4/question2/PersonList22";
import Error2 from "./exercise4/question2/Error2";
import PersonDetail2 from "./exercise4/question2/PersonDetail2";
import Person2 from "./exercise4/question2/Person2";
import HomeNavi from "./exercise4/question8/HomeNavi";
import Page1 from "./exercise4/question8/Page1";
import Page2 from "./exercise4/question8/Page2";
import Page3 from "./exercise4/question8/Page3";
import Page4 from "./exercise4/question8/Page4";
import "./exercise4/question8/AppNavi.css";

// question1 Send data từ parent  child component (down)
// Hãy thiết kế chương trình để người dùng nhập vào độ C và check xem
// nước có thể sôi ở nhiệt độ đó không (nước sôi ở nhiệt độ 100 độ C)

// class App extends React.Component {
//   render() {
//     return <Calculator />;
//   }
// }

// question2 Send data từ child  parent component (up)
// Hãy thiết kế chương trình để người dùng nhập vào tên của họ, sau đó
// hệ thống sẽ in ra text "Hello + tên"

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//     };
//   }

//   receiveInputChanging = (newName) => {
//     this.setState({
//       name: newName,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <InputName
//           name={this.state.name}
//           changeInputName={this.receiveInputChanging}
//         />
//         <div>Hello {this.state.name}</div>
//       </div>
//     );
//   }
// }

// Question 3: Send data giữa các child components
// a) Hãy thiết kế chương trình để người có thể convert độ C và độ F
// Nếu người dùng nhập vào độ C thì hệ thống hiển thị độ F và ngược lại

// class App extends React.Component {
//   render() {
//     return <Calculator />;
//   }
// }

// b) Hãy thiết kế chương trình để người có thể convert VND và USD

// class App extends React.Component {
//   render() {
//     return <CalculatorUSDVN />;
//   }
// }

// Question 1:
// Hãy làm lại VD theo cả 2 cách Class Component
// a) VD1:

// class App extends React.Component {
//   render() {
//     return <GrandParentComponent />;
//   }
// }

// b) VD2:

// class App extends React.Component {
//   render() {
//     return <GrandParentComponent2 />;
//   }
// }

// b) VD3:

// class App extends React.Component {
//   render() {
//     return <GrandParentComponent3 />;
//   }
// }

// b) VD4:

// class App extends React.Component {
//   render() {
//     return <GrandParentComponent4 />;
//   }
// }

// Question 1:
// Hãy làm lại VD theo cả 2 cách Functional Component
// a) VD1:

// class App extends React.Component {
//   render() {
//     return <GrandParentComponentFunction />;
//   }
// }

// Question 1:
// Hãy làm lại VD theo cả 2 cách PersonList là Container và App là
// Container

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         {
//           id: 1,
//           firstName: "Nguyen Van",
//           lastName: "A",
//           age: 20,
//         },
//         {
//           id: 2,
//           firstName: "Nguyen Van",
//           lastName: "B",
//           age: 30,
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <PersonList persons={this.state.persons} />
//       </div>
//     );
//   }
// }

// Question 2:Thiết kế lại form dưới đây
// Sau khi người dùng bấm nút Submit thì sẽ console log ra data user đã
// điền vào.
// Nếu người dùng bấm nút clear thì sẽ reset lại form

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <PersonList2 />
//       </div>
//     );
//   }
// }

// Route (basic)
// Question 1:
// Làm lại VD1

// function App() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/persons">Persons</Link>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//         <Route path="/" component={Home} exact />
//         <Route path="/about" component={About} exact />
//         <Route path="/persons" component={PersonList} />
//         <Route component={Error} />
//       </Switch>
//     </div>
//   );
// }

// Question 2:
// Làm lại VD2

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about2">About</Link>
//             </li>
//             <li>
//               <Link to="/persons2">Persons</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/" component={Home2} exact />
//           <Route path="/about2" component={About2} exact />
//           <Route path="/persons2/:id" component={PersonDetail2} />
//           <Route path="/persons2" component={PersonList22} />
//           <Route component={Error2} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// Question 8:
// Sử dụng <NavLink> để config thành hình như dưới đây (làm theo cả 2
// cách activeStype và activeClassName)

function App(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <br />
          <div className="container">
            <div className="item">
              <li>
                <Link to="/page1">Page1 (Link)</Link>
              </li>
              <li>
                <Link to="/page2">Page2 (Link)</Link>
              </li>
              <li>
                <Link to="/page3">Page3 (Link)</Link>
              </li>
              <li>
                <Link to="/page4">Page4 (Link)</Link>
              </li>
            </div>
            <div className="item">
              <li>
                <button onClick={() => props.history.push("/page1")}>
                  Page1 (history.push())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.push("/page2")}>
                  Page2 (history.push())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.push("/page3")}>
                  Page3 (history.push())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.push("/page4")}>
                  Page4 (history.push())
                </button>
              </li>
            </div>
            <div className="item">
              <li>
                <button onClick={() => props.history.replace("/page1")}>
                  Page1 (history.replace())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.replace("/page2")}>
                  Page2 (history.replace())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.replace("/page3")}>
                  Page3 (history.replace())
                </button>
              </li>
              <li>
                <button onClick={() => props.history.replace("/page4")}>
                  Page4 (history.replace())
                </button>
              </li>
            </div>
          </div>

          <button onClick={() => console.log(props.history)}>
            Print History
          </button>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={HomeNavi} exact />
        <Route path="/page1" component={Page1} exact />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
