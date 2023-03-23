import React,{PureComponent} from "react";

class PureComp extends PureComponent{
  render(){
    console.log("Pure Comp Render");
    return (
      <div className="PureComp">
        PureComponent
      </div>
    )
  }
}
export default PureComp