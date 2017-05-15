import React from 'react'


class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship- info">
        <h2>{this.props.name}</h2>
        <h3>Speed: {this.props.speed}</h3>
        <h4>Has rockers: {this.props.hasRockets}</h4>
        <h4>Color(s): {this.props.colors.join(", ")}</h4>
      </div>
    )
  }
}
Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
