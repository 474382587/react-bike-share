import React from 'react'
import { Button, Card, Modal, Radio } from 'antd'
import '../ui.less';
// import './Button.less'
export default class Modals extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    confirm: false,
    info: false,
    success: false,
    warning: false,
  }
  handelOpen = type => {
    this.setState({ [type]: true })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title:"Confirm",
      content:"Are you sure?",
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
    this.setState({
      type: true 
    })
  }
  render() {
    return (
      <div>
        <Card title="Basic Modals" className="card-wrap">
          <Button onClick={() => this.handelOpen('showModal1')}>Open</Button>
          <Button onClick={() => this.handelOpen('showModal2')}>Footer</Button>
          <Button onClick={() => this.handelOpen('showModal3')}>20px from Top</Button>
          <Button onClick={() => this.handelOpen('showModal4')}>Centered</Button>
        </Card>
        <Card title="Confirmatiion Modals" className="card-wrap">
          <Button onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button onClick={() => this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="Modal 1"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({ showModal1: false })
          }}
        >
          <p>This is a Basic Modal</p>
        </Modal>
        <Modal
          title="Modal 2"
          visible={this.state.showModal2}
          okText="Next"
          cancelText="Back"
          onCancel={() => {
            this.setState({ showModal2: false })
          }}
        >
          <p>This is a Basic Modal, with Cancel and okText</p>
        </Modal>
        <Modal
          title="Modal 3"
          style={{top:20}}
          visible={this.state.showModal3}
          onCancel={() => {
            this.setState({ showModal3: false })
          }}
        >
          <p>This is a Basic Modal, with margin 20px</p>
        </Modal>
        <Modal
          title="Modal 4"
          wrapClassName="vertical-center-modal"
          visible={this.state.showModal4}
          onCancel={() => {
            this.setState({ showModal4: false })
          }}
        >
          <p>This is a Basic Modal, with margin 20px</p>
        </Modal>
      </div>
    )
  }
}
