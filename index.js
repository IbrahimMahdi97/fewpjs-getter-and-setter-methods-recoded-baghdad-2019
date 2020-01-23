// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return this.diameter * pi;
    }
    get area () {
        this.area = pi * (this.radius ** 2)
    }
    set diameter(radius) {
        this.radius = this.diameter / 2
    }
    set area(radius) {
        this.radius = Math.sqrt ( area / pi )
    }
    set circumference(circumference) {
        this.radius = this.circumference / ( 2 * pi )
    }
}
