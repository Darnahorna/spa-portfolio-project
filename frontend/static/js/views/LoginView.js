// import AbstractView from "./AbstractView.js";
import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("SPA | Login");
  }

  async getHtml() {
    return ` 
     <section>
      <form class="login-form" action="/login" method ="POST">
        <div class="greetings">Welcome back</div>
        <div class="instructions">Please enter your details</div>

        <div class="form-field">
          <div class="form-title">Email</div>
          <input
            type="email"
            class="form-input"
            placeholder="Enter your email"
            name="email"
            id="form-email"
          />
        </div>
        <div class="form-field">
          <div class="form-title">Password</div>
          <input
            type="password"
            class="form-input"
            placeholder="Enter your password"
            name="password"
            id="form-password"
          />
        </div>
      
        <div class="form-field">
          <button type="submit" class="login-btn">Sign in</button>
        </div>
        
      </form>
    </section>         
`;

    {
      /* <div class="form-field">
  <span class="small-text"> Don't have an account? Sign up </span>
</div>; */
    }
  }
}
