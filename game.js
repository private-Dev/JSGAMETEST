import Player from "./player.js";

import InputHandler from "./inputHandler.js";

import UI from "./ui.js";
import UIMENU from "./UIMENU.js";
import UIOPTION from "./uioption.js";

import Trouper from "./enemy/trouper.js";
import Assassin from "./enemy/assasin.js";

import GameState from "./gameState.js";
import MenuState from "./menuState.js";
import OptionState from "./optionState.js";



export default class Game {

    constructor (width, height){

        this.width = width;
        this.height = height;
        this.keys = [];
        this.enemies = [];
        this.objects = [];
        this.player = new Player(this);
        this.input = new InputHandler(this);
        this.ui = new UI(this);
        this.uimenu = new UIMENU(this);
        this.uioption = new UIOPTION(this);
        this.maxEnemies = 15;
        this.EnemyInterval = 1500;
        this.EnemyTimer = 0;
        this.score = 0;
        this.currentState = 'gameState';
        this.stateGame = new GameState(this);
        this.menuGame = new MenuState(this);
        this.optionGame = new OptionState(this);
        this.deathParticles = [];

    }



    /**
     * 
     * @param {*} deltaTime 
     */
    update(deltaTime){
      

        if (this.currentState == "gameState"){
            this.stateGame.update(deltaTime);
        }else if (this.currentState == "menuState"){
            this.menuGame.update(deltaTime);
        }else if (this.currentState == "optionState"){
            this.optionGame.update(deltaTime);
        }
        
    }

    /**
     * 
     * @param {*} context 
     */
    draw(context){
  
        if (this.currentState == "gameState"){
            this.stateGame.draw(context);
        }else if (this.currentState == "menuState"){
            this.menuGame.draw(context);
        }else if (this.currentState == "optionState"){
            this.optionGame.draw(context);
        }
        
    }

    /**
     * 
     */
    addEnemy(){
        let r = Math.floor(Math.random() * 100) + 1;
        if (r < 80 ){
            this.enemies.push(new Trouper(this));
        }else{
            this.enemies.push(new Assassin(this));
        }
            
    }

     /**
      * 
      * @param {*} rect1 
      * @param {*} rect2 
      */   
    checkCollision(rect1,rect2){
        return ( rect1.x < rect2.x + rect2.width &&
                 rect1.x + rect1.width > rect2.x   &&
                 rect1.y < rect2.y + rect2.height &&
                 rect1.y + rect1.height > rect2.y 
        )
    }

}