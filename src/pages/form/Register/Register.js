import React from 'react'
import {
  Card,
  Form,
  Input,
  Radio,
  Button,
  message,
  Icon,
  Checkbox,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload
} from 'antd'
import moment from 'moment'

const FormItem = Form.Item
class FormRegister extends React.Component {
  state = {
    userImg: null
  }
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(JSON.stringify(userInfo))
  }
  getBase64 = (img, callback) =>{
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  handleChange = (info) => {
    if( info.file.status === 'uploading') {
      this.setState({loading: true})
      return
    }
    if(info.file.status === 'done') {
      this.getBase64( info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false
      }))
    }
  }
  render() {
    const Option = Select.Option
    const RadioGroup = Radio.Group
    const { getFieldDecorator } = this.props.form
    const TextArea = Input.TextArea
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    return (
      <div>
        <Card title="Register Form">
          <Form layout="horizontal">
            <FormItem label="User Name" {...formItemLayout}>
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
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="Please enter username"
                />
              )}
            </FormItem>
            <FormItem label="Password" {...formItemLayout}>
              {getFieldDecorator('userPassword', {
                initialValue: 'UserPassword',
                rules: []
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  type="password"
                  placeholder="Please enter user password"
                />
              )}
            </FormItem>
            <FormItem label="Gender" {...formItemLayout}>
              {getFieldDecorator('gender', {
                initialValue: 'male',
                rules: []
              })(
                <RadioGroup>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="Age" {...formItemLayout}>
              {getFieldDecorator('age', {
                initialValue: '18',
                rules: []
              })(<InputNumber />)}
            </FormItem>
            <FormItem label="Marrige Status" {...formItemLayout}>
              {getFieldDecorator('marriage', {
                initialValue: 'single',
                rules: []
              })(
                <Select>
                  <Option value="single">Single</Option>
                  <Option value="married">Married</Option>
                  <Option value="divorced">Divorced</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Hobbies" {...formItemLayout}>
              {getFieldDecorator('hobbies', {
                initialValue: ['computer', 'travel'],
                rules: []
              })(
                <Select mode="multiple">
                  <Option value="computer">Computer</Option>
                  <Option value="basketball">Basketball</Option>
                  <Option value="travel">Travel</Option>
                  <Option value="run">Run</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Graduated?" {...formItemLayout}>
              {getFieldDecorator('graduated', {
                valuePropName: 'checked',
                initialValue: false,
                rules: []
              })(<Switch />)}
            </FormItem>
            <FormItem label="Birthdate" {...formItemLayout}>
              {getFieldDecorator('birthdate', {
                // valuePropName: 'checked',
                initialValue: moment(new Date()),
                rules: []
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
            <FormItem label="Address" {...formItemLayout}>
              {getFieldDecorator('address', {
                initialValue: 'Canada',
                rules: []
              })(
                <TextArea
                  autosize={
                    {
                      minRows: 2,
                      maxRows: 4
                    }
                  }
                  placeholder="Please enter your addres here"
                ></TextArea>
              )}
            </FormItem>
            <FormItem label="Wake Up Time" {...formItemLayout}>
              {getFieldDecorator('wakeuptime', {
                initialValue: moment(new Date()),
                rules: []
              })(
                <TimePicker></TimePicker>
              )}
            </FormItem>
            <FormItem label="Upload Avatar" {...formItemLayout}>
              {getFieldDecorator('avatar', {
                initialValue: '',
                rules: []
              })(
                <Upload listType="picture-card"
                  action=''
                  showUploadList={false}
                  onChange={this.handleChange}
                >
                  {this.state.userImg ? <img src={this.state.userImg}></img> : <Icon type="plus"></Icon>}
                </Upload>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
                initialValue: false,
                rules: []
              })(
                <Checkbox>I have read <a href="#">Signup Agreement</a></Checkbox>
              )}
            </FormItem>
          </Form>
          <FormItem {...offsetLayout} >
                <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
          </FormItem>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormRegister)
