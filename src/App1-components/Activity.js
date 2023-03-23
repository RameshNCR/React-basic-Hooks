import _ from "lodash";
import {v4 as uuid} from "uuid";
function Activity(props){
  let keys=_.keys(props.data);
  let values = _.values(props.data)
  console.log(props.data);
  if(_.isUndefined(props.data)){
    return null;
  }
  return(
    <div className="Activity">
      <table>
          <tbody>
            <tr>
              {keys.map((k)=>(
                <td key={uuid()} >{k}</td>
              ))}
            </tr>
            <tr>
              {values.map((v)=>(
                <td key={uuid()}>{v}</td>
              ))}
            </tr>
          </tbody>
      </table>
    </div>
  )
}
export default Activity;