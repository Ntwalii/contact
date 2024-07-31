import React from "react";
import Button from "./Button";
import Input from "./Input";
export default function ContactForm(props){
    return (
        <div className="ml-28 mt-20 flex flex-col gap-5">
        <p className="text-3xl font-bold text-white">{props.title}</p>
        <hr className="w-16 h-1 bg-blue-100"/>
        <p className="text-white">{props.subtitle}</p>
        <form action="" className="flex flex-col gap-5 my-7">
            <div className="flex gap-10">
                <Input
                placeholder="Name"
                />
                <Input
                placeholder="Email"
                />
            </div>
            <textarea className="px-5 py-2 h-28 w-full rounded-sm mb-5" placeholder={props.textarea} id=""></textarea>
            <Button 
    placeholder={"SEND MESSAGE"}
    />
        </form>
</div>
    )
}