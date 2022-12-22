import Vector from "../utils/Vector.js";

export default class Ennemy {
    constructor(game){
        this.game  = game;
        this.width = 15;
        this.height = 15;
        //@todo we want to randomize the spaw
        // with certain colusion
        this.x = this.game.width - 50;
        this.y = 15;

        this.position = new Vector(this.x,this.y);
        this.velocity = 1;
        this.removeElement = false;
        this.maxSpeed = 2;  
        this.color = 'red';    
        this.lives = 1;
        this.UnitShieldRemovedOnHIt = 5;
        this.score = this.lives;
        this.particles = [];
    }
    update(){
        //@todo we want to chase player here
        //@todo instead of go right to left botder of the screen
        //this.x += this.speedX;
        let playerP = new Vector(this.game.player.position.x , this.game.player.position.y);
        let enemyP =  new Vector(this.position.x , this.position.y);

        // on cherche la distance entre deux vecteurs
        let direction = Vector.direction(playerP,enemyP);
        // get the length of the vector
        console.log(direction.magnitude());

        // ou bien on peu directement avoir la longueur du vecteur avec
        // ici l'ordre des params n'a pas d'importance
        let distance = Vector.distance(playerP,enemyP);
        let nV = Vector.divide(direction, direction.magnitude());
       /* let normalizedVector = this.position.normalize(playerP,enemyP);
        console.log('normalized vector' + normalizedVector.x + ' /// '+normalizedVector.y);*/
       /* console.log("magnitude : " + magnitude);
        console.log("Direction : " + direction);*/

        this.position.add(nV);
      /*  this.position.x +=   normalizedVector.x  * this.velocity;
        this.position.y +=   normalizedVector.y  * this.velocity;*/



       // this.x +=   nVx  * this.velocity;
      //  this.y +=   nVy  * this.velocity;

        //this.x += direction.x;
        //this.y += direction.y;

        /*// old methode
        if (this.game.player.x <= this.x){
            this.x -= this.speedX;
        }else{
            this.x += this.speedX;
        }
        if (this.game.player.y <= this.y){
            this.y -= this.speedY;
        }else {
            this.y += this.speedY;
        }*/

        /*if (this.x + this.width < 0){
            this.removeElement = true;
            this.game.worldShield -= this.UnitShieldRemovedOnHIt;
        }*/
        
        this.particles.forEach(particle =>{
            particle.update();
        })
        
        this.particles = this.particles.filter(particle => !particle.removeElement);
    }

    draw(context){

        context.fillStyle = this.color;
        context.fillRect(this.position.x,this.position.y,this.width,this.height);

        this.particles.forEach(particle =>{
            particle.draw(context);
        })
    }
}