import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';


// import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: 0
      // helpMe: false
    };
  }

  handleGreeting = () => {
    this.setState({
      greetings: this.state.greetings + 1
    });
  };

  // needsHelp = () => {
  //   this.state({
  //     helpMe: true
  // });
  // };

  // wasHelped = () => {
  //   this.setState({
  //     helpMe: false,
  //   });
  // };

  render() {
    return (
      <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img onClick={this.handleGreeting} src={this.props.image_url} alt={this.props.title} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        💜{this.state.greetings} Love for this beast.
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

        {/* <article>
          <h2>{this.props.title}</h2>
          <p>💜{this.state.greetings} Love for this beast. </p>
          <img onClick={this.handleGreeting} src={this.props.image_url} alt={this.props.title} />
          <p>{this.props.description}</p>


          <div>{this.state.helpMe ? 'I need help' : ''}</div>
        <Button onClick={this.needsHelp}>I need help</Button>
        <Button>I got help</Button>
        </article> */}
      </Col>
    )
  }
}

export default HornedBeast;
