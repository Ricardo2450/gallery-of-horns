import React from "react";
import Header from './Header.js';
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
// import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import './App.css';
import { ListGroup } from "react-bootstrap";
import { render } from "@testing-library/react";

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

  handleOpenModel = (title, image_url, description) => {
    this.setState({
      isModelShown: true,
      selectedTitle: title,
      selectedImageUrl: image_url,
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
        <Footer />
        <SelectedBeast
          isModelShown={this.state.isModelShown}
          handleCloseModel={this.handleCloseModel}
          title={this.state.selectedTitle}
          imageUrl={this.state.selectedImageUrl}
          description={this.state.selectedDescription}
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








// handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(event.target.name.value);
//   this.setState({
//     name: event.target.name.value,
//     howToSort: event.target.selected.value,
//   });
// };

// render(){
// <>
//   let numbers = data.map((dataItem, idx) => {
//     return <ListGroup.Item key={idx}>{dataItem}</ListGroup.Item>
//   })

//     < main >
//  <form onsubmit={this.handleSubmit}>
//   <label>Your Name
//     <input type='text' name='name'/>
//   </label>
//   <fieldset>
//     <legend>select Numbers</legend>
//     <select name='selected'>
//       <option value='all'>All</option>
//       <option value='even'>Even</option>
//       <option value='odd'>Odd</option>
//       </select>
//   </fieldset>
//   <button type='submit'>Submit</button>
//  </form>
  
//  <ListGroup>
//    {numbers}
//  </ListGroup>
// </main >
// </>

// }
