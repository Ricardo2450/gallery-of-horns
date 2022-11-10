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
