import "./App.css";
import React, { useState, Component, useToggle, useMemo } from "react";

import Example from "./exercise1/question1/Example";
import LessText from "./exercise1/question2/a/LessText";
import Message from "./exercise1/question2/b/Message";
import ListOfThings from "./exercise1/question2/cusestatevoi1mang/ListOfThings";
import LoginForm from "./exercise1/question2/usestatenhieuhon1lan/LoginForm";
import EffectLifecycle from "./exercise2/question1/1. Lifecycle/EffectLifecycle";
import CountryList from "./exercise2/question2/CountryList";
import GrandParentComponent from "./exercise3/question1/1. Context/GrandParentComponent";
import SpoilerAlert from "./exercise3/question2/a/SpoilerAlert";
import Modal from "./exercise3/question2/b/Modal";
import useUserInput from "./exercise3/question2/d/useUserInput";
import useLanguages from "./exercise3/question2/d/useLanguages";
import Clock1 from "./exercise4/question1/1. Normal/Clock1";
import Clock2 from "./exercise4/question1/1. Normal/Clock2";
import Clock1Hook from "./exercise4/question1/2. Hook/Clock1Hook";
import Clock2Hook from "./exercise4/question1/2. Hook/Clock2Hook";
import CutomHook from "./exercise4/question2/a/CutomHook";
import UseToggle from "./exercise4/question2/a/UseToggle";
import ModalHook from "./exercise4/question2/b/ModalHook";
import Component1 from "./exercise4/question3/Component1";
import Component3 from "./exercise4/question3/ Component3";
import Component4 from "./exercise4/question3/Component4";
import Component5 from "./exercise4/question3/Component5";
import Component6 from "./exercise4/question3/Component6";
import Component7 from "./exercise4/question3/Component7";
import MyList from "./exercise5/question2/b/MyList";
import MySequance from "./exercise5/question2/b/MySequance";
import Parent from "./exercise5/question2/b/Parent";
import ParentComponent from "./exercise6/question1/1. Problem/ParentComponent";
import ParentComponentHook from "./exercise6/question1/2. Hook/ParentComponentHook";
import Example11 from "./exercise7/question1/reduceHook1/Example11";
import Example1 from "./exercise7/question1/reduceHook2/Example1";
import Example2 from "./exercise7/question1/reduceHook2/Example2";

// Exercise 1: State Hook
// Question 1:
// Gõ lại VD1 trong slide

// function App() {
//   return (
//     <>
//       <div>
//         <Example />
//       </div>
//     </>
//   );
// }

// Question 2:
// Gõ lại VD sau
// a. https://codesandbox.io/s/3xy0vll4y6

// function App() {
//   return (
//     <>
//       <div>
//         <LessText
//           text={`Focused, hard work is the real key
//       to success. Keep your eyes on the goal,
//       and just keep taking the next step
//       towards completing it.`}
//           maxLength={35}
//         />
//       </div>
//     </>
//   );
// }

// b. https://codesandbox.io/s/7z31woqo9q

// function App() {
//   return (
//     <>
//       <div>
//         <Message />
//       </div>
//     </>
//   );
// }

// c. https://medium.com/javascript-in-plain-english/creating-your-
// second-react-application-d6d50e3e1e91
// useState List

// function App() {
//   return (
//     <>
//       <div>
//         <ListOfThings />
//       </div>
//     </>
//   );
// }

// d. https://daveceddia.com/usestate-hook-examples/

// nhiều cuộc gọi đến useState
// Nếu bạn muốn lưu trữ nhiều giá trị trong một thành phần hàm, bạn có một số tùy chọn:

// gọi useStatenhiều hơn một lần
// nhét mọi thứ vào một vật thể

// function App() {
//   return (
//     <>
//       <div>
//         <LoginForm />
//       </div>
//     </>
//   );
// }

// Exercise 2: Effect Hook
// Question 1:
// Gõ lại Lifecycle, VD No need Clean up, VD1 Clean up trong slide

// function App() {
//   const [randomNumber, setRandomNumber] = useState(Math.random());
//   const [isShow, setShow] = useState(true);

//   const reRender = () => setRandomNumber(Math.random());

//   const toggle = () => setShow(!isShow);

//   return (
//     <div>
//       {isShow && <EffectLifecycle number={randomNumber} />}
//       <button onClick={reRender}>Re-render</button>
//       <button onClick={toggle}>Show/Hide Component</button>
//     </div>
//   );
// }

// Question 2: chỉ call API 1 lần trong component

// Tutorial: https://medium.com/javascript-in-plain-english/react-hooks-
// how-to-use-useeffect-ecea3e90d84f

// function App() {
//   return (
//     <>
//       <div>
//         <CountryList />
//       </div>
//     </>
//   );
// }

// Exercise 3: Context Hook
// Question 1:
// Gõ lại VD trong slide

// function App() {
//   return (
//     <>
//       <div>
//         <GrandParentComponent />
//       </div>
//     </>
//   );
// }

// Question 2:
// Gõ lại VD sau:
// a. https://daveceddia.com/custom-hooks/

