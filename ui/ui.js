export default class UI {
    constructor (game){
        
        this.game = game;
        this.fontSize  = 25;
        this.fontFamily = 'Helvetica';
        this.color = 'yellow';
    
    }

    draw(context){

        
            // ammo
           /* context.fillStyle = this.color;
            context.font = '15px serif';
           // context.fillText('('+this.game.player.ammo + ')', 1, 40)
            for(let i = 0; i < this.game.player.ammo; i++){
                context.fillRect( (38 + 3 * i),30,2,10);

            }*/

            /*context.fillStyle = 'blue';
            context.font = '18px serif';
            //context.fillText('('+this.game.player.shield + ')', 1, 65)
            for(let i = 0; i < this.game.player.shield; i++){
                context.fillRect( (37 + 1 * i),43,2,10);

            }*/


            // SHIELD
        /*    context.fillStyle = 'purple';
            context.font = '18px serif';
            let interval =this.game.height/ this.game.worldShield
            console.log(interval);
            context.fillText('('+this.game.worldShield + ')', 1, this.game.width-20)
            for(let i = 0; i < this.game.worldShield; i++){
                context.fillRect( ( 4 * i),this.game.height-15,interval,15);
            }*/

            //context.fillText('Score : '+ this.game.score , 400, 43)

        //PLAYER LVL barr
            let step = Math.round( (this.game.width - 3) / this.game.TexpLvl[this.game.player.lvl]);
            console.log('step : '+  step);
            context.strokeStyle = '#ffffff';
            context.strokeRect(1, 1, this.game.width - 2,15)
            context.fillStyle = 'blue';
           // context.fillText('('+this.game.worldShield + ')', 1, this.game.width-20)
            for(let i = 0; i < this.game.player.xp; i++){
                context.fillRect( ( i * step)+1,2,step,13);
            }
        context.font = '10px serif';
        context.fillStyle = '#ffffff';
        context.fillText('Lvl : '+ this.game.player.lvl , this.game.width-50, 12);
        //context.fillText('Score : '+ this.game.score , 400, 43)
    }
}