import { h, Component } from 'preact';
import { Entity } from 'aframe-react';

export class Controller extends Component {

  registerController() {
    AFRAME.registerComponent(`my-controller`, {
      init: function() {
        this.el.addEventListener('triggerdown', e => this.handleTriggerDown(e))
      },

      handleTriggerDown: function (evt) {
        this.el.emit('my-triggerdown', {controller: this.el}, true);                                     
      },
    });
  }
  

  render() {
    this.registerController();
    return (
      <Entity>
        <a-entity oculus-go-controls id="leftHand" laser-controls="hand: left" raycaster="objects: [mixin='box']"></a-entity>
        <a-entity oculus-go-controls id="rightHand" laser-controls="hand: right" raycaster="objects: [mixin='box']" line="color: #118A7E"></a-entity>
      </Entity>
    );
  }
}

export default Controller;