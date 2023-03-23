import "./Todoitem.css";
let Todoitem=(props) => {
  function changecolor(){
    props.change('lawngreen',props.id);
  }
  return(
    <div className = "Todoitem" style = {{backgroundColor:props.color}}>
      <table>
        <tbody>
          <tr>
            <td>
                <p><b>{props.work}</b></p>
                <p>{props.date}</p>
            </td>
            <td>
              <button onClick = {changecolor}>complete</button>
              <button onClick={() => {props.remove(props.id)}}>remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Todoitem;