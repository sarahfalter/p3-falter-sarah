

class Lunch {
    constructor(body) {
        this.body = body;
    }

    /*const btn = document.getElementById("clickme");

    btn.addEventListener('click', function() { });*/

    randomizeLunches() {
        let itemsRandom = ['tacos', 'tomato soup', 'caesar salad', 'burrito bowl', 'pasta primavera', 'turkey club', 'smoothie bowl', 'chicken teriyaki', 'lamb gyro', 'cajun wrap'];
    itemsRandom.sort(function(a, b){return 0.5 - Math.random()});
    }
    showResults() {
        for (var i = 0; i < itemsRandom.length; i++) {
        document.getElementById("content").innerHTML = itemsRandom[i];
      }
    }

}

export const lunchGen = new Lunch('randomizeLunches(), showResults()');
