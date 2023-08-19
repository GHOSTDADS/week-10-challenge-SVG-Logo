

class Text {
    constructor(text, textColour){
        this.text = text;
        this.textColour = textColour;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>`
    }
};

module.exports = Text;