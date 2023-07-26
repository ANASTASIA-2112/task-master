import React from './OnOff.module.css';
import {useState} from "react";



export type OnOffPropsType = {
    onChange: (on:boolean) => void
    defaultOn?:boolean
    defaultOff?:boolean

}
//есть в сторибук

export function UncontrolledOnOff (props: OnOffPropsType) {
    let [on,setOn]=useState(props.defaultOn ? props.defaultOn:false)

    let onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        background: on ? "green" : "white"
    };

    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        background: on ? "white" : "red"
    };
    let indecatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: on ?"green" : "red"

    };
    const onClickFalse =()=> {
        {setOn(true)
            props.onChange(true)}
    }
    const offClickTrue =()=> {
        {setOn(false)
            props.onChange(false)}
    }
    return (
        <div>
            <div style={onStyle} onClick={ onClickFalse }>On</div>
            <div style={offStyle} onClick={ offClickTrue}>Off</div>
            <div style={indecatorStyle}></div>
        </div>
    );
};

