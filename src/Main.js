import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {

    let beastArray = [];
    data.forEach((beast, idx) => {
      beastArray.push(
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          key={idx}
        />)
      // console.log(idx);
    })

    return (
      <main>
        <Container>
          <Row>
            {beastArray}
          </Row>
        </Container>


        {/* <HornedBeast
          title="Angie"
          image_url='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bearded_Dragon_-_close-up.jpg/800px-Bearded_Dragon_-_close-up.jpg?20041127182107'
          description='Im a really awesome bearded dragon'
        />
        <HornedBeast
          title='RJ'
          image_url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Easy_origami_dragon_for_beginners-_how_to_paint_a_dragon_for_beginners.jpg/800px-Easy_origami_dragon_for_beginners-_how_to_paint_a_dragon_for_beginners.jpg?20190512132204'
          description='The biggest beast around'
        /> */}
      </main>
    )
  }
}

export default Main;
