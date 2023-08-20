const { Triangle, Circle, Square } = require('./shapes.js');
const Text = require('./text.js');


function createDocument(data) {

    const text = new Text(data.text, data.textColour).render();
    let shape = data.shape;

    switch(shape) {
        case "Triangle":
            shape = new Triangle(data.shapeColour).render();
            break;
        case "Square":
            shape = new Square(data.shapeColour).render();
            break;
        case "Circle":
            shape = new Circle(data.shapeColour).render();
            break;   
    };


    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${text}
    </svg>`;
};

module.exports = { createDocument };