export default class Ennemy {
    constructor(game){
        this.game  = game;
        this.width = 15;
        this.height = 15;
        //@todo we want to randomize the spaw
        // with certain colusion
        this.x = this.game.width - 50;

        this.y = 15;
        this.speedX = 0.2;
        this.speedY = 0.2;
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

        if (this.game.player.x <= this.x){
            this.x -= this.speedX;
        }else{
            this.x += this.speedX;
        }


        if (this.game.player.y <= this.y){
            this.y -= this.speedY;
        }else {
            this.y += this.speedY;
        }

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
        context.fillRect(this.x,this.y,this.width,this.height);

        this.particles.forEach(particle =>{
            particle.draw(context);
        })
    }
}