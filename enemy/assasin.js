import Ennemy from "./enemy.js";

export default class Assassin extends Ennemy{

    constructor(game){
        super(game);
        this.color ='purple'
        this.lives = 5;
        this.score = this.lives;
        this.UnitShieldRemovedOnHIt = 15;
        //@todo
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.y = Math.random() * (this.game.width * 0.9 - this.width);

    }
}