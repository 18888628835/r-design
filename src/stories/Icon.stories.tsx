import react from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../components/icon/Icon';
import { IconProps } from '../components/icon/Icon';

export default {
    title: 'Example/Icon',
    component: Icon,
} as Meta;

const Icon_default: Story<IconProps> = (args) => {
    return <>
        <Icon path='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'></Icon>
    </>
}
export const IconDefault = Icon_default.bind({});
IconDefault.storyName = 'MATERIAL引入 path'

const Icon_color: Story<IconProps> = (args) => {
    return <>
        <Icon path='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' style={{color:'red'}}></Icon>
        <Icon path='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' style={{color:'green'}}></Icon>
        <Icon path='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' style={{color:'orange'}}></Icon>
    </>
}
export const IconColor = Icon_color.bind({});
IconColor.storyName = '改变颜色'

const Icon_size: Story<IconProps> = (args) => {
    return <>
        <Icon path='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' style={{fontSize:'40px'}}></Icon>
    </>
}
export const IconSize = Icon_size.bind({});
IconSize.storyName = '改变尺寸'