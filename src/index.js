import { header } from './modules/header';
import { footer } from './modules/footer';
import { lunch } from './modules/lunch-generator';

class App {

    constructor() {
    this.renderTemplate();
    lunch.addBtn();
    lunch.showResults();
    }

renderTemplate() {
    const template = `
      <header class="background">
          <div class="logo">
            <img src="${header.logo}" alt="" title="" width="50">
            <p>${header.title}</p>
          </div>
      </header>
    
        <div class="graphics">
          <img class="mob-graphic" src="../img/graphic-mobile.svg" alt="" title="" width="500">
          <img class="desk-graphic" src="../img/desk-graphic.svg" alt="" title="" width="500">
          <img class="desk-detail" src="../img/side-graphic-desk.svg" alt="" title="" width="300">
        </div>

        <div class="hero-text">
          <h1>What's For Lunch?</h1>
            <div class="box">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <main>
          <h2>Your lunch is...</h2>
          <button id="clickme">Give me an Idea</button> 
              <section id="content">  
              </section>
              <img id="food-img" src="" alt="" title="">
        </main>

        <footer>
          <p>${footer.copyright}</p>
          <p>${footer.credits}</p>
        </footer>
    `;

    document.body.innerHTML = template;
   }

  }

  new App;