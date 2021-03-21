import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '../components/button/Button'
import { ButtonProps } from '../components/button/Button'
export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const ButtonType_default: Story<ButtonProps> = (args) => <>
  <Button>defaultButton</Button>
  <Button btnType='primary'>primary</Button>
  <Button btnType='danger'>danger</Button>
  <Button btnType='link'>link</Button>
</>

export const ButtonType = ButtonType_default.bind({});
ButtonType.storyName = '默认下的四种样式'

const ButtonType_outLine: Story<ButtonProps> = (args) => <>
  <Button variant='outline'>default</Button>
  <Button btnType='primary' variant='outline'>primary</Button>
  <Button btnType='danger' variant='outline'>danger</Button>
  <Button btnType='link' variant='outline'>link</Button>
</>
export const variantType = ButtonType_outLine.bind({});
variantType.storyName = '边框模式下四种样式'

const ButtonType_size: Story<ButtonProps> = (args) => <>
  <Button >default</Button>
  <Button variant='outline'>default</Button>
  <Button size='small' btnType='primary' variant='outline'>small</Button>
  <Button size='large' variant='outline' btnType='danger' >large</Button>
</>
export const sizeButton = ButtonType_size.bind({});
sizeButton.storyName = '支持三种尺寸'

const disabledButton: Story<ButtonProps> = (args) => <>
  <Button disabled>disabled</Button>
  <Button disabled variant='outline'>disabled</Button>
  <Button disabled variant='outline' size='large'>disabled</Button>
</>
export const disabled = disabledButton.bind({});
disabled.storyName = 'disabled'

const Click: Story<ButtonProps> = (args) => <>
  <Button btnType='primary' onClick={() => { alert('click') }}>click</Button>
  <Button onClick={() => { alert('click') }} variant='outline'>click</Button>
  <Button disabled onClick={() => { alert('click') }}>disabled will unClick</Button>
</>
export const click = Click.bind({});
click.storyName = '点击事件'

const href: Story<ButtonProps> = (args) => <>
  <Button btnType='link' href='https://www.baidu.com/'>跳转</Button>
</>
export const hrefButton = href.bind({});
hrefButton.storyName = 'href跳转'