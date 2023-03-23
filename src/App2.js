import { useCallback, useState } from "react";
import Listing from "./App2-components/Listing";
function App2(){
  const data=["HI","Bye"];
  const[count,setcount]=useState(0);
  const[cart,setcart]=useState(0);

  let addtocart = useCallback(()=>{
    setcart(cart+1)
  },[cart]);
  return(
    <div className="App2">
      <h1>Count :{count}</h1>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>
      <h1>Cart : {cart}</h1>
      <div>
        {data.map((d,i)=>(
          <Listing key={i} data={d} addtocart={addtocart} ></Listing>
        ))}
      </div>
    </div>
  )
}
export default App2;