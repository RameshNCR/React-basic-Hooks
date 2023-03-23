import React from "react";

class Lifcycle extends React.Component{
  constructor(props){
    super(props);
    this.state = {date : new Date()};
    // console.log(" Child constructor");
  }

  componentDidMount(){
    this.timerId = setInterval(()=>{
      this.timer()
    },1000)
    // console.log("Child Component Did Mount");
  }

  componentWillUnmount(){
    // console.log(" child component will Unmount");
    clearInterval(this.timerId);
  }

  // componentDidUpdate(prevProps,prevState){
  //   console.log("PreviousProps", prevProps);
  //   console.log("PreviousState", prevState);
  // }

  timer(){
    this.setState({
      date : new Date()
    })
  }

  render(){
    // console.log("Child Renderd")
    return(
      <div className="Lifcycle">
        <h1>Timer</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.componentWillUnmount.bind(this)}>Stop the Timer</button>
      </div>
    )
  }
}
export default Lifcycle;