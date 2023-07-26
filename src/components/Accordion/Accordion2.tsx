
import React from "./Accordiion2.module.css";

export type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    accordionCollapsed:boolean
}

//есть в сторибук
export function Accordion2(props: AccordionPropsType) {
    return <div>
        <AccordionTitle  title={props.titleValue} onChange={props.onChange}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>

}

export type AccordionTitlePropsType = {
   title:string
    onChange:() => void
}
export function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={(e)=>props.onChange()}>--{props.title}--</h3>
}

type AccordionBodyPropsType = {

}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("body rendering")
    return <ul>
        <li>15</li>
        <li>20</li>
        <li>35</li>
    </ul>
}


