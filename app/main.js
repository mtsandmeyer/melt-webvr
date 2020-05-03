import { h, Component } from 'preact';
import { Entity, Scene } from 'aframe-react';
import TexturedCube from './custom-components/textured-cube';
import SceneCamera from './custom-components/scene-camera';
import EnvironmentChanger from './custom-components/environment-changer';
import Assets from './custom-components/assets';
import TexturedBall from './custom-components/textured-ball';
import SongPillar from './custom-components/song-pillar';
import FloatingAlbum from './custom-components/floating-album';
import Controller from './custom-components/controller';

class Main extends Component {

  render() {
    return (
      <Scene
        //physics="debug: true"
        environment={{
          preset: 'tron',
        }}
      >
        <Entity 
          // The ground
          primitive="a-plane"
          color="white"
          rotation="90 0 0"
          static-body
          scale="100 100 100"
        />
        <Controller />
        <EnvironmentChanger />
        <SceneCamera />
        <FloatingAlbum pos={{x: 0, y: 3.3, z: -2}} />
        <SongPillar pos={{x: 0, y: 1.5, z: -2}} rotation="-5 0 0" title="Real Life" info="Written by Murray Sandmeyer and Christian DeKnatel. Produced by Murray WOW." src="img/melt-image.jpg" lyrics="Who on Earth has the time for the Real Life? We could live in the sky when you realize. If we say our goodbyes in the real life, hope I see you at night when I'm online. " />
        <SongPillar pos={{x: -1.9, y: 1.5, z: -1.3}} rotation="-5 55 0" title="WHEReVR" animateTitle="true" info="Written by Murray, Christian DeKnatel, and Kyle McCrosson. Produced by Murray WOW." src="img/wherever-image.jpg" lyrics="I won't live a day in my life. Sometimes I wanna go elsewhere. WHEReVR, Somewhere. Elsewhere, where losers win. I'm sick of wasting my time. My house will never be better. " />
        <SongPillar pos={{x: 1.9, y: 1.5, z: -1.3}} rotation="-5 -55 0" title="Pet Sounds" info="Written by Murray Sandmeyer. Produced by Murray WOW. " src="img/melt-image.jpg" lyrics="I have a pet I have imagined. He loves the ocean. His eyes are green. When I wake up, I know he'll be there. With me forever. Eternity. I'll let him stare at me. He looks so sad. " />
        <SongPillar pos={{x: -2.2, y: 1.5, z: 0.7}} rotation="-5 105 0" title="Lupita Nyong'o" info="Written by Murray, Zaid Khan, and Michael Rossi Santomauro. Produced by Murray WOW." src="img/lupita-image.jpg" lyrics="Lupita, you beam when it's showtime. You might never think of me, but you taught me how to dream. Though you might be out my league, Oh Lupita notice me. " />
        <SongPillar pos={{x: 2.2, y: 1.5, z: 0.7}} rotation="-5 -105 0" title="Enemy" animateLyrics="true" info="Written by Kyle Jordan and Murray       Sandmeyer. Produced by Murray WOW." src="img/enemy-image.jpg" lyrics="Opened a door, been here before. The labyrinth wall, and your name is the one I call. I'll be myself. If nothing else, die by the sword. Promise you'll never be bored. " />
        <SongPillar pos={{x: -0, y: 1.5, z: 1.5}} rotation="-5 180 0" title="Creep" animateLyrics="true" animateInfo="true" info="Written by Murray Sandmeyer. Produced by Murray WOW." src="img/creep-image.jpg" lyrics="I don't know why I kept hiding myself. Some people remind me of when I didn't know. This isn't my home. There's nothing to do here and no one I know near. " />
        <SongPillar pos={{x: -0, y: 3.1, z: 1.5}} rotation="10 180 0" title="First" info="Written by Murray Sandmeyer and Kyle McCrosson. Produced by Murray WOW." src="img/melt-image.jpg" lyrics="I thought God was a crier and it rains when she's tired. But you know I'm a liar. You knew me as a child. And I grew up, faster, first. Always been a trier. I've been sturdier and higher." />
        <SongPillar pos={{x: 2.2, y: 3.1, z: 0.7}} rotation="10 -105 0" title="Us" info="Written by Murray, Kyle McCrosson, and Christian DeKnatel. Produced by Murray WOW." src="img/melt-image.jpg" lyrics="The seasons turn. Friendships will too, or change their color. I breathed in dust, and sat among my favorite people. If I look back, I'll think of you. And remember... " />
        <SongPillar pos={{x: -2.2, y: 3.1, z: 0.7}} rotation="10 105 0" title="Promises" animateInfo="true" info="Written by Murray Sandmeyer. Produced by Murray WOW." src="img/wherever-image.jpg" lyrics="I'll never try again. If you wanna be my friend, then I guess this is the end. I read your messages, and the empty promises, and the worst part of it is I don't feel a thing. " />
        <SongPillar pos={{x: 31, y: 1.5, z: -49}} rotation="-5 180 0" title="Cyber Fjord " animateLyrics="true" animateInfo="true" animateTitle="true" info="Written by Murray Sandmeyer. Produced by Murray WOW. " src="img/floor.jpg" lyrics="She spils form the slipeeng iec. Gneer, fhser, fere to folw thuorgh the gaert fdroj. Psat the bule mouiatnns. She gedils smhtooly tlal eveergrens ceehr her on. " />
        <TexturedBall pos={{x: 0, y: 2, z: 1}} radius={0.2} src="img/small-electronic-texture.jpg" />
        <TexturedCube pos={{x: 1.3, y: 1, z: -1}} size={0.4} src="img/small-electronic-texture.jpg" />
        <TexturedCube pos={{x: -1.2, y: 1.2, z: -1.4}} size={0.4} src="img/small-electronic-texture.jpg" />
        <Assets />
      </Scene>
    );
  }
}
export default Main;
