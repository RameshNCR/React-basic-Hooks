import React from "react";
let Listing=React.memo(function Listing(props){
  function addtoCart(){
    props.addtocart();
  }
  console.log(props.data);
  return(
    <div className="Listing">
      <h1>{props.data}</h1>
      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  )
})
export default Listing;

// import React from "react";
// React.memo(function Listing(props){
//   function addtoCart(){
//     props.addtoCart();
//   }
//   return(
//     <div className="Listing">
//       <h1>{props.data}</h1>
//       <button onClick={addtoCart}></button>
//     </div>
//   )
// })

// export default Listing;