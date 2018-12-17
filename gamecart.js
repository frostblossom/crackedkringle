import loadMap from './loadMap.js';
export class GameCart {
    constructor(pokitOS) {
        this.pokitOS = pokitOS;

    }
    preload() {
        loadMap(this.pokitOS);
    }
    start(){

    }

    
}