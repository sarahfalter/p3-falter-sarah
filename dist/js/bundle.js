(()=>{"use strict";const n=new class{constructor(n,t){this.title=n,this.logo=t}}("LunchApp","../img/lunchapp-logo.png"),t=new class{constructor(n,t){this.copyright=n,this.credits=t}}("Copyright 2021","Developed by Sarah Falter"),e=new class{constructor(n){this.body=n}randomizeLunches(){let n=[["Pasta!","../img/pasta.svg"],["Burgers!","../img/burger.svg"],["Fruity Acai Bowl!","../img/fruit.svg"],["Hotdogs!","../img/hotdog.svg"],["Ramen!","../img/ramen.svg"],["Chicken Teriyaki Rice Bowl!","../img/rice.svg"],["Mediterranean Skewers!","../img/skewers.svg"],["Sushi!","../img/sushi.svg"],["Tacos!","../img/taco.svg"],["Pizza!","../img/pizza.svg"]];return n[Math.floor(Math.random()*n.length)]}showResults(){document.getElementById("content").innerHTML=this.randomizeLunches()[0],document.getElementById("food-img").src=this.randomizeLunches()[1]}addBtn(){document.getElementById("clickme").addEventListener("click",(()=>{let n=this.randomizeLunches();document.getElementById("content").innerHTML=n[0],document.getElementById("food-img").src=n[1]}))}}("anything");new class{constructor(){this.renderTemplate(),e.addBtn(),e.showResults()}renderTemplate(){const e=`\n      <header class="background">\n          <div class="logo">\n            <img src="${n.logo}" alt="" title="" width="50">\n            <p>${n.title}</p>\n          </div>\n      </header>\n    \n        <div class="graphics">\n          <img class="mob-graphic" src="../img/graphic-mobile.svg" alt="" title="" width="500">\n          <img class="desk-graphic" src="../img/desk-graphic.svg" alt="" title="" width="500">\n          <img class="desk-detail" src="../img/side-graphic-desk.svg" alt="" title="" width="300">\n        </div>\n\n        <div class="hero-text">\n          <h1>What's For Lunch?</h1>\n            <div class="box">\n            <span></span>\n            <span></span>\n            <span></span>\n            </div>\n        </div>\n\n        <main>\n          <button id="clickme">Click to get your lunch!</button> \n              <section id="content">  \n              </section>\n              <img id="food-img" src="" alt="" title="">\n        </main>\n\n        <footer>\n          <p>${t.copyright}</p>\n          <p>${t.credits}</p>\n        </footer>\n    `;document.body.innerHTML=e}}})();