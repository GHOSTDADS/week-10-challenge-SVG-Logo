const inquirer = require('inquirer');
const fs = require('fs');
const { createDocument } = require('./document.js');

const hexaCode = new RegExp("^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$");
const colourWords = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightpink', 'lightsalmon', 'orange', 'red', 'white', 'yellow', 'turquoise', 'violet', 'purple', 'pink'];

class CreateSVG {
    constructor() {

    };

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Please enter up to 3 characters for your logo text.',
                    validate: (text) => {
                        if(!text.length) {
                            return 'Please enter your logo text.'
                        }
                        if(text.length > 3) {
                            return 'Please enter logo text between 1 to 3 characters long.'
                        }

                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'textColour',
                    message: "Please enter a colour keyword or Hexadecimal number for you logo's text colour",
                    validate: (text) => {
                        if(!text.length) {
                            return 'Please enter your logo text.'
                        }
                        if(!hexaCode.test(text) && !colourWords.includes(text.toLowerCase())) {
                            return 'Please enter a valid 3 or 6 hex colour code or a valid colour keyword.'
                        }

                        return true;
                    }

                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please select your logos shape:',
                    choices: ['Square', 'Circle', 'Triangle']
                },
                {
                    type: 'input',
                    name: 'shapeColour',
                    message: "Please enter a colour keyword or Hexadecimal number for you logo's shape colour",
                    validate: (text) => {
                        if(!text.length) {
                            return 'Please enter your logo text.'
                        }
                        if(!hexaCode.test(text) && !colourWords.includes(text.toLowerCase())) {
                            return 'Please enter a valid 3 or 6 hex colour code or a valid colour keyword.'
                        }

                        return true;
                    }
                }
            ]).then((answers) => {

                fs.writeFile(`logo.svg`, createDocument(answers), (err) =>
                err ? console.error(err) : console.log('Generated logo.svg'))

            })
    }
};

module.exports = CreateSVG;

