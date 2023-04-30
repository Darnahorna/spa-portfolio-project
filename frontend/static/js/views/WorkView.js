// import AbstractView from "./AbstractView.js";
import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("SPA | Work");
  }

  async getHtml() {
    return `
             <section>
      <h1>My latest projects</h1>
      <p>It is a list of my projects 🐣</p>

      <div class="project">
        <div class="left-side-project">
          <img
            src="./static/images/vanilla-note-appPNG.webp"
            alt="Vanilla Note App"
            title="Vanilla Note App"
            class="img-fluid"
          />
        </div>
        <div class="right-side-project">
          <h2>Vanilla Note App 📔</h2>
          <p class="less-accent-text">VanillaJS, HTML/CSS</p>
          <p>
            It is an hometask project for the Radency interneship. Users can
            add, edit and remove notes. The code for this makes use of the
            following HTML, CSS, JS features: Local Storage, ES6 Import/Export
            Syntax, Classes, Arrow Functions, Static Methods, Callback
            Functions, Event Listeners, QuerySelector, GetElementById, Template
            Strings, Class List, Flexbox.
          </p>
          <p class="less-accent-text">16.09.2022</p>
          <div class="button-block">
            <a
              href="https://note-app-vanilla-js.netlify.app/"
              target="_blank"
              class="main-button primary-button me-3"
              title="Vanilla Note App"
              >See project</a
            >
            <a
              href="https://gitlab.com/darnahorna/notes-app-in-vanilla-js"
              target="_blank"
              class="main-button outline-button"
              title="Vanilla Note App - GitLab"
              >See code</a
            >
          </div>
        </div>
      </div>

      <div class="project">
        <div class="left-side-project">
          <img
            src="./static/images/seabattle.webp"
            alt="React Sea Battle Game"
            title="React Sea Battle Game"
            class="img-fluid"
          />
        </div>
        <div class="right-side-project">
          <h2>React Sea Battle Game 🔥</h2>
          <p class="less-accent-text">React JS, TypeScript, HTML/CSS</p>
          <p>
            This is an educational project that I completed as part of the
            <a
              href="https://github.com/Drag13/react-learning-course-short"
              target="_blank"
              title="Link to a course"
              >Free React Course</a
            >
            from
            <a
              href="https://www.itera.com/"
              target="_blank"
              title="Link to a company"
              >Itera</a
            >. Very symbolic for me. It was not easy for me during the course,
            in the process we had to create a <em>custom state</em>, use
            <em>Typescript</em> and work a lot with <em>lambda functions</em>.
            Nevertheless, a cool result and a lot of fun.
          </p>
          <p class="less-accent-text">24.08.2022</p>
          <div class="button-block mt-4">
            <a
              href="https://react-sea-battle.netlify.app/"
              target="_blank"
              class="main-button primary-button me-3"
              title="React Sea Battle Game"
              >See project</a
            >
            <a
              href="https://gitlab.com/darnahorna/react-sea-battle-game"
              target="_blank"
              class="main-button outline-button"
              title="React Sea Battle Game - GitLab"
              >See code</a
            >
          </div>
        </div>
      </div>

      <div class="project">
        <div class="left-side-project">
          <img
            src="./static/images/weather.webp"
            alt="Vanilla Weather Application"
            title="Vanilla Weather Application"
            class="img-fluid"
          />
        </div>
        <div class="right-side-project">
          <h2>Vanilla Weather Application 🏡</h2>
          <p class="less-accent-text">JS, HTML/CSS, axios, Bootstrap</p>
          <p>
            The application shows a current weather info, todays and 6-day
            forecast. OpenWeather API provides access to current weather data
            for any location on Earth including over 200,000 cities.<br />
          </p>

          <p class="less-accent-text">21.06.2022</p>
          <div class="button-block mt-4">
            <a
              href="https://darias-weather-in-your-city.netlify.app/"
              target="_blank"
              class="main-button primary-button me-3"
              title="Weather Application"
              >See project</a
            >
            <a
              href="https://gitlab.com/darnahorna/weather-application"
              target="_blank"
              class="main-button outline-button"
              title="Weather Application - GitLab"
              >See code</a
            >
          </div>
        </div>
      </div>

      <div class="project">
        <div class="left-side-project">
          <img
            src="./static/images/soup.webp"
            alt="Culinary Recipe"
            title="Culinary Recipe Page"
            class="img-fluid"
          />
        </div>
        <div class="right-side-project">
          <h2>Culinary Recipe Page 🍵</h2>
          <p class="less-accent-text">HTML/CSS</p>
          <p>
            This page was created as part of my "Program Every Day" challenge.
            That's why it's very special to me, even though it's not rocket
            science. HTML and CSS are used here.
          </p>
          <p class="less-accent-text">05.05.2022</p>
          <div class="button-block mt-4">
            <a
              href="https://culinary-page-pure-html.netlify.app/"
              target="_blank"
              class="main-button primary-button me-3"
              title="Culinary Page"
              >See project</a
            >
            <a
              href="https://gitlab.com/darnahorna/culinary-page-pure-html"
              target="_blank"
              class="main-button outline-button"
              title="Culinary Page - GitLab"
              >See code</a
            >
          </div>
        </div>
      </div>
    </section>
        `;
  }
}
