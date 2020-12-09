import React from "react";
import "./style.css";


function htmlHeader(props) {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span class="navbar-brand" >User Directory</span>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <form className="form-inline my-2 my-lg-0">
                        <button type="button" className="btn btn-primary" id="btn2" onClick={props.filterName}>Sort by Name </button>
                        <button type="button" className="btn btn-primary" id="btn3" onClick={props.filterDepartment}>Sort by Department</button>
                    </form>
                </li>
            </ul>
        </nav>
    );
}

export default htmlHeader;