import { Actor, Vector, Keys, CollisionType, Shape } from "excalibur";
import { Resources } from './resources.js';

export class Player extends Actor {
    constructor(x, y, width = 50, height = 50, isPlayer1 = true) {
        super({
            width: width,
            height: height,
            pos: new Vector(x, y),
            vel: new Vector(0, 0),
            collisionType: CollisionType.Active
        });

        if (isPlayer1) {
            this.graphics.use(Resources.RedCar.toSprite());
        } else {
            this.graphics.use(Resources.BlueCar.toSprite());
        }
        
        this.isPlayer1 = isPlayer1; // Track if this is player 1 or player 2
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;

        // Player 1 controls
        if (this.isPlayer1) {
            if (engine.input.keyboard.isHeld(Keys.W)) {
                yspeed = -200;
            }
            if (engine.input.keyboard.isHeld(Keys.S)) {
                yspeed = 200;
            }
            if (engine.input.keyboard.isHeld(Keys.D)) {
                xspeed = 200;
            }
            if (engine.input.keyboard.isHeld(Keys.A)) {
                xspeed = -200;
            }
        }
        // Player 2 controls
        else {
            if (engine.input.keyboard.isHeld(Keys.Up)) {
                yspeed = -200;
            }
            if (engine.input.keyboard.isHeld(Keys.Down)) {
                yspeed = 200;
            }
            if (engine.input.keyboard.isHeld(Keys.Right)) {
                xspeed = 200;
            }
            if (engine.input.keyboard.isHeld(Keys.Left)) {
                xspeed = -200;
            }
        }

        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x > 0);
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        // Collision logic here:
    }
}
