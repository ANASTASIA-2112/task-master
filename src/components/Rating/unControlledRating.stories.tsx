
import { action } from '@storybook/addon-actions';
import React from 'react';
import {UncontrolledRating} from "./unControlledRating";



export default {
    title:"components/UncontrolledRating",
    component: UncontrolledRating,
    tags:["autodocs"]
};
//должен обязательно приходить новое значение для этого добовляем onChange
//новое значение value приходит при помощи
// action - это колбэк которому мы иожем передать специальный
// action(вызываем и он нам возврощает колбэк функцию,которая должна быть

const callback =action("rating changed inside component")
export const EmptyRating=()=><UncontrolledRating defaultValue={0} onChange={callback}/>
export const Rating1=()=><UncontrolledRating  defaultValue={1}  onChange={callback}/>
export const Rating2=()=><UncontrolledRating  defaultValue={2}  onChange={callback}/>
export const Rating3=()=><UncontrolledRating  defaultValue={3} onChange={callback}/>
export const Rating4=()=><UncontrolledRating  defaultValue={4} onChange={callback}/>
export const Rating5=()=><UncontrolledRating  defaultValue={5}  onChange={callback}/>
