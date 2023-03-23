import { useState } from "react";

function Newdata(props){
    let [Brand,setBrand]=useState('');
    let [Model,setModel]=useState('');
    let [Price,setPrice]=useState('');
    function addlist(event){
        event.preventDefault();
        let datas=[
            {id:Math.floor(Math.random()*10000), Brand:Brand, Model:Model, Price:Price}
        ]
        props.details(datas);
        setBrand('');
        setModel('');
        setPrice('');
    }
    return(
        <div className="Newdata">
            <div>
            <h2>Enter the details of the mobile you want to add</h2>
            </div>
            <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="Brand">Brand : </label>
                                <input type='text' id="Brand" value={Brand} onChange={(event)=>{setBrand(event.target.value)}}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="model">Model : </label>
                                <input type='text'id='model' value={Model} onChange={(event)=>{setModel(event.target.value)}}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="Price">Price : </label>
                                <input type='number' id="Price" value={Price} onChange={(event)=>{setPrice(event.target.value)}}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="submit" onClick={addlist}>submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </div>
    )
}
export default Newdata;