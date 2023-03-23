import { useState } from "react"
import TodoForm from "./App4-Components/TodoForm";
import Todolist from "./App4-Components/Todolist";
import _ from "lodash";

let App4=()=>{
  let [data,setdata] = useState([]);
  function datas(d){
    setdata((data) => {
      return [...data, ...d];
    })
  }
  function dele(id){
    setdata(_.filter(data,(d)=>{
      return d.id !== id;  
    }))
  }
  function colorchange (color, id) {
    let index=_.findIndex(data, (d) => {
      return d.id === id;
    })
    let detail = data.map((d,i) => {
      if(i === index){
        d.color = color
        return d;
      }else{
        return d;
      }
    });
    setdata(detail);
  }
  return (
    <div className = "App4">
      <TodoForm data = {datas}></TodoForm>
      {(_.isEmpty(data)) ? <div className = "Nodata"><h3>There is No data Add one</h3></div> : 
      <Todolist out = {data} remove = {dele} chcolor = {colorchange}></Todolist>}
    </div>
  )
}
export default App4;