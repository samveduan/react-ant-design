import React from 'react'
import { Form, Button, Input, InputNumber, Select, Checkbox, Radio } from 'antd'

const { Option } = Select;
const { TextArea } = Input;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default class BaseForm extends React.Component {
    state = {
        value: 0,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    onFinish = values => {
        console.log(values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    formRef = React.createRef();
    
    render() {
        return (
            <div>
                BaseForm
            </div>
        )
    }
}
