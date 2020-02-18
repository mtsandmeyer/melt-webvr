import { h, Component } from 'preact';
import { Entity } from 'aframe-react';
import randomNum from '../lib/randomNum';

export class TexturedBall extends Component {

  handleClick() {
    const ball = document.querySelector('.floating-ball');

    //generate a random impulse and angular impulse
    ball.body.applyImpulse(new CANNON.Vec3(randomNum(-2,2), 4, randomNum(-2,2)), new CANNON.Vec3(0, 0, 0));
    ball.body.angularVelocity.set(randomNum(-1,1), randomNum(-1,1), randomNum(-1,1));
  }

  render() {
    setInterval(() => this.handleClick(), randomNum(7000, 9000));
    return (
      <Entity
        class="clickable floating-ball"
        dynamic-body="shape: sphere; mass: 2"
        events={{
          click: this.handleClick.bind(this)
        }}
        primitive="a-octahedron"
        detail={2}
        radius={this.props.radius}
        position={this.props.pos}
        src={this.props.src}
      />
    );
  }
}

export default TexturedBall;
