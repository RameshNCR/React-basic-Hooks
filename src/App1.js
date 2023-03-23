import { useEffect, useRef, useState} from "react";
import Datalist from "./App1-components/Datalist";
import _ from "lodash";
function App1(){
	let [data,setdata]=useState();;
	let start=useRef(true);
	let [api,setapi]=useState('https://www.boredapi.com/api/activity');
	let [type,settype]=useState('Activity');

	useEffect(()=>{
		start.current=true;
		if(start.current){
			start.current=false;
			async function getdata(){
				let response = await fetch(api);
				var result = await response.json();
				setdata(result)
			}
			getdata();
		}
	},[api])

	function change(det,type1){
		setapi(det);
		settype(type1);
	}

	if(_.isUndefined(data)){
		return null;
	}
	
  return(
    <div className="App1">
			<Datalist datas={data} type={type} api={api} change={change}></Datalist>
    </div>
    )
}
export default App1;