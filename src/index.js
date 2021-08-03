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
      <header>
        <p>${header.title}</p>
        <img src="${header.logo}" alt="" title="">
      </header>
      <main>
      <section>
        <h1>What's For Lunch?</h1>
        <button id="clickme"></button>
      </section>
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