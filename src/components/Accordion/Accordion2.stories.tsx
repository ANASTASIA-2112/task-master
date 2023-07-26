import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion2} from './Accordion2';




export default {
    title:"components/Accordion2",
    component:Accordion2,
    tags:["autodocs"]
};
//событие сгенирированно
 const  callback = action(" accordion mode change event fired ");

//развернутый
export const MenuCollapsedMode=()=><Accordion2 titleValue={"Menu"} accordionCollapsed={true}  onChange={callback}/>
//свернутый
export const UsersUnCollapsedMode=()=><Accordion2 titleValue={"Users"} accordionCollapsed={false}  onChange={callback}/>

export const ModeChanging=()=> {
    const [value,setValue]=useState<boolean>(true)
    //onChange меняет на противоположное значение /если просто сробатываешь ты хочешь поменяться на противоположное
   return <Accordion2 titleValue={"Users"} accordionCollapsed={value}  onChange={()=> setValue(!value)}/>
};