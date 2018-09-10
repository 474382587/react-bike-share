import React from 'react'
import { Card, Button, message, Icon, Alert } from 'antd'

export default class GlobalMessage extends React.Component {
  showMessage = (type) => {
    message[type]('This is a global message for ' + type + '!')
  }
  render() {
    return (
      <div>
        <Card title="Global Message" className="card-wrap">
          <Button
            type="primary"
            onClick={() => {
              this.showMessage('success')
            }}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.showMessage('info')
            }}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.showMessage('warning')
            }}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.showMessage('error')
            }}
          >
            Error
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.showMessage('loading')
            }}
          >
            Loading
          </Button>
        </Card>
      </div>
    )
  }
}
