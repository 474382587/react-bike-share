import React from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

const FormItem = Form.Item
class FormLogin extends React.Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName}, you have passed registration!
        Your password is ${userInfo.userPassword}`)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div>
        <Card title="Login Form" className="card-wrap">
          <Form layout="inline">
            <FormItem>
              <Input
                prefix={<Icon type="user" />}
                placeholder="Please enter username"
              />
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" />} type="password" placeholder="Please enter password" />
            </FormItem>
            <FormItem>
              <Button type="primary">Submit</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="Horizontal Login Form">
          <Form style={{ width: '300px' }}>
            <FormItem>
              {getFieldDecorator('userName', {
                initialValue: 'UserName',
                rules: [
                  {
                    required: true,
                    message: 'Cannot be empty'
                  },
                  {
                    min: 5,
                    max: 10,
                    message:
                      'Please ensure you user name to be 5 - 10 characters'
                  },
                  {
                    pattern: new RegExp('^\\w+$', 'g'),
                    message: 'Username Should only contain letters and numbers'
                  }
                ]
              })(<Input prefix={<Icon type="user" />} placeholder="Please enter username" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('userPassword', {
                initialValue: 'UserPassword',
                rules: []
              })(<Input prefix={<Icon type="lock" />} type="password" placeholder="Please enter user password" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false,
                rules: []
              })(<Checkbox>Remeber Me</Checkbox>)}
              <a href="#">Forgot Password?</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </FormItem>{' '}
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormLogin)
