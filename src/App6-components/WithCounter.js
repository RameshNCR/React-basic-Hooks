import React from "react";
import _ from "lodash"

const WithCounter = (WrappedComponent) => {
  class Withcounter extends React.Component{
    constructor(){
      super()
      this.state = {
        count : 5,
        Incrementer : 1
      }
    }
    IncremntCount = () => {
      this.setState((prevState) => {
        return {
          ...prevState, count : prevState.count + prevState.Incrementer
        }
      })
    }
    Incrementer = (value) => {
      this.setState((prevState) => {
        return {
          ...prevState, Incrementer : _.toNumber(value)
        }
      })
    }
    render(){
      return <WrappedComponent count = {this.state.count} IncrementCount={this.IncremntCount} Incrementer= {this.Incrementer.bind(this)} value = {this.state.Incrementer} {...this.props}/>
    }
  }
  return Withcounter
}

export default WithCounter;