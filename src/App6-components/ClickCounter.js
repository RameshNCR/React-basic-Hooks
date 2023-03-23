import { Component,React } from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends Component{
  render(){
    const {IncrementCount, count, Incrementer, value} = this.props
    return (
      <div className="ClickCounter">
        <input type="number"  onChange={(e)=>{Incrementer(e.target.value)}}></input>
        <h2>{count}</h2>
        <button onClick={IncrementCount}>Increment By {value}</button>
      </div>
    )
  }
}
export default WithCounter(ClickCounter)