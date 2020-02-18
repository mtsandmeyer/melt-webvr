import { h, Component } from 'preact';
import { Entity } from 'aframe-react';

export class FloatingAlbum extends Component {
  
  constructor() {
    super();
    this.state = {
      albumPosition: {x: 0, y: 3.3, z: -2},
    };
  }

  render() {
    return (
      <Entity
        animation__rotate={{
          property: 'rotation',
          dur: 20000,
          easing: 'linear',
          loop: true,
          to: { x: 0, y: 360, z: 0 }
        }}
        animation__oscillate={{
          property: 'position',
          dur: 5000,
          dir: 'alternate',
          easing: 'linear',
          loop: true,
          from: this.state.albumPosition,
          to: {
            x: this.state.albumPosition.x,
            y: this.state.albumPosition.y + 0.1,
            z: this.state.albumPosition.z
          }
        }}
      >
        <Entity 
          class="clickable"
          primitive="a-box"
          material="shader: flat"
          rotation="-10 0 0"
          width={1.2}
          height={1.2}
          depth={0.02}
          src="img/melt-image.jpg"
        />
      </Entity>
    );
  }
}

export default FloatingAlbum;
