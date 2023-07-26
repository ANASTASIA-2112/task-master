import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';
import {StoryFn} from "@storybook/react";

export const GetCategoryObj=(categoryName:"Color"|"Event"|"Main")=> ({
    table: {
        category: categoryName
    }
})

export const Category={
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "color",
            ...GetCategoryObj("Color")
        },
        onChange: {
            ...GetCategoryObj("Event"),
        },
        onClick: {
            ...GetCategoryObj("Event"),
        },
        accordionCollapsed: {
            ...GetCategoryObj("Main")
        },
        items: {
            ...GetCategoryObj("Main")
        },
        titleValue: {
            ...GetCategoryObj("Main")
        },
    }
}

export default  {
    title: "components/Accordion",
    component: Accordion,
    ...Category


};
//событие сгенирированно
const callback = action(" accordion mode change event fired ");
const onclickCallback = action("some item was clicked")


const Tamplate: StoryFn<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode2 = Tamplate.bind({})
MenuCollapsedMode2.args = {
    titleValue: "User",
    accordionCollapsed: true,
    onChange: callback,
    items: [],
    onClick: onclickCallback,
}

//развернутый
export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} accordionCollapsed={true} onChange={callback}
                                                  items={[]}
                                                  onClick={onclickCallback}
/>
//свернутый
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} accordionCollapsed={false} onChange={callback}
                                                     items={[{title: "Dimych", value: 1},
                                                         {title: "Valera", value: 2},
                                                         {title: "Artem", value: 3},
                                                         {title: "Victor", value: 4}]}
                                                     onClick={onclickCallback}
/>
//просмотреть ctrl+Q
export const ModeChanging: (StoryFn<AccordionPropsType>) = (args) => {
    const [value, setValue] = useState<boolean>(true)
    //onChange меняет на противоположное значение /если просто сробатываешь ты хочешь поменяться на противоположное
    return <Accordion {...args} accordionCollapsed={value} onChange={() => setValue(!value)}/>
};
//можем контролировать аргументами / изменять
ModeChanging.args = {
    titleValue: "Users",
    items: [
        {title: "Dimych", value: 1},
        {title: "Valera", value: 2},
        {title: "Artem", value: 3},
        {title: "Victor", value: 4}],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }

}