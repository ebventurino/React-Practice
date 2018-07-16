import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


export default props => {
    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.employee.name}
                </h5>
                <p className="card-text">{props.employee.name}</p>
                {
                    <Link to={`/employees/${props.employee.id}`}
                        className="card-link">
                        Details
                </Link>
                }
                <a href="./employees" onClick={() => props.checkOutEmployee(props.employee.id)}>Delete</a>
            </div>
        </div>
    )
}

