import React from 'react'
import { Card, Row, Col, Modal } from 'antd'

export default class Gallery extends React.Component {
  openGallery = imgSrc => {
    this.setState({
      visible: true,
      currentImg: '/gallery/' + imgSrc
    })
  }
  state = {
    visible: false
  }
  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]

    const imageList = imgs.map(list => {
      return list.map((item, index) => {
        return (
          <Card
            key={index}
            onClick={() => {
              this.openGallery(item)
            }}
            className="card-wrap"
            cover={<img src={'/gallery/' + item} />}
          >
            <Card.Meta title="Image" description="Image Description" />
          </Card>
        )
      })
    })
    return (
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {imageList.map((img, index) => {
            return index % 5 === 4 ? (
              <Col key={index} span={4}>
                {img}
              </Col>
            ) : (
              <Col key={index} span={5}>
                {img}
              </Col>
            )
          })}
        </Row>
        <Modal
          visible={this.state.visible}
          title="Image Detail"
          onCancel={() => {
            this.setState({ visible: false })
          }}
          footer={null}
        >
          <img src={this.state.currentImg} style={{ width: '100%' }} />
        </Modal>
      </div>
    )
  }
}
