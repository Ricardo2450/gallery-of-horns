import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.isModelShown}
          onHide={this.props.handleCloseModel}
          className='modal'>
          
          
          <Modal.Header closeButton>
            <Modal.Title id='beastTitle'
            className='selectedTitle'>
              {this.props.title}</Modal.Title>
          </Modal.Header>
         
          <Modal.Body>
            <div className='pictureDiv'>
            <img
            className='selectedImage'
            src={this.props.imageUrl}
            alt={this.props.title}/>
            </div>
            <p className='selectedDescription'>{this.props.description}</p>
            </Modal.Body>
          
          <Modal.Footer>
            <Button onClick={this.props.handleCloseModel}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
