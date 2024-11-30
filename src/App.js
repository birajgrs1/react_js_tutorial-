// import logo from "./logo.svg";
import "./App.css";
// import DemoClassComponent from "./Component/DemoClassComponent";
// import Header from "./Component/Header";
import Product from "./Component/Product";
// import EventHandler from "./Component/EventHandler";
import Nav from "./Component/Nav";
import ListItems from "./Component/ListItems";

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
  /*
  //Creating object
  const productDatas={
    title: "Laptop",
    price: "80000",
    brand: "Lenovo"
  }
  */

  let isChosen = true;

  return (
    <>
      {/* Example of inline CSS: */}
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "yellowgreen",
        }}
      > */}

      {/* <Header /> */}

      {/* <p>Hello, World!</p> */}

      {/* <DemoClassComponent /> */}

      {/* This is parent component */}
      {/* <Product productDetails={productDatas} /> */}

      {/* <Product title="Laptop" price="80000" /> */}
      {/* <button>Buy now</button> */}
      {/* <Product /> */}
      {/* <Product title="Mobile" price="20000" /> */}
      {/* <button>Buy now</button> */}
      {/* <Product /> */}
      {/* <Product title="Headphone" price="1000" /> */}
      {/* <button>Buy now</button> */}
      {/* <Product /> */}

      {/* Event handling */}
      {/* <EventHandler /> */}
      

      <Nav />
      {/* Using conditional rendering ---> 'logical operator' */}
      {isChosen && <Product />}

      <ListItems/>
      
    </>
  );
}

export default App;
