import React from 'react'
import { Card, Tabs, message, Icon } from 'antd'

const TabPane = Tabs.TabPane
function callback(key) {
  console.log(key)
  message.info('Hi, I am tab ' + key)
}

export default class This extends React.Component {
  newTabIndex = 0
  state = {
    panes: [
      {
        title: 'Tab 1',
        content: 'This is Tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'This is Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'This is Tab 3',
        key: '3'
      }
    ]
  }
  onChange = activeKey => {
    this.setState({ activeKey })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }
  add = () => {
    const panes = this.state.panes
    const activeKey = `newTab${this.newTabIndex++}`
    panes.push({
      title: 'New Tab ' + this.newTabIndex,
      content: 'Content of new Tab ' + this.newTabIndex,
      key: activeKey
    })
    this.setState({ panes, activeKey })
  }

  remove = targetKey => {
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key
    }
    this.setState({ panes, activeKey })
  }
  render() {
    return (
      <div>
        <Card title="Tab" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              This is Tab 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              This is Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3" disabled>
              This is Tab 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab with Icon" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane
              tab={
                <span>
                  <Icon type="plus" /> Tab 1
                </span>
              }
              key="1"
            >
              This is Tab 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="edit" /> Tab 2
                </span>
              }
              key="2"
            >
              This is Tab 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="delete" /> Tab 3
                </span>
              }
              key="3"
            >
              This is Tab 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Dynamic Tab (Add and Remove)" className="card-wrap">
          <Tabs
            defaultActiveKey="1"
            type="editable-card"
            onChange={this.onChange}
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => {
              return (
                <TabPane tab={pane.title} key={pane.key}>
                  {pane.content}
                </TabPane>
              )
            })}
          </Tabs>
        </Card>
      </div>
    )
  }
}
