class Lunch {
    constructor(body) {
        this.body = body;
    }

    randomizeLunches() {    
        let itemsRandom = [
            ['Pasta', '../img/pasta.svg'], 
            ['Burgers', '../img/burger.svg'], 
            ['Fruity Acai Bowl', '../img/fruit.svg'], 
            ['Hotdogs', '../img/hotdog.svg'], 
            ['Ramen', '../img/ramen.svg'], 
            ['Chicken Teriyaki Rice Bowl', '../img/rice.svg'], 
            ['Mediterranean Skewers', '../img/skewers.svg'], 
            ['Sushi', '../img/sushi.svg'],
            ['Skip straight to happy hour', '../img/drink.svg'],
            ['Pizza', '../img/pizza.svg']
    
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
