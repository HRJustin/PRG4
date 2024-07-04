import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { MainMenuScene } from './mainMenu.js';
import { Level1 } from './level1.js';

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        this.add('mainmenu', new MainMenuScene());
        this.add('level1', new Level1());

        this.goToScene('mainmenu');
    }
}

new Game()
