import React from 'react'
import { Button, Card, Icon, Radio } from 'antd'
import './Button.less'
export default class Buttons extends React.Component {
  state = {
    loading: false,
    size: 'default'
  }
  handleButtonSizeChange = e => {
    this.setState({ size: e.target.value })
  }
  handleCloseLoading = () => {
    this.setState({ loading: true })
  }
  render() {
    return (
      <div>
        <Card title="Type">
          <Button type="prime">Button</Button>
          <Button>Button</Button>
          <Button type="dashed">Button</Button>
          <Button type="danger">Button</Button>
          <Button disabled>Button</Button>
        </Card>
        <Card title="Icon">
          <Button icon="plus">Add</Button>
          <Button icon="edit">Edit</Button>
          <Button icon="delete">Delete</Button>
          <Button icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="download">Download</Button>
        </Card>
        <Card title="Loading">
          <Button type="primary" loading={true}>
            Confirm
          </Button>
          <Button type="primary" loading={true} shape="circle" />
          <Button loading={true}>Loading</Button>
          <Button shape="circle" loading={true} />
          <Button
            type="primary"
            loading={this.state.loading}
            onClick={this.handleCloseLoading}
          >
            Download
          </Button>
        </Card>
        <Card title="Button Group">
          <Button.Group className="btn-group">
            <Button icon="left" type="primary">
              Previous
            </Button>
            <Button type="primary">
              Next
              <Icon type="right" />
            </Button>
          </Button.Group>
        </Card>
        <Card title="Button Size">
          <Radio.Group onChange={this.handleButtonSizeChange}>
            <Radio value="large">Large</Radio>
            <Radio value="default">Medium</Radio>
            <Radio value="small">Small</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>Button Size</Button>
        </Card>
      </div>
    )
  }
}
