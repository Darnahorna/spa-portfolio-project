import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("SPA | Home");
  }

  async getHtml() {
    return `
             <main>
       <section>
        <div class="container" id="grid-flex">
          <div class="gap"></div>
          <div class="info-section">
            <div class="photo">
              <img
                src="./static/images//Daria_Nahorna.webp"
                title="Daria's photo"
                alt="Daria Nahorna"
                class="main-photo"
              />
            </div>
          </div>
          <div class="info-section">
            <aside class="aside-bl">
              <div class="about">
                <h2>Hi! I am</h2>
                <h1>Daria Nahorna</h1>

                <h3 class="pt-2">Frontend developer, from Ukraine 🇺🇦</h3>
                <p>
                  Now I am learning React JS to make apps even more modern and
                  fascinating.
                </p>

                <a class="learn-more" href="/about" title="About Daria"
                  >Learn more</a
                >
              </div>
            </aside>

            <div class="bottom-links">
              <a
                href="files/Resume_Daria_Nahorna_Front_Dev.pdf"
                class="bottom-link"
                title="Download Daria's CV"
                download="Resume_Daria_Nahorna_Front_Dev.pdf"
                >download cv <i class="fa-solid fa-arrow-right"></i
              ></a>

              <a
                href="#latest-projects"
                class="bottom-link"
                title="Have a look at Daria's work"
                >latest work <i class="fa-solid fa-arrow-right"></i
              ></a>
              <a
                href="#contact"
                class="bottom-link"
                title="Read about Daria's studies"
                >contact <i class="fa-solid fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </section> 

      <section class="secondary-color-bg">
        <h2 id="latest-projects">Latest Projects</h2>
        <div class="container projects">
          <div class="card-project">
            <h3>React Sea Battle Game</h3>
            <p class="less-accent-text">ReactJS, Typescript, HTML/CSS</p>

            <img
              src="./static/images/seabattle.webp"
              class="project-photo img-fluid img-thumbnail"
              alt="React Sea Battle Game"
              title="React Sea Battle Game"
            />
          </div>

          <div class="card-project">
            <h3>React Dictionary Application</h3>
            <p class="less-accent-text">ReactJS, HTML/CSS</p>

            <img
              src="./static/images/vocabulary.webp"
              class="project-photo img-fluid img-thumbnail"
              alt="React Dictionary Application "
              title="React Dictionary Application"
            />
          </div>

          <div class="card-project">
            <h3>React Weather Application</h3>
            <p class="less-accent-text">ReactJS, HTML/CSS</p>

            <img
              src="./static/images/weather.webp"
              class="project-photo img-fluid img-thumbnail"
              alt="React Weather Application "
              title="React Weather Application"
            />
          </div>
        </div>
      </section>
      <section class="primary-color-bg">
        <h2 id="contact">Let's Discuss Your Project</h2>
        <div class="lets-talk">
          <div class="left-block">
            <div class="line-block">
              <div class="inline-block">
                <i class="fa-solid fa-envelope fa-2x"></i>
              </div>
              <div class="inline-block">
                <div class="less-accent-text">Email</div>
                <div class="position">darnahorna@gmail.com</div>
              </div>
            </div>
            <div class="line-block">
              <div class="inline-block">
                <i class="fa-solid fa-location-dot fa-2x"></i>
              </div>
              <div class="inline-block">
                <div class="less-accent-text">Location</div>
                <div class="position">Malmö, Sweden</div>
              </div>
            </div>
          </div>
          <div class="left-block align-vertical">
            <div class="container">
              <img
                src="./static/images/alien_purple.webp"
                alt=""
                class="skill-cute-alien bounce-5"
                title="Alien"
              />
            </div>
            <div class="wrap-block">
              <span class="call-to-action">First step is just reach out</span>
              <a
                class="main-button secondary-button"
                href="https://calendly.com/darnahorna/15min"
                title="book a call with me"
                target="_blank"
                >Let's talk more</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
        `;
  }
}
