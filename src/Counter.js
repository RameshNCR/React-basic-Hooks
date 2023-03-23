import { useReducer } from "react";
function reducer(state,action){
  switch(action.type){
    case "Increment" :
      return {
        count : state.count + 1
      };
    case "Decrement" :
      return {
        count : state.count - 1
      }
    case "Reset" :
      return {
        count : 0
      }
    default:
      return {
        count : state.count
      }
  }

}
// import { useState } from "react";

const Counter = () => {
  const [count,dispatch]=useReducer(reducer,{count:0});
  // const [count,setcount]=useState(0);
  return (
    <div className="Counter">
      <h1>Count : {count.count}</h1>
      <button onClick = {() => dispatch({type : "Increment"})}>Increment</button>
      <button onClick = {() =>dispatch({type : "Decrement"})}>Decrement</button>
      <button onClick = {() =>dispatch({type : "Reset"})}>Reset</button>
      
      {/* <h2> Count : {count}</h2>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>
      <button onClick={()=>{setcount(count-1)}}>Decrement</button>
      <button onClick={()=>{setcount(0)}}>Reset</button> */}
    </div>
  )
}
export default Counter;