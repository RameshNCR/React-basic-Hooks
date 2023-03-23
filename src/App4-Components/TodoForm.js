import { useState } from "react";
import {v4 as uuid} from "uuid";
import "./TodoForm.css";

const TodoForm=(props) => {
  const[work,setwork] = useState('');
  const[date,setdate] = useState('');
  function data(event){
    event.preventDefault();
    const data = [
      {id:uuid(), work:work, date:date, color:'darkorchid'}
    ];
    props.data(data);
    setwork('');
    setdate('');
  }
  return(
    <div className = "TodoForm">
      <h1>Todo Form</h1>
      <div className = "form">
        <form onSubmit = {data}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor = "work">Work : </label>
                  <br></br>
                  <input type = "text" id = "work" onChange = {(event) => {setwork(event.target.value)}} value = {work} required></input>
                </td>
                <td>
                  <label htmlFor = "date">Date : </label>
                  <br/>
                  <input type = "date" id = "date" onChange = {(event) => {setdate(event.target.value)}} value = {date} required></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input className = "button" type = "submit"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}
export default TodoForm;