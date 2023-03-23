function Details(props){
    return(
        <div className="Details">
                <td>{props.Brand}</td>
                <td>{props.Model}</td>
                <td>{props.Price}</td>
        </div>
    )
}
export default Details;