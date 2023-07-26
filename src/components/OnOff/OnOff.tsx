
import {useState} from "react";
import React from "./OnOff.module.css";



type PropsType = {
    onChange:(on:boolean)=>void
    on:boolean
}

export function  OnOff(props:PropsType) {

    let [on,setOn] = useState(false);

    const onStyle ={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        background:  on ? "turquoise": "white"
    };
    const offStyle ={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        background: on ? "white": "cornflowerblue"
    };
    const indecatorStyle ={
        width:"10px",
        height:"10px",
        borderRadius:"15px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        background: on ? "turquoise": "cornflowerblue"

    };


    const onClick =()=> {
        {setOn(true)
            props.onChange(true)}
    }
    const offClick =()=> {
        {setOn(false)
            props.onChange(false)}
    }

    return (
        <div>
        <div style={onStyle}
             onClick={onClick}>On</div>
        <div style={offStyle}
             onClick={offClick}>Off</div>
        <div style={indecatorStyle}></div>
        </div>
    );
};

