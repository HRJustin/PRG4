import { Actor, Scene, Vector, Color, BoundingBox, Sound, Timer } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './player.js';
import { Background } from "./background.js";

export class Level1 extends Scene {
    onActivate() {
        this.background = new Background(Resources.Background.toSprite(), 750, 370, 5, 5);
        this.add(this.background);

        // Create Player 1 (Red Car)
        this.player1 = new Player(400, 300, 50, 50, true);
        this.add(this.player1);

        // Create Player 2 (Blue Car)
        this.player2 = new Player(500, 300, 50, 50, false);
        this.add(this.player2);
    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);

        // Player 1 camera follow
        const player1Pos = this.player1.pos;
        this.camera.pos = player1Pos;

        // Player 2 camera follow
        // const player2Pos = this.player2.pos;
        // this.camera.pos = player2Pos;
    }
}
