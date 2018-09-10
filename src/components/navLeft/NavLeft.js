import React from 'react'
import menuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import { NavLink } from 'react-router-dom'
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
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
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
          {this.state.menuTreeNode}
          <Menu.Item>Menu Item</Menu.Item>
          <SubMenu title="Sub Menu">
            <Menu.Item>Sub Menu Item</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
