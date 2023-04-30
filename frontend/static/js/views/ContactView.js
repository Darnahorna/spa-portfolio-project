// import AbstractView from "./AbstractView.js";
import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("SPA | Contact");
  }

  async getHtml() {
    return `
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
            `;
  }
}
