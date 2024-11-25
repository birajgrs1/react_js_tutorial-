// // import logo from "./logo.svg";
import "./App.css";
// import DemoClassComponent from "./Component/DemoClassComponent";
import Header from "./Component/Header";

// function App() {
//   return (
//     <div>
//       {/* <h1>Hello World! </h1>
//       <p>This is my First Project in React Js.</p>

//        <header className="App-header">
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
//       </header> */}
//     </div>
//   );
// }

// export default App;

/*
Functional Component in reactjs

function sayHello() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is functional component demo in reactjs.</p>
    </>
  );
}
export default sayHello;
 */

function App() {
  return (
    <div
    // Inline CSS demo
    /*
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "yellowgreen",
      }}
        */
    >
     <Header />
      {/* <p>Hello, World!</p>  */}
    
      {/* <DemoClassComponent /> */}
    </div>
  );
}

export default App;
