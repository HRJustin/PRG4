import { Actor, Vector, Keys, SpriteSheet, CollisionType, Shape } from "excalibur";

let player1, player2, Resources;

async function initializeSpriteSheets() {
    const res = await import('./resources.js');
    Resources = res.Resources;

    player1 = SpriteSheet.fromImageSource({
        image: Resources.RedCar,
        grid: {
            rows: 6,
            columns: 8,
            spriteWidth: 187.5,
            spriteHeight: 250
        }
    });

    player2 = SpriteSheet.fromImageSource({
        image: Resources.BlueCar,
        grid: {
            rows: 6,
            columns: 8,
            spriteWidth: 187.5,
            spriteHeight: 250
        }
    });
}

initializeSpriteSheets();

export let previousScene = {
    scene: '',
};


export class Player extends Actor {

    constructor(width, height) {
        super({
            width: width,
            height: height,
        });

        this.graphics.use(Resources.RedCar.toSprite());
        this.pos = new Vector(x, y);
        this.vel = new Vector(0, 0);
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -200;
        }
        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 200;
        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 200
        }
        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -200
        }
        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x > 0)
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event));
    }
    hitSomething(event) {
    //     if (event.other instanceof Bridge) {
    //         if (event.other.identifier === "level1_bridge") {
    //             this.scene.engine.goToScene('level2');
    //         } else if (event.other.identifier === "level2_bridge") {
    //             this.scene.engine.goToScene('level1');
    //         }
    //     }
    //     if (event.other instanceof Enemy) {
    //         const enemyType = event.other.identifier; // save the enemy in a variable
    //         this.scene.engine.goToScene('enemyFight');
    //         this.scene.engine.currentEnemy = event.other; // Track the current enemy
    //         const enemyFightScene = this.scene.engine.scenes.enemyFight;
    //         enemyFightScene.updateEnemy(enemyType); // Change the enemy
    //     }
    }
}