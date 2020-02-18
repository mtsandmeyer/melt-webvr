import { h, Component } from 'preact';
import { Entity } from 'aframe-react';
import randomNum from '../lib/randomNum';
const uuidv1 = require('uuid/v1');

class TexturedCube extends Component {

  constructor() {
    super();
    const uuid = uuidv1();
    this.state = {
      id: uuid,
    };
  }

  handleClick() {
    const cube = document.querySelector(`a-box[uuid="${this.state.id}"]`);

    //generate a random impulse and angular impulse
    cube.body.applyImpulse(new CANNON.Vec3(randomNum(-2,2), 7, randomNum(-2,2)), new CANNON.Vec3(0, 0, 0));
    cube.body.angularVelocity.set(randomNum(-1,1), randomNum(-1,1), randomNum(-1,1));
  }

  render() {
    setInterval(() => this.handleClick(), randomNum(7000, 9000));
    return (
      <Entity
        uuid={this.state.id}
        class="clickable "
        dynamic-body="shape: box; mass: 2"
        primitive="a-box"
        position={this.props.pos}
        src={this.props.src}
        depth={this.props.size}
        height={this.props.size}
        width={this.props.size}
        rotation={{
          x: randomNum(-10, 10),
          y: randomNum(-10, 10),
          z: randomNum(-10, 10),
        }}
        events={{
          click: this.handleClick.bind(this)
        }}
      />
    );
  }
}
export default TexturedCube;
