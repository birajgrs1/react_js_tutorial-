// // import logo from "./logo.svg";
import "./App.css";
// import DemoClassComponent from "./Component/DemoClassComponent";
import Header from "./Component/Header";
import Product from "./Component/Product";

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

      {/* This is parent component */}
      {/* <Product productDetails={productDatas} /> */}
      <Product title="Laptop" price="80000" />
      {/* <p>
        Product details of Lenovo V15 celeron Laptop 4GB,256GB SSD,15.6 inch
        Display Processor: Intel Celeron processor N4020, base speed 1.1 Ghz,
        max speed 2.8 Ghz, 2 Cores, 4 MB smart cache | Memory: 4GB DDR4 RAM 2400
        MHz | Storage: 256GB SSD Display: 15.6-inch screen with (1920x1080) FHD
        Antiglare display |
      </p> */}
      <button>Buy now</button>
      <Product />

      <Product title="Mobile" price="20000" />
      {/* <p>
        Product details of OnePlus Nord N30SE 5G | 4GB RAM, 128GB Storage | 5000
        mAh Battery
      </p> */}
      <button>Buy now</button>

      <Product />

      <Product title="Headphone" price="1000" />
      {/* <p>
        Product details of X-Age Conve Up Beat W1 Wired Headphone - (Xwh01) |
        Ergonomic Design Comfortable Headphone Impedance: 32Ω: These headphones
        have an impedance of 32 ohms, which is a common impedance level for
        headphones. This level of impedance ensures compatibility with a wide
        range of audio devices, including smartphones, laptops, and audio
        players.
      </p> */}
      <button>Buy now</button>
    </div>
  );
}

export default App;
