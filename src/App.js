import { useState } from 'react';
import Detailslist from './App-components/Detailslist';
import Newdata from './App-components/Newdata';
import './App.css';

function App() {
  let data=[
    {id:1, Brand:"apple", Model:"14-PRO", Price:140000},
    {id:2, Brand:"Samsung", Model:"S22-ULTRA", Price:150000},
    {id:3, Brand:"Oneplus", Model:"10PRO", Price:80000}
  ]
  let [datas,setdatas]=useState(data);
  function data1(details){
    setdatas((datas)=>{
      return[...details, ...datas]
    });
  }
  return (
    <div className="App">
      <Newdata details={data1}></Newdata>
      <Detailslist details={datas}></Detailslist>
    </div>
  );
}

export default App;