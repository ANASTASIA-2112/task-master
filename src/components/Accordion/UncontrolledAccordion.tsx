import React from "./UncontrolledAccordion.module.css";
import {useState} from "react";



type UncontroledAccordionProps = {
    titleValue: string

}

export function UncontroledAccordion(props: UncontroledAccordionProps) {

    let [collapsed, SetCollapsed] = useState(false);


    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button onClick={() => SetCollapsed(!collapsed)}>Toggle</button>
        {!collapsed && <AccordionBody/>}
    </div>

}
type  AccordionTitlePropsType={
    title:string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 className={"AccordionTitle"}>{props.title}</h3>
}
type   AccordionBodyPropsType={

}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        <li>15</li>
        <li>20</li>
        <li>35</li>
    </ul>
}

export default UncontroledAccordion;
