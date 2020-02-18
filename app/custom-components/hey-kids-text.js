import { h, Component } from 'preact';
import { Entity } from 'aframe-react';

export class HeyKidsText extends Component {
  render() {
    return (
      <Entity
        id="size" 
        position="0 8.131 -9.561"
        scale="20 20 1.001"
        animation={{
          property: 'scale',
          to: '15 15 15',
          dir: 'alternate', 
          loop: true,
          dur: 700,
        }}
        text={{
          font: 'mozillavr',
          color: 'black', 
          align: 'center', 
          value: 'HEY KIDS!', 
          width: 1.5,
        }}>
      </Entity>
    );
  }
}

export default HeyKidsText;
