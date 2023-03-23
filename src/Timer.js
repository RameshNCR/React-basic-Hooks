import { useEffect, useRef } from "react";

const Timer = () => {
  const TimerId = useRef(null);
  useEffect(()=>{
    const Timer = setInterval(() => {document.getElementById("demo").innerHTML = new Date().toLocaleTimeString()},1000);
    TimerId.current = Timer;

    return () => {
      clearInterval(TimerId.current)
    }
  },[])

  const stoper = () => {
    clearInterval (TimerId.current)
  }
  return (
    <div className="Timer">
      <h1 id="demo">{new Date().toLocaleTimeString()}</h1>
      <button onClick={stoper}>Stop</button>
    </div>
  )
}
export default Timer;