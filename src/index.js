import { header } from './modules/header';
import { footer } from './modules/footer';

class App {

    constructor() {
    this.renderTemplate();
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
      </section>
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