// function App() {
//   return (
//     <>
//       <div>
//         <SpoilerAlert />
//       </div>
//     </>
//   );
// }

// b. https://daveceddia.com/open-modal-in-react/

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { isOpen: false };
//   }

//   toggleModal = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.toggleModal}>Open the modal</button>

//         <Modal show={this.state.isOpen} onClose={this.toggleModal}>
//           Here's some content for the modal
//         </Modal>
//       </div>
//     );
//   }
// }

// c. https://blog.bitsrc.io/writing-your-own-custom-hooks-
// 4fbcf77e112e

// d. https://codeburst.io/lets-build-an-app-with-custom-react-hooks-
// 73693ae05450

// const App: React.FC = () => {
//   const searchText = useUserInput("");
//   const languages = useLanguages();
//   const searchableLanguages = useSearchable(
//     languages,
//     searchText.value,
//     (l) => [l.name]
//   );
//   return (
//     <div className="main">
//       <h2 className="text-center uppercase">Programming Languages</h2>
//       <input placeholder="Search languages here..."
//         type="text"
//         className="search-input text-center"
//         {...searchText} />
//       {searchableLanguages.slice(0, 10).map((l) => (
//         <p className="text-center" key={l.id}>{l.name}</p>
//       ))}
//     </div>
//   );
// };

// Exercise 4: Custom Hook
// Question 1:
// Gõ lại VD trong slide
// normal

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Clock1 />
//         <Clock2 />
//       </div>
//     );
//   }
// }

// hook

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Clock1Hook />
//         <Clock2Hook />
//       </div>
//     );
//   }
// }

// Question 2:
// Gõ lại VD sau:
// a. https://daveceddia.com/custom-hooks/

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <CutomHook />
//         <UseToggle />
//       </div>
//     );
//   }
// }

// b. https://daveceddia.com/open-modal-in-react/

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { isOpen: false };
//   }

//   toggleModal = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.toggleModal}>Open the modal</button>

//         <ModalHook show={this.state.isOpen} onClose={this.toggleModal}>
//           Here's some content for the modal
//         </ModalHook>
//       </div>
//     );
//   }
// }

// c. https://blog.bitsrc.io/writing-your-own-custom-hooks-
// 4fbcf77e112e

// d. https://codeburst.io/lets-build-an-app-with-custom-react-hooks-
// 73693ae05450

// Question 3:
// Các Hook hữu ích

// https://blog.bitsrc.io/11-useful-custom-react-hooks-for-your-next-app-
// c66307cf0f0c

// 1. useClippy

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Component1 />
//       </div>
//     );
//   }
// }

// 3. useScript

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Component3 />
//       </div>
//     );
//   }
// }

// 4. useLocalStorage

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Component4 />
//       </div>
//     );
//   }
// }

// 5. useIdb

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Component5 />
//       </div>
//     );
//   }
// }

// 6. use-mouse-action

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Component6 />
//       </div>
//     );
//   }
// }

// 7. useOnlineStatus

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Component7 />
//       </div>
//     );
//   }
// }

// Exercise 5: Memo Hook
// Question 1:
// Gõ lại VD1, VD2 trong slide

// function App() {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);

//   const [counter, setCounter] = useState(0);

//   const sum = (a, b) => {
//     // Calculate
//     console.log("Caculating...");

//     return a + b;
//   };

//   const sumResult = useMemo(() => sum(a, b), [a, b]);

//   return (
//     <div>
//       <form>
//         <label style={{ display: "block" }}>
//           a:
//           <input
//             type="number"
//             value={a}
//             onChange={(e) => setA(e.target.value)}
//           />
//         </label>
//         <label style={{ display: "block" }}>
//           b:
//           <input
//             type="number"
//             value={b}
//             onChange={(e) => setB(e.target.value)}
//           />
//         </label>
//         <label>sum: {sumResult}</label>
//       </form>

//       {/* counter */}
//       <p>Counter: {counter}</p>
//       <button onClick={() => setCounter(counter + 1)}>increse counter</button>
//     </div>
//   );
// }

// Question 2:
// Gõ lại VD sau:
// a. https://www.robinwieruch.de/react-usememo-hook

// function App() {
//   const filteredUsers = users.filter((user) => {
//     console.log("Filter function is running ...");
//     return user.name.toLowerCase().includes(search.toLowerCase());
//   });
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <App />
//       </div>
//     );
//   }
// }

// b. https://dev.to/spukas/react-usememo-for-optimisation-5gna

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MyList />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <MySequance />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Parent />
//       </div>
//     );
//   }
// }

// Exercise 6: Callback Hook
// Question 1:
// Gõ lại VD1, VD2 trong slide

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ParentComponent />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ParentComponentHook />
//       </div>
//     );
//   }
// }

// Question 2:
// Gõ lại VD sau:
// a. https://www.robinwieruch.de/react-usecallback-hook

// b. https://www.c-sharpcorner.com/article/usecallback-hook-in-
// reactjs/

// Exercise 7: Reducer Hook
// Question 1:
// Gõ lại VD1 và VD2 trong slide]

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Example11 />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Example1 />
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Example2 />
      </div>
    );
  }
}

export default App;
