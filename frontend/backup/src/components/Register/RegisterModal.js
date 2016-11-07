// ui/components/Register/RegisterModal.js
import React,{ Component } from 'react'
import { Modal } from 'react-bootstrap'
import RegisForm from './RegisterForm.js'

export default class RegisterModal extends Component{

  constructor(props){
    super(props);
    this.close = this.props.onClose
    this.state =  { showModal: false };

  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  onShowModal() {
    this.setState({ showModal: true });
  }


  render(){
    return(
      <div>
        <ul className="nav navbar-nav ul-signup">
          <li ><a href="#" onClick={this.onShowModal.bind(this)}>Sign up</a></li>
          </ul>
        <Modal show={this.state.showModal}
          onHide={this.onCloseModal.bind(this)} >
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <div className='text-center'>
            <RegisForm onClose={this.onCloseModal.bind(this)} />
          </div>
          <Modal.Body>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
