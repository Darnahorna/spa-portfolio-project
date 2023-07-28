import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("SPA | About");
  }

  async getHtml() {
    return `
             <section class="secondary-color-bg">
      <h1>About me</h1>
      <p>
        🦋 A newly graduated specialist in Software Engineering. ✨ A passion of
        mine is site construction and solving problems through frontend
        development, primarily on React JS.
        <br />
        <br />
        My experience in startup has helped to build a business developer
        mindset. I am creative, detail-oriented and always want to learn
        something new. Above all, I love building relationships with people. I
        believe this is necessary aspect of being a good team player.
        <br />
        <br />
        In my free time I enjoy hiking, scouting, plants.
        <br />
        <br />
        My life motto is 'Keep calm and study' 🤓.
      </p>
    </section>
        `;
  }
}
