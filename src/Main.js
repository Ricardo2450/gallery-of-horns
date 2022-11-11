import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {

    let beastArray = this.props.data.map((beast, idx) => {
      return <HornedBeast
        id={beast._id}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        horns={beast.horns}
        keyword={beast.keyword}
        key={idx}
        addHearts={this.props.addHearts}
        handleOpenModel={this.props.handleOpenModel}
      />
      // console.log(idx);
    })

    return (
      <main>
        <Container>
          <Row>
            {beastArray}
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main;


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
