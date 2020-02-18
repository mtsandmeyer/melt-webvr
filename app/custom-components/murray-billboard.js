import { h, Component } from 'preact';
import { Entity } from 'aframe-react';

class MurrayBillboard extends Component {

  render() {
    return (
      <Entity
        //profile pic board
        primitive="a-box"
        class="clickable "
        material="shader: flat"
        position={this.props.pos}
        rotation={this.props.rotation}
        depth={0.1}
        height={9}
        width={6}
        src="img/profile-pic.jpg"
      >
        <Entity
          //alt melt board
          primitive="a-box"
          material="shader: flat"
          position={{x: -7, y: -1, z: -1}}
          rotation="2 8 0"
          depth={0.1}
          height={8}
          width={8}
          src="img/alt-melt-image.png"
        />
        <Entity
          //melt board
          primitive="a-box"
          material="shader: flat"
          position={{x: 7.6, y: 2, z: -1}}
          rotation="10 -10 0"
          depth={0.1}
          height={10}
          width={10}
          src="img/melt-image.jpg"
        />
        <Entity
          //lupita board
          primitive="a-box"
          material="shader: flat"
          position={{x: -12, y: -3, z: 1}}
          rotation="7 30 0"
          depth={0.1}
          height={5}
          width={5}
          src="img/lupita-image.jpg"
        />
        <Entity
          //wherever board
          primitive="a-box"
          material="shader: flat"
          position={{x: 15, y: 6, z: 1}}
          rotation="30 -30 0"
          depth={0.1}
          height={6}
          width={6}
          src="img/wherever-image.jpg"
        />
      </Entity>

    );
  }
}
export default MurrayBillboard;
