import React,{ Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './SlidePreview.scss'

export default class SlidePreview extends Component {
  render(){
    return(
      <div >
        <Carousel className="slide-preview">
          <Carousel.Item>
            <img className="img-responsive center-block" width={800} height={600} src="src/assets/1.jpg"/>
            <Carousel.Caption>
          {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={800} height={600} src="src/assets/2.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={800} height={600} src="src/assets/3.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={800} height={600} src="src/assets/4.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={800} height={600} src="src/assets/5.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-responsive center-block" width={800} height={600} src="src/assets/6.jpg"/>
          </Carousel.Item>
        </Carousel>
        </div>
      )
    }
  }
