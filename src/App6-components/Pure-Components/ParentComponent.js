import React,{Component} from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component{
  constructor(){
    super()
    this.state = {
      name : "Ramesh"
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name : "Ramesh"
      })
    },1000)
  }
  render(){
    console.log("************Parent Comp Render******************")
    return (
      <div className="ParentComponent">
        ParentComponent
        <PureComp name = {this.state.name}/>
        <RegularComp name = {this.state.name}/>
      </div>
    )
  }
}
export default ParentComp;