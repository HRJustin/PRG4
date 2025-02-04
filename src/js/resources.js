import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Background: new ImageSource('images/Placeholder_bg.png'),
    BlueBackground: new ImageSource('images/Blue_Background.png'),
    RedCar: new ImageSource('images/Red_Car.png'),
    BlueCar: new ImageSource('images/Blue_Car.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }