import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor(
    root,
    { onProjectSave, onProjectAdd, onProjectDelete, onProjectEdit } = {}
  ) {
    super(root);
    this.setTitle("SPA | Protected");
    this.root = root;
    this.onProjectSave = onProjectSave;
    this.onProjectAdd = onProjectAdd;
    this.onProjectDelete = onProjectDelete;
    this.onProjectEdit = onProjectEdit;
  }
  async getHtml() {
    return `
  <section>
   <a class = "logout main-button" href="/logout">Logout</a>
      <div class="content-table">
        <div class="content-header table d-flex justify-space-between">
          <div class="flex-row">Project</div>
          <div class="flex-row">Description</div>
          <div class="flex-row">Edited</div>
          <div class="flex-row">Img</div>
          <div class="flex-row">Link</div>
            <div class="flex-row">User</div>
          <div class="flex-row">
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
        <div class="content-project"></div>
      </div>

      <div class="mb-4">
        <button class="main-button secondary-button new-project-btn" type="submit">
          Create project
        </button>

        <div class="preview mb-4 d-none">
        <form class="project-preview" >
          <input class="project-item" name="name" id="name" type="text" placeholder="New Project" />
          <textarea class="project-item" rows="3"  id="description" name="description">Project description</textarea>
          
           <input class="project-item" type="text" id="link" name="link" placeholder="Link" />
            <input class="project-item" type="text" id="img" name="img" placeholder="Img" />
            
          <div class="project-item">
            <button class="main-button save-project-btn secondary-button" type="submit">
               Save
            </button>
          </div>
          </form>
        </div>


          <div class="add-project mb-4 d-none">
        <form class="add-project-preview" >
          <input class="project-item" name="a-name" id="a-name" type="text" placeholder="New Project" />
          <textarea class="project-item" rows="3"  id="a-description" name="a-description" placeholder="Project description"></textarea>
           <input class="project-item" type="text" id="a-link" name="a-link" placeholder="Link" />
            <input class="project-item" type="text" id="a-img" name="a-img" placeholder="Img" />
          <div class="project-item">
            <button class="main-button add-project-btn secondary-button" type="submit">
               Add project
            </button>
          </div>
          </form>
        </div>
      </div>
    </section>
    `;
  }

  async afterRender() {
    const btnAdd = this.root.querySelector(".new-project-btn");
    btnAdd.addEventListener("click", () => {
      this.addProjectPreviewVisibility(true);
      this.updateProjectPreviewVisibility(false);
    });

    const btnAddProject = this.root.querySelector(".add-project-preview");
    btnAddProject.addEventListener("submit", (event) => {
      event.preventDefault();
      const projectName = document.getElementById("a-name").value;
      const projectDescription = document.getElementById("a-description").value;
      const projectLink = document.getElementById("a-link").value;
      const projectImg = document.getElementById("a-img").value;

      this.onProjectAdd(
        projectName,
        projectDescription,
        projectLink,
        projectImg
      );
      this.addProjectPreviewVisibility(false);
    });
    const btnSaveNote = this.root.querySelector(".project-preview");
    btnSaveNote.addEventListener("submit", (event) => {
      event.preventDefault();
      const projectName = document.getElementById("name").value;
      const projectDescription = document.getElementById("description").value;
      const projectLink = document.getElementById("link").value;
      const projectImg = document.getElementById("img").value;

      this.onProjectSave(
        projectName,
        projectDescription,
        projectLink,
        projectImg
      );
      this.updateProjectPreviewVisibility(false);
    });
  }

  _createListItemHTML(project) {
    //function for rendering note item

    const MAX_CONTENT_LENGTH = 30;
    const MAX_NAME_LENGTH = 20;
    return `
    <div class="content-project-item d-flex justify-space-between" data-project-id="${
      project.idProject
    }">
        <div class="flex-row project-name" >
             ${project.name.substring(0, MAX_NAME_LENGTH)}
                    ${project.name.length > MAX_NAME_LENGTH ? "..." : ""}
        </div>
        <div class="flex-row project-description">
        ${project.description.substring(0, MAX_CONTENT_LENGTH)}
          ${project.description.length > MAX_CONTENT_LENGTH ? "..." : ""}
          
        </div>
        <div class="flex-row project-date">
           ${project.date}
        </div>
        <div class="flex-row project-link"> 
        ${project.link.substring(0, MAX_NAME_LENGTH)}
          ${project.link.length > MAX_NAME_LENGTH ? "..." : ""}
        </div>
          <div class="flex-row project-img">
           ${project.img.substring(0, MAX_NAME_LENGTH)}
          ${project.img.length > MAX_NAME_LENGTH ? "..." : ""}
        </div>
        <div class="flex-row project-user wrap">${project.userId}</div>
       <div class="flex-row note-actions">
       <a class="pen action-link" title="edit">✏️</a>     
         <a class="trash action-link" title="delete">🗑</a></div>
    </div>
          `;
  }
  updateProjectsList(projects) {
    //update every item in content table
    const projectsListContainer = this.root.querySelector(".content-project");

    projectsListContainer.innerHTML = "";

    for (const project of projects) {
      const html = this._createListItemHTML(project);

      projectsListContainer.insertAdjacentHTML("beforeend", html);
    }
    projectsListContainer
      .querySelectorAll(".content-project-item")
      .forEach((projectListItem) => {
        const btnDeleteProject = projectListItem.querySelector(".trash");

        btnDeleteProject.addEventListener("click", () => {
          const doDelete = confirm(
            "Are you sure you want to delete this project?"
          );

          if (doDelete) {
            this.onProjectDelete(parseInt(projectListItem.dataset.projectId));
          }
        });

        const btnEditProject = projectListItem.querySelector(".pen");

        btnEditProject.addEventListener("click", () => {
          this.onProjectEdit(projectListItem.dataset.projectId);
        });
      });
  }

  updateProjectPreviewVisibility(isNeeded) {
    //show/hide preview form
    if (isNeeded) {
      this.root.querySelector(".preview").classList.add("d-block");
      this.root.querySelector(".preview").classList.remove("d-none");
    } else {
      this.root.querySelector(".preview").classList.add("d-none");
      this.root.querySelector(".preview").classList.remove("d-block");
    }
  }

  addProjectPreviewVisibility(isNeeded) {
    //show/hide preview form
    if (isNeeded) {
      this.root.querySelector(".add-project").classList.add("d-block");
      this.root.querySelector(".add-project").classList.remove("d-none");
    } else {
      this.root.querySelector(".add-project").classList.add("d-none");
      this.root.querySelector(".add-project").classList.remove("d-block");
    }
  }

  updateActiveProject(project) {
    //set values to text fields(whe edit)
    document.getElementById("name").value = project.name;
    document.getElementById("description").value = project.description;
    document.getElementById("link").value = project.link;
    document.getElementById("img").value = project.img;

    document
      .querySelectorAll(".content-project-item")
      .forEach((projectListItem) => {
        projectListItem.classList.remove("content-project-item-selected");
      });
    document
      .querySelector(
        `.content-project-item[data-project-id="${project.idProject}"]`
      )
      .classList.add("content-project-item-selected");
    this.updateProjectPreviewVisibility(true);
    this.addProjectPreviewVisibility(false);
  }
}
