import { h, Component } from 'preact';

class Assets extends Component {
  render() {
    return (
      <a-assets>
        <a-asset-item id="frying-pan" src="model/frying-pan/frying-pan.gltf" />
        <a-asset-item id="the-egg" src="model/the-egg/the-egg.gltf" />
      </a-assets>
    );
  }
}
export default Assets;
