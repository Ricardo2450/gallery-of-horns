import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.img} alt={this.props.title}/>
        <p>{this.props.bio}</p>
      </article>
    )
  }
}

export default HornedBeast;
