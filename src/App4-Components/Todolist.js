import {v4 as uuid} from "uuid";
import Todoitem from "./Todoitem";
import "./Todolist.css";
import React from "react";

let Todolist=(props) => {
  let datas=props.out;
  let dele = (id) => {
    props.remove(id)
  }
let change=(color,id) => {
  props.chcolor(color,id);
}
  return(
    <div className="Todolist">
      {datas.map((item) => (
        <Todoitem key={uuid()} id = {item.id} work = {item.work} date = {item.date} color = {item.color} remove = {dele} change = {change}></Todoitem>
      ))}
    </div>
  )
}
export default Todolist;