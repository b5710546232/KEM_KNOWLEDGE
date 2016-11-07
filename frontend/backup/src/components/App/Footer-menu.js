import React,{ Component } from 'react'
import {Row,Col} from 'react-bootstrap'
export default class FooterMenu extends Component {
  render(){
    return(
      <div>
      <Row>
        <Col md={4} xs={12}>
          <div className="card">
            <div className="card-image">
              <img src="src/assets/1.jpg"/>
            </div>
            <div className="card-action">
              <a href="#">Design your brand</a>
            </div>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <div className="card">
            <div className="card-image">
              <img src="src/assets/2.jpg"/>
            </div>
            <div className="card-action">
              <a href="#">Go To Store</a>
            </div>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <div className="card">
            <div className="card-image">
              <img src="src/assets/3.jpg"/>
            </div>
            <div className="card-action">
              <a href="#">Top Rate</a>
            </div>
          </div>
        </Col>
      </Row>
      </div>
    )
  }
}
