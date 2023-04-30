import HomeView from "./views/HomeView.js";
import AboutView from "./views/AboutView.js";
import WorkView from "./views/WorkView.js";
import ContactView from "./views/ContactView.js";
import AdminView from "./views/AdminView.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: HomeView,
    },
    {
      path: "/about",
      view: AboutView,
    },
    {
      path: "/work",
      view: WorkView,
    },
    {
      path: "/contact",
      view: ContactView,
    },
    {
      path: "/admin",
      view: AdminView,
    },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  const app = document.querySelector("#app");
  app.innerHTML = await view.getHtml();
  app.querySelector("#search-form").addEventListener("submit", inputWord);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

function showResult(response) {
  let word = document.querySelector(".word");
  word.innerHTML = response.data[0].word;
  //TODO show other results
}

function searchWord(keyword) {
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`; //build API url
  axios.get(apiURL).then(showResult);
}

function inputWord(event) {
  event.preventDefault();
  let wordInput = document.querySelector("#search-input"); //take data from search input

  searchWord(wordInput.value);
}
