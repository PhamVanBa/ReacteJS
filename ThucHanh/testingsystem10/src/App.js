import "./App.css";
//import React from "react";
import todoApi from "./exercise1/question1/1. Middleware/redux-thunk/VD1/api/TodoApi";
import TodoList from "./exercise1/question1/1. Middleware/redux-thunk/VD1/components/TodoList";
import { getListTodoAction } from "./exercise1/question1/1. Middleware/redux-thunk/VD1/redux/actionCreators/todoActionCreator";
// vd 1
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD1/redux/store";
import { getListTodoAction2 } from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Error/redux/actionCreators/todoActionCreator";
import TodoList2 from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Error/api/TodoApi2";
// vd2 error
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Error/redux/store";
// vd2 redux-thunk
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Redux-thunk/redux/store";
import { getListTodoAsyncAction22 } from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Redux-thunk/redux/actionCreators/todoActionCreator22";
import TodoList22 from "./exercise1/question1/1. Middleware/redux-thunk/VD2/Redux-thunk/components/TodoList22";
// VD3
//import store from "./exercise1/question1/1. Middleware/redux-thunk/VD3/redux/store";
import { getListTodoAsyncAction3 } from "./exercise1/question1/1. Middleware/redux-thunk/VD3/redux/actionCreators/todoActionCreator3";
import TodoList3 from "./exercise1/question1/1. Middleware/redux-thunk/VD3/components/TodoList3";
import WithLoading from "./exercise1/question1/1. Middleware/redux-thunk/VD3/hoc/withLoading";
//import {selectListTodos,selectLoading,} from "./exercise1/question1/1. Middleware/redux-thunk/VD3/redux/selectors/todoSelector";
import React, { useEffect, useState } from "react";
import TodoList21 from "./exercise2/question1/2. Redux DevTools/VD1/components/todo/TodoList21";
import Counter from "./exercise2/question1/2. Redux DevTools/VD1/components/counter/Counter";
import AddTodoButton from "./exercise2/question1/2. Redux DevTools/VD1/components/todo/AddTodoButton";
import WithLoading22 from "./exercise2/question1/2. Redux DevTools/VD2/hoc/withLoading212";
// vd2 redux dev tools
//import store from "./exercise2/question1/2. Redux DevTools/VD2/redux/store";
import {
  selectListTodos212,
  selectLoading212,
} from "./exercise2/question1/2. Redux DevTools/VD2/redux/selectors/todoSelector";
import { getListTodoAsyncAction212 } from "./exercise2/question1/2. Redux DevTools/VD2/redux/actionCreators/todoActionCreator212";
import WithLoading212 from "./exercise2/question1/2. Redux DevTools/VD2/hoc/withLoading212";
import TodoList212 from "./exercise2/question1/2. Redux DevTools/VD2/components/TodoList212";
import Counter31 from "./exercise3/3. Redux Toolkit/VD1/components/Counter31";
import Counter32 from "./exercise3/3. Redux Toolkit/VD2/components/Counter32";
import AddTodoButton33 from "./exercise3/3. Redux Toolkit/VD3/components/AddTodoButton33";
import TodoList33 from "./exercise3/3. Redux Toolkit/VD3/components/TodoList33";
import Counter34 from "./exercise3/3. Redux Toolkit/VD4/components/counter/Counter34";
import AddTodoButton34 from "./exercise3/3. Redux Toolkit/VD4/components/todo/AddTodoButton34";
import TodoList34 from "./exercise3/3. Redux Toolkit/VD4/components/todo/TodoList34";
// vd5 redux toolkit
//import store from "./exercise3/3. Redux Toolkit/VD5/redux/store";
import TodoList35 from "./exercise3/3. Redux Toolkit/VD5/components/TodoList35";
import { getListTodoAsyncAction35 } from "./exercise3/3. Redux Toolkit/VD5/redux/reducers/todoSlide35";
// vd6 redux toolkit
import store from "./exercise3/3. Redux Toolkit/VD6/redux/store";
import {
  selectListTodos36,
  selectLoading36,
} from "./exercise3/3. Redux Toolkit/VD6/redux/selectors/todoSelector36";
import { getListTodoAsyncAction36 } from "./exercise3/3. Redux Toolkit/VD6/redux/reducers/todoSlide36";
import TodoList36 from "./exercise3/3. Redux Toolkit/VD6/components/TodoList36";
import WithLoading36 from "./exercise3/3. Redux Toolkit/VD6/hoc/withLoading36";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// Exercise 1: Redux-thunk
// Question 1:
// Gõ lại VD1, VD2, VD3, VD4 trong slide

