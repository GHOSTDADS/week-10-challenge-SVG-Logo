const { Triangle, Circle, Square } = require('./shapes.js');
const Text = require('./text.js');
const { createDocument } = require('./document.js');


describe('triangle', () => {

    it('it should use setColour method to print out code with the fill set to pink', () => {
        const shape = new Triangle("red");
        shape.setColour("pink");
        expect(shape.render()).toEqual('<polygon points="150,10 50,175 250,175" fill="pink" />');
    });

    it('it should print out code with fill set to #FF12FF', () => {
        const shape = new Triangle("#FF12FF");
        expect(shape.render()).toEqual('<polygon points="150,10 50,175 250,175" fill="#FF12FF" />');
    })

});

describe('Circle', () => {

    it('it should use setColour method to print out code with the fill set to pink', () => {
        const shape = new Circle("red");
        shape.setColour("pink");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="pink" />');
    });

    it('it should print out code with fill set to #FF12FF', () => {
        const shape = new Circle("#FF12FF");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#FF12FF" />');
    })

});

describe('Square', () => {

    it('it should use setColour method to print out code with the fill set to pink', () => {
        const shape = new Square("red");
        shape.setColour("pink");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="pink" />');
    });

    it('it should print out code with fill set to #FF12FF', () => {
        const shape = new Square("#FF12FF");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="#FF12FF" />');
    })

});

describe('Create document function', () => {

    it('it should use the switch statement to print the circle class render code.', () => {
        const data = {
            text: 'ABC',
            textColour: 'RED',
            shape: 'Circle',
            shapeColour: 'blue'
          };
        
        expect(createDocument(data)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="RED">ABC</text>
    </svg>`)
    })
})