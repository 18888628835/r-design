import { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Transition from '../components/transition/Transition'
import { TransitionProps } from '../components/transition/Transition'
import Alert from '../components/alert/Alert';
import Button from '../components/button/Button';

export default {
    title: 'Example/Transition',
    component: Transition,
} as Meta;

const transition_alert: Story<TransitionProps> = (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isShow, setIsShow] = useState(true)
    return <>
        <Transition showData={isShow} timeout={300} animation='alert'>
            <Alert closed style={{ width: '250px' }} variant='outline'>注意:点击 x 跟点击按钮的区别</Alert>
        </Transition>
        <Button btnType='danger' onClick={() => { setIsShow(!isShow) }}>click here</Button>
    </>
}
export const transitionAlert = transition_alert.bind({});
transitionAlert.storyName = 'alert模式'

const LeftIn_RightOut: Story<TransitionProps> = (args) => {
    const [isShow, setIsShow] = useState(true)
    return <>
        <Transition showData={isShow} timeout={300} animation='LeftIn-RightOut'> <Alert closed model='danger' variant='outline' style={{ width: '250px' }}>hello word!</Alert></Transition>
        <Button btnType='danger' onClick={() => { setIsShow(!isShow) }}>click here</Button>
    </>
}
export const LeftInRightOut = LeftIn_RightOut.bind({});
LeftInRightOut.storyName = 'LeftIn RightOut'

const TopIn_BottomOut: Story<TransitionProps> = (args) => {
    const [isShow, setIsShow] = useState(true)
    return <>
        <Transition showData={isShow} timeout={300} animation='TopIn-BottomOut' ><Alert variant='filled' closed style={{ width: '250px' }}>hello word!</Alert></Transition>
        <Button btnType='danger' onClick={() => { setIsShow(!isShow) }}>click here</Button>
    </>
}
export const TopInBottomOut = TopIn_BottomOut.bind({});
TopInBottomOut.storyName = 'TopIn BottomOut'