


// This is child component

const Product = (props) =>{
    // console.log(props.productDetails);
    return(
        <div>
             {/* <h5>Product: {props.title}</h5>
            <p>Price: {props.price}</p>  */}

            <h5>Product: {props.title}</h5>
            <span>Price: {props.price}</span>
            {props.children}
             
{/* 
            <h5>Product: {props.productDetails.title}</h5>
            <p>Price: {props.productDetails.price}</p>
            <p>Brand: {props.productDetails.brand}</p> */}
        </div>
    );
}

export default Product;