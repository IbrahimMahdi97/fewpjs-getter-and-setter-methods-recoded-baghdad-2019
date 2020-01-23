// Add your Circle class here
class Circle {
    connstructor(radius) {
        this._radius = radius;
        this.pi = Math.PI;
    }
    get diameter() {
        this.diameter = this.radius * 2;
    }
    get circumference() {
        this.circumference = this.diameter * this.pi;
    }
    get area () {
        this.area = this.pi * (this.radius ** 2)
    }
    set diameter(radius) {
        this._radius = this.diameter/2
    }
    set area(radius) {
        this._radius = Math.sqrt (this.area/this.pi)
    }
    set circumference(radius) {
        this._radius = this.circumference/(2 * this.pi)
    }
}
