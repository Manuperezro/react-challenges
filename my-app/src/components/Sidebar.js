import React from 'react'
import css from "./css/Sidebar.module.css"

function Sidebar() {
    return (
        <div className={css.sidebar} >
            <a href = "#." target= "_blank">My Photos </a>
            <a href = "#." target= "_blank">My Illustrations </a>
            <a href = "#." target= "_blank">My Paintings</a>
        </div>
    )
}

export default Sidebar

// import React from "react";

// const Sidebar  = (props) => {
//     return  <a>{props.link1} {props.link2} {props.link3}</a>
// };

// export default Sidebar;