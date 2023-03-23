import { useContext } from "react";
import {UserContextName} from "../../App6"
const ComponentC = () => {
  const name = useContext(UserContextName);
  return (
    <div className="C">
      <h2>Component C</h2>
      <h1>HI {name}</h1>
    </div>
  )
}
export default ComponentC;