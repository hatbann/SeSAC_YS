/* ***Class*** */

class Car{
    constructor(color){
        this.color = color;
        this.isDoor = true;
    }

    Ismove(){
        console.log('move');
    }
    IsStop(){
        console.log('stop');
    }
    returnColor(){
        return this.color;
    }
}

module.exports = {Car};