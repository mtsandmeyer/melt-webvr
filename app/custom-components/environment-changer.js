import { h, Component } from 'preact';
import { Entity } from 'aframe-react';

const environmentPresets = [
  'default',
  'contact',
  'egypt',
  'checkerboard',
  'forest',
  'goaland',
  'yavapai',
  'goldmine',
  'arches',
  'threetowers',
  'poison',
  'tron',
  'japan',
  'dream',
  'volcano',
  'starry',
  'osiris'
];

const curatedPresets = [
  'default',
  'contact',
  'egypt',
  'yavapai',
  'arches',
  'threetowers',
  'tron',
  'japan',
  'dream',
];

export class EnvironmentChanger extends Component {
  constructor() {
    super();

    this.state = {
      environmentPreset: 'default'
    };
  }

  handleClick() {
    let chosenPreset = curatedPresets[Math.floor(Math.random() * curatedPresets.length)];
    while (chosenPreset === this.state.environmentPreset) {
      chosenPreset = curatedPresets[Math.floor(Math.random() * curatedPresets.length)];
    }
    this.setState({environmentPreset: chosenPreset});

    document
      .querySelector('a-scene')
      .setAttribute('environment', `preset: ${chosenPreset}`);
  }

  render() {
    AFRAME.registerComponent(`environment-changer`, {
      init: function() {
        this.el.addEventListener('my-triggerdown', e => this.handleClick());
      },
    });

    return (
      <Entity
        environment-changer
        class="clickable"
        animation__rotate={{
          property: 'rotation',
          dur: 15000,
          easing: 'linear',
          loop: true,
          to: { x: 0, y: -365, z: 0 }
        }}
        events={{
          click: this.handleClick.bind(this)
        }}
        primitive="a-octahedron"
        detail={2}
        radius={10}
        position={{x: 30, y: 25, z: -50}}
        material="shader: flat"
        src="https://i.imgur.com/NMFEEsp.png"
      />
    );
  }
}

export default EnvironmentChanger;
