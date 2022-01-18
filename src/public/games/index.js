import 'react';
import 'phaser';
import Level01 from './level01.js';

export default class Game extends React.Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      parent: "game",
      width: 896,
      height: 448,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [Level01],
      physics: {
        default: "arcade",
        arcade: {
          gravity: {
            y: 0,
          },
          debug: true,
          showBody: true,
          showStaticBody: true,
        },
      },
    };

    const game = new Phaser.Game(config);
  }

  render() {
    return <dev id="phaser-game" />;
  }
}
