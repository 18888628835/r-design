import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Alert from '../components/alert/Alert'
import { AlertProps } from '../components/alert/Alert'
import styled from 'styled-components';
export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta;

const Wrap = styled.div`
margin:10px;
width:300px;
`
const Alert_default: Story<AlertProps> = (args) => <>
  <Wrap><Alert>default</Alert></Wrap>
  <Wrap><Alert model='success'>success</Alert></Wrap>
  <Wrap><Alert model='danger'>danger</Alert></Wrap>
  <Wrap><Alert model='warning'>warning</Alert></Wrap>
</>
export const AlertModel = Alert_default.bind({});
AlertModel.storyName = '基础样式'

const Alert_outline: Story<AlertProps> = (args) => <>
  <Wrap><Alert variant='outline'>outline</Alert></Wrap>
  <Wrap><Alert variant='outline' model='success'>outline success</Alert></Wrap>
  <Wrap><Alert variant='outline' model='danger'>outline danger</Alert></Wrap>
  <Wrap><Alert variant='outline' model='warning'>outline warning</Alert></Wrap>
</>
export const AlertOutline = Alert_outline.bind({});
AlertOutline.storyName = 'outline 模式'

const Alert_filled: Story<AlertProps> = (args) => <>
  <Wrap><Alert variant='filled'>filled</Alert></Wrap>
  <Wrap><Alert variant='filled' model='success'>filled success</Alert></Wrap>
  <Wrap><Alert variant='filled' model='danger'>filled danger</Alert></Wrap>
  <Wrap><Alert variant='filled' model='warning'>filled warning</Alert></Wrap>
</>
export const AlertFilled = Alert_filled.bind({});
AlertFilled.storyName = 'filled 模式';

const Alert_closed: Story<AlertProps> = (args) => <>
  <Wrap><Alert closed>default</Alert></Wrap>
  <Wrap><Alert variant='filled' model='success' closed>filled success</Alert></Wrap>
  <Wrap><Alert variant='outline' model='danger' closed>outline danger</Alert></Wrap>
</>
export const AlertClosed = Alert_closed.bind({});
AlertClosed.storyName = 'closed'

const Alert_title: Story<AlertProps> = (args) => <>
  <Wrap><Alert title='hello world' model='success' closed>success</Alert></Wrap>
  <Wrap><Alert variant='filled' model='danger' closed title='危险'>filled danger</Alert></Wrap>
  <Wrap><Alert variant='outline' model='warning' title='警告' closed>warning</Alert></Wrap>
</>
export const AlertTitle = Alert_title.bind({});
AlertTitle.storyName = 'title'