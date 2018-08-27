import React from 'react'
import {Row, Col} from 'antd'
import './header.less'
import Util from '../../utils/utils'
import axios from '../../axios/index'

export default class Header extends React.Component {
  state = {
    userName: '',
    weather: ''
  }
  componentDidMount() {
    this.setState({
      userName: 'user9527217',
      currentTime: ''
    })
    setInterval(()=>{
      let currentTime = Util.formatDate(new Date().getTime())
      this.setState({
        currentTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }
  getWeatherAPIData() {
    axios.jsonp({
      url: 'http://api.openweathermap.org/data/2.5/weather?appid=215022a8c6b45dcd36b354ca06acc261&lat=49.236968999999995&lon=-123.17536729999999'
    }).then(res => {
      let data = res
      this.setState({
        weather: data.weather[0].main
      })
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>Welcome, {this.state.userName}</span>
            <a href="#">Logout</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            Home Page
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.currentTime}</span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}