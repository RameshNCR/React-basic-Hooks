import React from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends React.Component{
  render(){
    const {IncrementCount, count} = this.props;
    return (
      <div className="HoverCounter">
        <h2 onMouseOver={IncrementCount}>{this.props.name} Hover {count} Times</h2>
      </div>
    )
  }
}
export default WithCounter(HoverCounter);