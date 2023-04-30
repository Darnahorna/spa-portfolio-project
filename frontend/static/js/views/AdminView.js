// import AbstractView from "./AbstractView.js";
import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("SPA | Admin");
  }

  async getHtml() {
    return `      <section>
      <h2>What word do you want to look up?</h2>
      <form id="search-form">
        <div>
          <input
            type="search"
            placeholder="Search for a word"
            class="form-input"
            id="search-input"
          />
        </div>
        <div>
          <input
            id="keyword"
            type="submit"
            value="Search"
            class="main-button primary-button"
          />
        </div>
      </form>
      <h2 class="word"></h2>
    </section>`;
  }
}
