import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: 0
      // helpMe: false
    };
  };

  handleGreeting = () => {
    this.setState({
      greetings: this.state.greetings + 1
    });
  };

  
  // handleTitleClick = () => {
  //     this.props.handleOpenModel(this.props.title)
    
  // };


render() {
  return (
    <Col>
      <Card className='hornedBeast' style={{ width: '18rem' }}>
        <Card.Img 
          src={this.props.image_url}
          onClick={() => {
            // this.props.handleGreeting();
            this.props.handleOpenModel(this.props.title, this.props.image_url, this.props.description);
          }}
          alt={this.props.title}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button onClick={this.handleGreeting}>Likes</Button>
          Likes for this beast 💜 {this.state.greetings}
        </Card.Body>
      </Card>

    </Col>
  );
};
};

export default HornedBeast;

/* <article>
    <h2>{this.props.title}</h2>
    <p>💜{this.state.greetings} Love for this beast. </p>
    <img onClick={this.handleGreeting} src={this.props.image_url} alt={this.props.title} />
    <p>{this.props.description}</p>


    <div>{this.state.helpMe ? 'I need help' : ''}</div>
  <Button onClick={this.needsHelp}>I need help</Button>
  <Button>I got help</Button>
  </article> */
