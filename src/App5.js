import React from "react";
import Lifcycle from "./App5-components/Lifcycle";

class App5 extends React.Component{
  constructor(){
    super();
    this.state = {Count : 0};
    console.log("App Constructor")
  }
  componentDidMount(){
    console.log("App component DidMOunt")
  }
  // componentWillUnmount(){
  //   console.log("App component WillUnmount");
  // }

  componentDidUpdate(prevProps,prevState){
    console.log("PreviousProps", prevProps);
    console.log("PreviousState", prevState);
  }
  Increment(){
    this.setState({Count : this.state.Count +1});
  }
  Decrement(){
    this.setState({Count : this.state.Count -1});
  }
  Reset(){
    this.setState({Count : 0});
  }
  render(){
    console.log("App Redendered");
    return(
      <div>
        <Lifcycle/>
        <h1>Count :{this.state.Count}</h1>
        <button onClick={this.Increment.bind(this)}>Increment</button>
        <button onClick={this.Decrement.bind(this)}>Deccrement</button>
        <button onClick={()=>{this.Reset.bind(this)}}>Reset</button>
      </div>
    )
  }
}
export default App5;