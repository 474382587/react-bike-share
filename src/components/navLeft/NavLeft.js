import React from 'react'
import menuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import './navLeft.less'
const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component {
  state = {
    menuTreeNode: undefined
  }
  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuConfig)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>CMS</h1>
        </div>
        <Menu theme="dark">
          <Menu.Item>菜单项</Menu.Item>
          {this.state.menuTreeNode}
          <SubMenu title="子菜单">
            <Menu.Item>子菜单项</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
