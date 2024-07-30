import React from "react";

export default function Button({placeholder}){
    return (
        <button className="px-5 py-2 border w-48 border-white text-white rounded-3xl">{placeholder}</button>
    )
}