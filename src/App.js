import React from "react";
import Form from 'react-bootstrap/Form';
import Header from './Header.js';
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
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
      hornNum: 'All',
      beastData:data,
    };
  };

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

  handleFilterSelect = (event) => {
    let hornNum = event.target.value;
    console.log(hornNum);
    let newData;
    hornNum === 'All' ? newData = data : newData = data.filter(obj => obj.horns === parseInt(hornNum));
    this.setState({
      beastData: newData
    });
  };

  filterDropDown = () => {
    let uniqueHorns= data.map(item => item.horns).filter((value,index,array) => array.indexOf(value) === index).sort((a,b) => a - b);
    return uniqueHorns.map((horn, idx) => {
      return <option value={horn} key={idx}>{horn}</option>
    });
  };



  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts}
        />
        <Form id='form'>
        <Form.Label>Filter by number of Horns</Form.Label>
        <Form.Select onChange={this.handleFilterSelect}>
          <option>All</option>
          {this.filterDropDown()}
        </Form.Select>
      </Form>
        <Main
          addHearts={this.addHearts}
          handleOpenModel={this.handleOpenModel}
          data={this.state.beastData}
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




// let data ={data}



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
