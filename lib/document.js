const { Triangle, Circle, Square } = require('./shapes.js');
const Text = require('./text.js');


function createDocument(data) {

    const text = new Text(data.text, data.textColour).render();
    let shape = data.shape;
    console.log(shape);
    console.info(data.shapeColour);

    switch(shape) {
        case "Triangle":
            shape = new Triangle(data.shapeColour).render();
            console.info('Triangle 1');
            console.info(shape);
            break;
        case "Square":
            shape = new Square(data.shapeColour).render();
            console.info("Square 1");
            console.info(shape);
            break;
        case "Circle":
            shape = new Circle(data.shapeColour).render();
            console.info('Circle 1');
            console.info(shape);
            break;   
    };


    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${text}
    </svg>`;
};

module.exports = { createDocument };