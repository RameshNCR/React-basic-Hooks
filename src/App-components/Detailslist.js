// import Details from "./Details";
import "./Detailslist.css"

function Detailslist(props){
    let data=props.details;
    return(
        <div className="Detailslist">
            <h1>Mobile Details</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        {/* <td>Brand</td>
                        <td>Model</td>
                        <td>Price</td> */}
                    </tr>
                    {/* {data.map((data)=>(<Details id={data.id} Brand={data.Brand} Model={data.Model} Price={data.Price}></Details>))} */}
                    {data.map((data)=>(
                        <tr key={data.id}>
                        <td>{data.Brand}</td>
                        <td>{data.Model}</td>
                        <td>{data.Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Detailslist;