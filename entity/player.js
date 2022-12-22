import Projectile from "../projectile/projectile.js";
import Vector from "../utils/Vector.js";

 export default class Player {

    /**
     * 
     * @param {*} game 
     */
    constructor (game){
        // by ref always !!! not a copy
        this.game  = game;
        this.width = 20;
        this.height = 20;
        this.speedY = 0;
        this.speedX = 0;
        this.maxSpeed = 2;
        this.projectiles =  [];
        this.ammo = 20;
        this.shield = 100
        this.maxShield = 100
        this.maxAmmo = 50;
        this.ammoTimer = 0;
        this.ammoInterval = 500;
        this.BonusFire = false;
        this.xp = 6;
        this.lvl = 1;
        this.position = new Vector(this.game.width * 0.5, this.game.height * 0.5);


    }

    start(){

    }
    /**
     * 
     */
    update(deltaTime){
        // on ajout dans le temps des munitions au player  ...    
       /* if (this.ammoTimer > this.ammoInterval && this.ammo < this.maxAmmo){
            this.ammo++;
            this.ammoTimer = 0;
        }else{
            this.ammoTimer += deltaTime;
        }*/

        // gestion mouvement du player
        if (this.game.keys.includes('ArrowUp')){
            this.speedY = -this.maxSpeed;
        }else if (this.game.keys.includes('ArrowDown')) {
            this.speedY = this.maxSpeed;
        }else this.speedY = 0;

        if (this.game.keys.includes('ArrowLeft')){
            this.speedX = -this.maxSpeed;

        }else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxSpeed;
        }else this.speedX = 0;


        if (this.game.keys.includes('a')){
    
            //this.shootUp();
            // previent le multi shoot ... pas terrible mais ca fonctionne à améliorer
            if (this.game.keys.indexOf('a') > -1){
               // this.game.keys.splice(this.game.keys.indexOf('a'), 1);
            }
           
        }
        this.position.x += this.speedX;
        this.position.y += this.speedY;

        this.projectiles.forEach(projectile => {
            projectile.update();
        });

        //delete marked projectile
         this.projectiles = this.projectiles.filter(projectile => !projectile.removeElement);
        

        
    }
    /**
     * 
     * @param {*} context 
     */
    draw(context){
        context.fillStyle = 'white';
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
        //context.fillRect(this.x + this.width,this.y + this.width / 4,this.width/2,this.height/2);

        this.projectiles.forEach(projectile => {
            projectile.draw(context);
        });
        
    }

    /*shootUp(){
        if (this.ammo > 0){
            this.projectiles.push(new Projectile(this.game, this.x, this.y));
            this.ammo--;
            console.table(this.projectiles);
        } 
        
    }*/


}