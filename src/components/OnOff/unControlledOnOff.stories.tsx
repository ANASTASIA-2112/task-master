import React from 'react';
import {action} from '@storybook/addon-actions';
import { UncontrolledOnOff} from './unControlledOnOff';



export default {
    title: "components/UncontrolledOnOff",
    component: UncontrolledOnOff,
};

const callback = action(" on or off cliked");

//режим включенный
export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
//режим отключен
export const OffMode = () => <UncontrolledOnOff defaultOff={false} onChange={callback}/>

//ести компонета отресована defaulValue не отреагирует
export const BugMode = () => <div>Unsync when change defaulValue when already rendered </div>

//инпут с фиксированным текстом readOnly={true} или value={"yo"}

//не хатим контролировать, а что-то передаем
//export const DefaultInputValue = () => <input defaultValue={"yo"}/>//текст печатаеться
//readOnly={true} режим только на чтение
//onChange={callback} - компонент input будет сообщать, что хочет поменяться и изменить
//defaultValue={"yo"}/текст печатаеться
