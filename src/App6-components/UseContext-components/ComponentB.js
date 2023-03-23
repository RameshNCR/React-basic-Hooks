import ComponentC from "./ComponentC";
import { UserContextInitial } from "../../App6";
const ComponentB = () => {
  return (
    <div className="B">
      <h2>Component B</h2>
      <UserContextInitial.Consumer>
        {name => {
          return(<h1>hi {name}</h1>)
        }}
      </UserContextInitial.Consumer>
      <ComponentC/>
    </div>
  )
}
export default ComponentB;