import React from "react";
import "./style.css";


function htmlMain(props) {
    console.log(props);
    return (
        <main className="wrap">
        <div class="card">
        <div class="card-header">
        <strong>Name: </strong>{props.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Position: </strong>{props.position}</li>
          <li class="list-group-item"> <strong>Department: </strong>{props.department}</li>
          <li class="list-group-item"><strong>Email: </strong>{props.email}</li>
        </ul>
      </div>
      </main>
    )
    
}


export default htmlMain;
