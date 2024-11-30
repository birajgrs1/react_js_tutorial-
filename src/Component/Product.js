// This is child component

const Product = () => {
  // console.log(props.productDetails);
  const demoFunction = () =>{
    // console.log("Button Clicked!!!");
    alert("Button Clicked!!!");
  }

 
  return (
    <div>
      {/* <h5>Product: {props.title}</h5>
      <p>Price: {props.price}</p>
      {props.children} */}

      {/* 
            <h5>Product: {props.productDetails.title}</h5>
            <p>Price: {props.productDetails.price}</p>
            <p>Brand: {props.productDetails.brand}</p> */}

      {/* Event Handling in React js  */}
      <h2>This is a product component.</h2>
      <button onClick={demoFunction}>Click Me</button>
    </div>
  );
};

export default Product;
