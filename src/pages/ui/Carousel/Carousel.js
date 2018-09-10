import React from 'react'
import { Carousel, Card } from 'antd'
import './Carousel.less'
export default class ImageCarousel extends React.Component {
  render() {
    return (
      <div>
        <Card title="Text Carousel" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <h3>Slide 1</h3>
            </div>
            <div>
              <h3>Slide 2</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 4</h3>
            </div>
          </Carousel>
        </Card>
        <Card title="Image Carousel" className="image-slider card-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg"></img>
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg"></img>
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg"></img>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}
