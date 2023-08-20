class Shape {
    constructor(colour) {
        this.colour = colour;
    };

    setColour(colour) {
        return this.colour = colour;
     };
};


class Circle extends Shape {
    constructor(colour) {
        super(colour);
    };

    render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
    };
};

class Square extends Shape {
    constructor(colour) {
        super(colour);
    };

    render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.colour}" />`;
    };
};

//class to make a triangle
class Triangle extends Shape {
    constructor(colour) {
        super(colour);
    };

    render() {
    return `<polygon points="150,10 50,175 250,175" fill="${this.colour}" />`;
    };
};

module.exports = { Triangle, Circle, Square, Shape };
