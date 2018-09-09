import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'

export default class Loading extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="Spin Loading" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: '0 10px' }} size="default" />
          <Spin size="large" />
          <Spin style={{ margin: '0 10px' }} indicator={icon} />
        </Card>
        <Card title="Spin Content" className="card-wrap">
          <Alert message="Alert" description="This is an Alert" />
          <Alert
            style={{ margin: '10px 0px' }}
            type="warning"
            message="Warning"
            description="This is an Warning"
          />
          <Spin>
            <Alert style={{ margin: '0 0 10px 0px' }} message="Spin Inside" description="This is Alert with a Spin"></Alert>
          </Spin>
          <Spin tip="Loading...">
            <Alert message="Spin Inside" description="This is Alert with a Spin and Tip"></Alert>
          </Spin>
        </Card>
      </div>
    )
  }
}
