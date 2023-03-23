import React from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
class Data extends React.Component{
  constructor(){
    super()
    this.state = {
      name : "ramesh"
    }
  }
  render(){
    return <h1>HI {this.state.name} welcome to our application</h1>
  }
}

export default Data
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Data/>);
// reportWebVitals();