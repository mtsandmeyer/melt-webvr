import { h, Component } from 'preact';
import { Entity } from 'aframe-react';
const uuidv1 = require('uuid/v1');

const glowBlue = '#ccccff';

export class SongPillar extends Component {
  constructor() {
    super();
    const uuid = uuidv1();
    this.state = {
      id: uuid,
    };
  }
  
  animateLyrics() {
    let animatedText = this.props.lyrics;

    AFRAME.registerComponent(`lyrics-text-${this.state.id}`, {
      tick: function() {
        var el = this.el;
        const char = animatedText.substr(0, 1);
        animatedText = animatedText.substr(1).concat(char);
        el.setAttribute('text', 'font: exo2bold; color: #ccccff; width: 0.4; height: 2; value: ' + animatedText);
      }
    });
  }

  animateTitle() {
    let animatedText = this.props.title;

    AFRAME.registerComponent(`title-text-${this.state.id}`, {
      tick: function() {
        var el = this.el;
        const char = animatedText.substr(0, 1);
        animatedText = animatedText.substr(1).concat(char);
        el.setAttribute('text', 'font: exo2bold; color: #ccccff; width: 2; value: ' + animatedText);
      }
    });
  }

  animateInfo() {
    let animatedText = this.props.info;

    AFRAME.registerComponent(`info-text-${this.state.id}`, {
      tick: function() {
        var el = this.el;
        const char = animatedText.substr(0, 1);
        animatedText = animatedText.substr(1).concat(char);
        el.setAttribute('text', 'font: exo2bold; color: #ccccff; width: 0.6; value: ' + animatedText);
      }
    });
  }

  handleClick() {
    //click event
  }

  render() {

    setTimeout(() => {
      // Each animated text component needs a unique attribute for aframe reasons
      const lyricsEl = document.querySelector(`a-box[uuid="${this.state.id}"] a-entity[lyrics-text]`);
      lyricsEl.setAttribute(`lyrics-text-${this.state.id}`, 'true');

      const infoEl = document.querySelector(`a-box[uuid="${this.state.id}"] a-entity[info-text]`);
      infoEl.setAttribute(`info-text-${this.state.id}`, 'true');

      const titleEl = document.querySelector(`a-box[uuid="${this.state.id}"] a-entity[title-text]`);
      titleEl.setAttribute(`title-text-${this.state.id}`, 'true');
    }, 200);
    // Register tick function to possibly animate each text element
    if (this.props.animateLyrics) {
      this.animateLyrics();
    }
    if (this.props.animateTitle) {
      this.animateTitle();
    }
    if (this.props.animateInfo) {
      this.animateInfo();
    }
    return (
      <Entity
        //foundation slab
        uuid={this.state.id}
        primitive="a-box"
        static-body
        class="clickable"
        depth={0.1}
        height={1.5}
        width={2}
        position={this.props.pos}
        rotation={this.props.rotation}
        src="img/slab-texture.jpg"
        events={{
          click: this.handleClick.bind(this)
        }}
      >
        <Entity 
          //slab that holds box with song image
          primitive="a-box"
          depth={0.1}
          height={0.9}
          width={0.9}
          position={{x: -0.6, y: 0.45, z: 0.09}}
          src="img/slab-texture.jpg"
        >
          <Entity
            //box with song image texture
            material="shader: flat"
            primitive="a-box"
            depth={0.1}
            height={0.8}
            width={0.8}
            position={{x: 0, y: 0, z: 0.05}}
            src={this.props.src}
          />
        </Entity>

        <Entity 
          //title text
          title-text
          position={{x: 1.7, y: 0.5, z: 0.1}}
          scale="1.8 4 3"
          text={{
            font: 'exo2bold',
            color: glowBlue,
            width: 2,
            value: this.props.title,
          }}
        />
        <Entity 
          //info text
          info-text
          position={{x: 0.45, y: 0.15, z: 0.1}}
          scale="1.8 4 3"
          text={{
            font: 'exo2bold',
            color: glowBlue,
            width: 0.6,
            value: this.props.info,
          }}
        />
        <Entity 
          //lyrics text
          //text="font: exo2bold; color: #ccccff; width: 0.4; height: 2; value: ""
          lyrics-text
          class="lyrics"
          position={{x: 0.05, y: -0.3, z: 0.1}}
          scale="4 6 3"
          text={{
            font: 'exo2bold',
            color: glowBlue,
            width: 0.4,
            height: 2,
            value: this.props.lyrics,
          }}
        />

      </Entity>
    );
  }
}

export default SongPillar;
