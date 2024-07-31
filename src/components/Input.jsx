import React from "react";

export default function Input(props){
    return (
        <input type="text" className="px-5 py-2 w-1/2 rounded-md" placeholder={props.placeholder}/>
    )
}