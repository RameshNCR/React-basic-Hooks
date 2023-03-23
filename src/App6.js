// import ClickCounter from "./App6-components/ClickCounter";
// import HoverCounter from "./App6-components/HoverCounter";
// import ParentComp from "./App6-components/Pure-Components/ParentComponent";
import { createContext } from "react";
import ComponentA from "./App6-components/UseContext-components/ComponentA";

export const UserContextName = createContext();
export const UserContextInitial = createContext();

const App6 = () => {
  return (
    <div className="App6.js">
      {/* <HoverCounter name = "Ramesh"/>
      <ClickCounter/> */}
      {/* <ParentComp/> */}
      <UserContextName.Provider value="Ramesh">
        <UserContextInitial.Provider value="NCR">
          <ComponentA/>
        </UserContextInitial.Provider>
      </UserContextName.Provider>
    </div>
  )
}
export default App6;