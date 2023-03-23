import { useMemo, useState } from "react";

function Usememo(){
  const[first,setfirst] = useState(0);
  const[second,setsecond] = useState(0);
  let IncrementOne = () => {
    setfirst(first+1);
  }
  let IncrementTwo=() => {
    setsecond(second+1);
  }
  let isEven = useMemo(() => {
    let i=0;
    while (i<2000000000) i++
    return first %2 === 0;
  },[first])
  return(
    <div className="Usememo">
      <div>
        <button onClick = {IncrementOne}>First :{first}</button>
        <span>{isEven ?'Even':'odd'}</span>
      </div>
      <div>
      <button onClick = {IncrementTwo}>Second :{second}</button>
      </div>
    </div>
  )
}
export default Usememo;