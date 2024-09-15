import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';
export default {
    title: 'Shared Button',
    component: Button,
   
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Text"

};

export const clear = Template.bind({});
clear.args = {
    children: "Text",
    theme: ThemeButton.CLEAR
};

export const outline = Template.bind({});
outline.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE
};
