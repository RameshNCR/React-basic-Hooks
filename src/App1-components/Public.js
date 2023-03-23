import _ from "lodash";
import {v4 as uuid} from 'uuid';
function Public(props){
  let datas=props.data.entries
  if(_.isUndefined(datas)){
    return null;
  }
  let keys=_.forEach(_.keys(datas[0]));
  let values=_.map(datas,(d)=>{
    return _.values(d);
  })
  console.log(keys);
  console.log(values);
  return(
    <div className="Public">
      <table>
        <thead>
          <tr>
            {keys.map((d)=>(
              <th key={uuid()}>{d}</th>
            ))}
          </tr>
          {values.map((v)=>(
            <tr key={uuid()}>
              {v.map((vv)=>(
                <td key={uuid()}>{vv}</td>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    </div>
  )
}
export default Public;