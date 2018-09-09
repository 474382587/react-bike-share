import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NavLeft from './components/navLeft/NavLeft'
// import Home from './pages/home/Home'
import './style/common.less';
export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span="3" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="21" className="main">
          <Header />  
          <Row className="content">
            {this.props.children}
            {/*<Home />*/}
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}