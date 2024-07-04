import { Scene, Actor, Color, Label, Keys, Font, Vector } from 'excalibur';
import { Background } from './background';
import { Resources } from './resources';

class MainMenuScene extends Scene {
    onInitialize(engine) {
        super.onInitialize(engine);

        const background1 = new Background(Resources.BlueBackground.toSprite(), 640, 350, 1, 1);
        this.add(background1);

        const subLabel = new Label({
            text: 'Press Enter to start',
            pos: new Vector(420, 500),
            font: new Font({
                size: 45,
                family: 'sans-serif',
                color: Color.Red,
                bold: true
            })
        });

        this.add(subLabel);
    }


    update(engine, delta) {
        super.update(engine, delta);

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            engine.goToScene('level1');
        }
    }
}

export { MainMenuScene };
