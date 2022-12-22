

export default class Vector {

    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    /**
     *
     * @param a {Vector}
     * @param b {Vector}
     * @returns {Vector}
     */
    normalize(){

      return new Vector(this.x / this.magnitude ,this.y / this.magnitude);
    }

    static magnitude(a,b){
        return (Math.sqrt((a.x * b.x )  + (a.y * b.y ) ));
    }

    magnitude(){
        return (Math.sqrt((this.x * this.x )  + (this.y * this.y ) ));
    }

    sqrMagniture(){

    }

    /**
     *
     * @param a {Vector}
     * @param b {Vector}
     * @returns {Vector}
     */
    static add(a, b){
        return new Vector( a.x + b.x , a.y + b.y )

    }

    /**
     *
     * @param a {Vector}
     */
     add(a){
        this.x += a.x;
        this.y += a.y;
    }

    /**
     *
     * @param a {Vector}
     * @param value
     * @returns {Vector}
     */
    static divide (a, value){
        return new Vector(a.x / value, a.y /value);
    }
    /**
     *  ici on veux connaitr ele vecteur de direction vers la target depuis l'origin
     * @param target {Vector}
     * @param origin {Vector}
     * @returns {Vector}
     */
    static direction (target ,origin){
        let v =  new Vector( target.x - origin.x,target.y - origin.y);
        return v;

    }

    /**
     * le resultat sera le même si on switch  a ou b
     * @param a {Vector}
     * @param b {Vector}
     * @returns {number}
     */
    static distance( a, b){

        let direction = new Vector( a.x - b.x,a.y - b.y);
        return direction.magnitude();

    }


}