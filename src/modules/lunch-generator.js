class Lunch {
    constructor(body) {
        this.body = body;
    }

    randomizeLunches() {    
        let itemsRandom = [
            ['taco', '../img/plate.svg'], 
            ['taco2', '../img/taco2.png'], 
            ['taco3', '../img/taco3.png'], 
            ['taco4', '../img/taco4.png'], 
            ['taco5', '../img/taco5.png'], 
            ['taco6', '../img/taco6.png'], 
            ['taco7', '../img/taco7.png'], 
            ['taco8', '../img/taco8.png']
    
    ];

    return itemsRandom[Math.floor(Math.random() * itemsRandom.length)];
    }

    showResults() {

      document.getElementById("content").innerHTML = this.randomizeLunches()[0];
      document.getElementById("food-img").src = this.randomizeLunches()[1];
    }

    addBtn () {
        const btn = document.getElementById("clickme");
    
        btn.addEventListener('click', () => { 
            let results = this.randomizeLunches();
            document.getElementById("content").innerHTML = results[0];
            document.getElementById("food-img").src = results[1];
        });
    
        
        }
}

export const lunch = new Lunch('anything');
