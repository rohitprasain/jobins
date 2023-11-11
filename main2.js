const buttons = ["Damipasal", "Travel Nepal", "City Tours", "Sunflower"];

const projectTabs = document.querySelector(".project-tabs");
const projectDisplay = document.querySelector(".project-display");

const projectCarousel = document.querySelector(".project-carousel");

buttons.forEach((button) => {
  projectTabs.innerHTML += `
        <button class="tab-button">
        ${button}
        </button>
    `;
});

const projects = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1673254850273-2e0e1c937ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Damipasal Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, nisi quod ab tempore autem esse eos veritatis corporis. Nesciunt doloremque optio nisi numquam obcaecati quaerat amet delectus sunt fuga.",
    tag: "Damipasal",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1685898044655-2595aa00519d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Travel Nepal Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, nisi quod ab tempore autem esse eos veritatis corporis. Nesciunt doloremque optio nisi numquam obcaecati quaerat amet delectus sunt fuga.",
    tag: "Travel Nepal",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1691347668919-3f36602086a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    description:
      "City Tours Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, nisi quod ab tempore autem esse eos veritatis corporis. Nesciunt doloremque optio nisi numquam obcaecati quaerat amet delectus sunt fuga.",
    tag: "City Tours",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1683009427666-340595e57e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Sunflower Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugiat, nisi quod ab tempore autem esse eos veritatis corporis. Nesciunt doloremque optio nisi numquam obcaecati quaerat amet delectus sunt fuga.",
    tag: "Sunflower",
  },
];

function showProject(project) {
  projectCarousel.innerHTML = `
    <div class="project-container">
    <div class="project-image">
      <img src=${project.image} alt="projectImage">
    </div>
    <div class="project-description">
      <div class="description">
        ${project.description}
      </div>
      <button class="project-visit">View</button>
    </div>
  </div>
      `;
}

function displayProject() {
  projects.forEach((project) => {
    showProject(projects[1]);
  });
}

displayProject();
