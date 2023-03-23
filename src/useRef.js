import { useEffect, useRef } from "react";
import _ from "lodash";

const UseRef = () => {
  const color = useRef('blue');
  const colors = ['red', 'black', 'blue', 'green', 'violet', 'orange', 'yellow', 'orangered'];
  const changeColor = () => {
    color.current.style.color = colors[_.random(0,_.size(colors))];
  }

  useEffect(()=>{
    console.log(color.current);
  },[]);

  return (
    <div className="UseRef">
      <header>
      <button onClick={changeColor}>click me</button>
      <p ref={color}>{color.current}</p>
      </header>
    </div>
  )
}
export default UseRef ;