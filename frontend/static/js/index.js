"use strict";
import HomeView from "./views/HomeView.js";
import AboutView from "./views/AboutView.js";
import WorkView from "./views/WorkView.js";
import ContactView from "./views/ContactView.js";
import LoginView from "./views/LoginView.js";
import ProjectsView from "./views/ProjectsView.js";
import { getAuthResponse, getResponse } from "../request.js";
import { getTime, getUserId } from "./utils/assistants.js";

let projectsToUpdate = [];
let activeProject = null;

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
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
      view: ProjectsView,
      requiredAuth: true,
    },
    {
      path: "/login",
      view: LoginView,
    },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  //console.log(potentialMatches);
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  if (match.route.requiredAuth) {
    const res = await getAuthResponse("/auth", "GET");

    if (res.redirected) {
      navigateTo("/login");
      match = potentialMatches.find(
        (potentialMatch) => potentialMatch.route.path === "/login"
      );
    }
  }

  const insertView = async (match) => {
    const app = document.querySelector("#app");
    const view = new match.route.view(app, handlers());
    app.innerHTML = await view.getHtml();

    if (typeof view.afterRender === "function") {
      await view.afterRender();
    }
    if (typeof view.updateProjectsList === "function") {
      await refreshProjects();
    }

    async function refreshProjects() {
      const projects = await getResponse("/projects", "get");
      await setProjects(projects.data);
    }

    async function setProjects(projects) {
      projectsToUpdate = projects;
      await view.updateProjectsList(projects);
    }

    async function setActiveProject(project) {
      activeProject = project;
      await view.updateActiveProject(project);
    }

    async function selectProjectById(projectId) {
      const projectToEdit = await getResponse(`/projects/${projectId}`, "get");
      setActiveProject(projectToEdit.data);
    }

    function handlers() {
      return {
        onProjectAdd: async (name, description, link, img) => {
          const addedProject = {
            name: name,
            description: description,
            date: getTime(),
            link: link,
            img: img,
            userId: await getUserId(),
          };
          await getResponse("/projects", "post", addedProject);
          await refreshProjects();
        },

        onProjectDelete: async (projectId) => {
          await getResponse(`/projects/${projectId}`, "delete");
          await refreshProjects();
        },

        onProjectEdit: async (projectId) => {
          await selectProjectById(projectId);
          await refreshProjects();
        },
        onProjectSave: async (name, description, link, img) => {
          //  console.log(await setUserId());
          const editedProject = {
            idProject: activeProject.idProject,
            name: name,
            description: description,
            date: getTime(),
            link: link,
            img: img,
            userId: await getUserId(),
          };
          await getResponse(
            `/projects/${activeProject.idProject}`,
            "PATCH",
            editedProject
          );
          await refreshProjects();
        },
      };
    }
  };

  await insertView(match);
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
