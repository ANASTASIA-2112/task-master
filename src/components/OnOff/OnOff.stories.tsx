import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import { OnOff} from './OnOff';
import {GetCategoryObj} from "../Accordion/Accordion.stories";





export default {
    title:"components/OnOff",
    component: OnOff,

};

 const  callback = action(" on or off cliked");

//режим включенный
export const OnMode=()=>< OnOff on={true}  onChange={callback}/>
//режим отключен
export const OffMode=()=>< OnOff on={false}  onChange={callback}/>

export const ModeChanging=()=> {
    const [value,setValue]=useState<boolean>(true)
    return < OnOff on={value} onChange={ setValue}/>

};