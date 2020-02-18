import { h, Component } from 'preact';
import { Entity } from 'aframe-react';

export class SceneCamera extends Component {

  constructor() {
    super();

    this.state = {
      cursorHovering: false,
    };
  }

  render() {
    return (
      <Entity primitive="a-camera" look-controls>
        <Entity
          primitive="a-cursor"
          cursor={{ fuse: false }}
          material={{ color: 'white', shader: 'flat', opacity: 0.75 }}
          geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
          
          // Grow/shrink the cursor upon encountering a clickable
          event-set__1={{
            _event: 'mouseenter',
            scale: { x: 3, y: 3, z: 3 }
          }}
          event-set__2={{
            _event: 'mouseleave',
            scale: { x: 2, y: 2, z: 2 }
          }}
          raycaster={{
            objects: '.clickable'
          }}
        />
      </Entity>
    );
  }
}

export default SceneCamera;
