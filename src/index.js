import { Header } from './modules/header';
import { Footer } from './modules/footer';
import { lunchGen } from './modules/lunch-generator';



class App {

    constructor() {
    this.renderTemplate();
}

renderTemplate() {
    const template = `
      <h1>${header.title}</h1>
      <p>${body.body}</p>
      <footer>${footer.footer}</footer>
    `;

    document.body.innerHTML = template;
   }

}

new App;