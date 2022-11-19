import ObjBarrel from "./object/objBarrel.js";
import State from "./state.js"

export default class GameState extends State{

    constructor(game){
        super(game);
        this.game = game;
        
    }

    update(deltaTime){
       

            if (this.game.EnemyTimer > this.game.EnemyInterval && this.game.enemies.length < this.game.maxEnemies){
                this.game.addEnemy();
                this.game.EnemyTimer = 0;
            }else{
                this.game.EnemyTimer += deltaTime;
            }
    
            this.game.player.update(deltaTime);
    
            this.game.enemies.forEach(enemy => {
                enemy.update();
                if (this.game.checkCollision(this.game.player,enemy)){
                    enemy.markedForDelection = true;
                }
                // test collision avec enemy et projectiles
                this.game.player.projectiles.forEach(projectile =>{
                    if (this.game.checkCollision(enemy,projectile)){
                        projectile.markedForDelection =true;
                       

                        enemy.lives--;
    
                        if (enemy.lives <= 0 ){
                            enemy.markedForDelection = true;
                            this.game.score += enemy.score;
                            this.game.objects.push(new ObjBarrel(this.game, enemy.x , enemy.y));    
                        }
                    }
                });
                // test collision entre player et object    
                this.game.objects.forEach(obj =>{
                    if (this.game.checkCollision(this.game.player, obj)){
                        obj.markedForDelection = true;
                        // on ajoute ici le bonus  ... je ne sais pas encore commetn cela va se faire
                    }

                });

            });
    
            this.game.enemies = this.game.enemies.filter(enemy => !enemy.markedForDelection);
            this.game.objects = this.game.objects.filter(obj => !obj.markedForDelection);

            console.log(this.game.objects);
    }

    draw(context){
        context.fillStyle = 'black';

        this.game.player.draw(context);

        this.game.enemies.forEach(enemy => {
            enemy.draw(context);
        });

        this.game.objects.forEach(obj => {
            obj.draw(context);
        });


        this.game.ui.draw(context);
    }

}