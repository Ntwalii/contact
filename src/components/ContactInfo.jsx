import React from "react";

export default function ContactInfo(props){
    return(
        <div className="text-white ml-20 flex flex-col gap-5 my-40">
        <p className="text-xl mb-5">{props.title}</p>
        <div className="flex flex-col gap-2">
        <p><i className="fa-solid fa-location-dot text-white mr-2"></i> {props.address}</p>
        <p>{props.addressBody}</p></div>
        <div className="flex flex-col gap-2">
        <p><i className="fa-solid fa-phone text-white mr-2"></i> {props.phone}</p>
        <p>{props.phoneBody}</p></div>
        <div className="flex flex-col gap-2">
        <p><i class="fa-regular fa-envelope  mr-2"></i> {props.mail}</p>
        <p>{props.emailBody}</p></div>
        </div>
    )
}