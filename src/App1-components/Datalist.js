import "./Datalist.css";
import _ from "lodash";
import { useState } from "react";
import Activity from './Activity';
import Public from './Public';
function Datalist(props){
  let [detail,setdetail]=useState(true);
  let [api,setapi]=useState('https://api.publicapis.org/entries');
  let [type,settype]=useState('Public');

  function change(){
    setdetail(!detail);
    if(detail){
      setapi('https://www.boredapi.com/api/activity');
      settype('Activity')
    }else{
      setapi('https://api.publicapis.org/entries');
      settype('Public');
    }
    props.change(api,type);
  }

  let datas=props.datas;
  let type1=props.type;
    return(
        <div className="DataList">
          <button onClick={change}>change</button>
          {(_.isEqual(type1,'Activity') && _.isEqual(_.keys(datas),['activity','type','participants','price','link','key','accessibility']))?
          <Activity data={datas}></Activity> :
          <Public data={datas}></Public>}
        </div>
    )
}
export default Datalist;