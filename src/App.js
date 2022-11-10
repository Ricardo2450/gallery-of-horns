import React from "react";
import Header from './Header.js';
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
// import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import './App.css';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    hearts: '',
    isModelShown: false,
    selectedTitle: "",
    selectedImageUrl: "",
    selectedDescription: "",
  }
}

addHearts = () => {
  this.setState({
    hearts: this.state.hearts + '💜'
  });
};

handleCloseModel = () => {
  this.setState({
    isModelShown: false
  });
};

handleOpenModel = (title, URL, description) => {
  this.setState({
    isModelShown: true,
    selectedTitle: title,
    selectedImageUrl: URL,
    selectedDescription: description,
  });
};

  render() {
      return (
        <>
          <Header
          hearts={this.state.hearts}
          />
          <Main
          addHearts={this.addHearts}
          handleOpenModel={this.handleOpenModel}
          data={data}
          />
          <Footer/>
          <SelectedBeast
          isModelShown = {this.state.isModelShown}
          handleCloseModel = {this.handleCloseModel}
          title = {this.state.selectedTitle}
          imageUrl = {this.state.selectedImageUrl}
          description = {this.state.selectedDescription}
          />
          {/* <Modal 
          show={this.state.isModelShown}
          onHide={this.handleCloseModel}>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.state.title}
              </Modal.Title>
            </Modal.Header>
          </Modal> */}
        </>
      );
    }
}

export default App;
