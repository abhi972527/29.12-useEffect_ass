// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import { Form } from "./components/Form";
// import { Todo } from "./components/Todo";
import { Timer } from "./components/Timer";

// function App() {
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="App">
//       <h3>Count is: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Add 1</button>
//       <Todo />
//     </div>
//   );
// }


function App() {
  const [show, setShow] = useState(true);
  //  const count = 0;
  return (
    <div className="App">
      {/* <h3>Count is: {count}</h3> */}
      {/* <button onClick={() => setCount(count + 1)}>Add 1</button> */}
      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}



export default App;
