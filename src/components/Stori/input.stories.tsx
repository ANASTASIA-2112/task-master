import React, {useState} from "react"


type onChange={
    onChange:(value:boolean)=>void
}

export default {
    title: 'components/input',
}

//не контролируемый input
export const UncontrolledInput =()=> <input/>;

//input не контролируемый -это значит ,что в нём значение меняеться само по себе и передовать внурь  его не недо
export const TrackValueOfUncontrolledInput  =()=> {
    const [value,setValue]=useState("");
    //value которое должно быть засинхронизированно-value внешнего мира
    return <><input onChange={(event)=>{
       const actualValue= event.currentTarget.value
        setValue(actualValue);

    }}/>-{value}</>
}
export const GetValueOfUncontrolledInputByButtonPress  =()=> {
    const [value,setValue]=useState("");
    //value которое должно быть засинхронизированно-value внешнего мира
   //value засетаем при нажатии на кнопку
    // когда у нас будет нажатие на onClick-мы должны взять и отправить в наш стейт локальный,
    // значение которое сидит в input
    //при на жатии на кнопку save у нас actual value будет Good!

    return <><input /><button onClick={()=>{setValue("Good!")}}>save</button>-actual value {value}</>
}
//контролируемый input
//внешний вид не может поменяться если  изменились  данные
export const ControlledInputWithFixedValue  =()=> <input value ={"Good day!"}/>