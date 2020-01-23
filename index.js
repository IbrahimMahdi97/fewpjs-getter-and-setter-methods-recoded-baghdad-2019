// Add your Circle class here
const pi = Math.PI

class Circle {
    connstructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return this.diameter * this.pi;
    }
    get area () {
        this.area = this.pi * (this.radius ** 2)
    }
    set diameter(radius) {
        this.radius = this.diameter / 2
    }
    set area(radius) {
        this.radius = Math.sqrt (this.area/this.pi)
    }
    set circumference(radius) {
        this.radius = this.circumference/(2 * this.pi)
    }
}
