
import React from "./Accordiion.module.css";

export type AccordionPropsType = {
    titleValue: string

    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick: (value:any) => void
    accordionCollapsed: boolean
    /**
     *Elements that are showed when is opened.Each item should be [{ItemType}]
    */
    items: ItemType[]
    onChange: () => void
    /**
     * Optional color of header text
     */
    color?:string



}

 export type  ItemType = {
    title: string
    value: any


}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div className={"accordion"}>
        <AccordionTitle
            title={props.titleValue} color={props.color}
            onClick={props.onChange}
            accordionCollapsed={props.accordionCollapsed}/>
        {!props.accordionCollapsed
            &&
            <AccordionBody accordionCollapsed={props.accordionCollapsed}
                           onChange={props.onChange}
                           titleValue={props.titleValue}/>}
    </div>

}

export type AccordionTitlePropsType = {
    title: string
    accordionCollapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
    color?:string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("title rendering")
    return <h3

        style={{color:props.color ? props.color: "red"}}
        onClick={() => {props.onClick(props.accordionCollapsed)}}>--{props.title}--</h3>
}

type AccordionBodyPropsType = {
    accordionCollapsed:boolean
    titleValue:string
    onChange: () => void

}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("body rendering")
    return <ul>
        <li>Dimych</li>
        <li>Valera</li>
        <li>Sveta</li>
    </ul>
}

export default Accordion;
