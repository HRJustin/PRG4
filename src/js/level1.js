import { Actor, Scene, Vector, Color, BoundingBox, Sound, Timer } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './player.js'
import { Background } from "./background.js";

export class Level1 extends Scene {

    onActivate(){
        this.background = new Background(Resources.Background.toSprite(), 750, 370, 1.1, 1);
        this.add(this.background);

        this.player = new Player(400, 300, 50, 50, true);
        this.add(this.player);
    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);
        const playerPos = this.player.pos;
        this.camera.pos = playerPos; // Camera position (Following)
    }

}