// vdi redux-thunk middleware

// class App extends React.Component {
//   getListEmployee = async () => {
//     try {
//       const todos = await todoApi.getAll();
//       store.dispatch(getListTodoAction(todos));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   componentDidMount() {
//     this.getListEmployee();
//   }

//   render() {
//     return (
//       <div>
//         <TodoList />
//       </div>
//     );
//   }
// }

// vd2 error

// class App extends React.Component {
//   getListEmployee = () => {
//     store.dispatch(getListTodoAction2());
//   };

//   componentDidMount() {
//     this.getListEmployee();
//   }

//   render() {
//     return (
//       <div>
//         <TodoList2 />
//       </div>
//     );
//   }
// }

//vd2 redux-thunk

// class App extends React.Component {
//   getListEmployee = () => {
//     store.dispatch(getListTodoAsyncAction22());
//   };

//   componentDidMount() {
//     this.getListEmployee();
//   }

//   render() {
//     return (
//       <div>
//         <TodoList22 />
//       </div>
//     );
//   }
// }

// vd3

// function App() {
//   const [todos, setTodos] = useState(selectListTodos());
//   const [isLoading, setLoading] = useState(selectLoading());

//   const updateListAndLoading = () =>
//     store.subscribe(() => {
//       setTodos(selectListTodos());
//       setLoading(selectLoading());
//     });

//   updateListAndLoading();

//   const getListEmployee = () => {
//     store.dispatch(getListTodoAsyncAction3());
//   };

//   useEffect(() => {
//     getListEmployee();
//   }, []);

//   const TodoListWithLoading = WithLoading(TodoList3);

//   return (
//     <div>
//       <TodoListWithLoading todos={todos} isLoading={isLoading} />
//     </div>
//   );
// }

// Exercise 2: Redux DevTools
// Question 1:
// Cài đặt và test lại tính năng DevTools như trong slide

// VD1 redux dev tools

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Counter />
//         <AddTodoButton />
//         <TodoList21 />
//       </div>
//     );
//   }
// }

// VD2 redux dev tools

// function App() {
//   const [todos, setTodos] = useState(selectListTodos212());
//   const [isLoading, setLoading] = useState(selectLoading212());

//   const updateListAndLoading = () =>
//     store.subscribe(() => {
//       setTodos(selectListTodos212());
//       setLoading(selectLoading212());
//     });

//   updateListAndLoading();

//   const getListEmployee = () => {
//     store.dispatch(getListTodoAsyncAction212());
//   };

//   useEffect(() => {
//     getListEmployee();
//   }, []);

//   const TodoListWithLoading = WithLoading212(TodoList212);

//   return (
//     <div>
//       <TodoListWithLoading todos={todos} isLoading={isLoading} />
//     </div>
//   );
// }

// Exercise 3: Redux Toolkit
// Question 1:
// Gõ lại VD1, VD2, VD3, VD4, VD5, VD6 trong slide

// vd1 redux toolkit counterReducer

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Counter31 />
//       </div>
//     );
//   }
// }

// vd2 redux toolkit counterSlide

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Counter32 />
//       </div>
//     );
//   }
// }

//vd3 redux toolkit counter

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <AddTodoButton33 />
//         <TodoList33 />
//       </div>
//     );
//   }
// }

// vd4 redux toolkit counter todo

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Counter34 />
//         <AddTodoButton34 />
//         <TodoList34 />
//       </div>
//     );
//   }
// }

// VD5

// class App extends React.Component {
//   getListEmployee = () => {
//     store.dispatch(getListTodoAsyncAction35());
//   };

//   componentDidMount() {
//     this.getListEmployee();
//   }

//   render() {
//     return (
//       <div>
//         <TodoList35 />
//       </div>
//     );
//   }
// }

// VD6

function App() {
  const [todos, setTodos] = useState(selectListTodos36());
  const [isLoading, setLoading] = useState(selectLoading36());

  const updateListAndLoading = () =>
    store.subscribe(() => {
      setTodos(selectListTodos36());
      setLoading(selectLoading36());
    });

  updateListAndLoading();

  const getListEmployee = () => {
    store.dispatch(getListTodoAsyncAction36());
  };

  useEffect(() => {
    getListEmployee();
  }, []);

  const TodoListWithLoading = WithLoading36(TodoList36);

  return (
    <div>
      <div>
        <TodoListWithLoading todos={todos} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
