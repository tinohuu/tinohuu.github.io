const industryProjects = [
  {
    title: "Star Fox",
    studio: "Velan Studios & Nintendo",
    description: "Implemented shaders and real-time VFX, built cinematic tools, and debugged rendering issues.",
    image: "./projects/star-fox/starfox.jpg",
  },
  {
    title: "Words with Friends",
    studio: "Zynga Toronto",
    description: "Developed internal tools and automation to streamline asset workflows.",
    image: "./projects/words-with-friends/1.jpg",
  },
  {
    title: "Prince of Persia: The Sands of Time Remake",
    studio: "Ubisoft Toronto",
    description: "Supported technical art development and engine-side content integration.",
    image: "./projects/sands-of-time/1.png",
  },
  {
    title: "Skull & Bones",
    studio: "Ubisoft Chengdu",
    description: "Built engine pipelines for wildlife and forts, and a visual scripting tool.",
    image: "./projects/skull-and-bones/1.png",
  },
];

const projects = [
  {
    title: "Recreation Room on Venus",
    description: "Tech art demo scene, Ubisoft NEXT 2024 winner.",
    image: "./projects/recreation-room/1.png",
    link: "project.html?id=recreation-room",
    categories: ["tech-art", "games"],
    featured: true,
  },
  {
    title: "ZOOM",
    description: "A 5-min dystopian puzzle game on 1980s surveillance. Coursework project.",
    image: "./projects/zoom/1.png",
    link: "project.html?id=zoom",
    categories: ["games"],
    featured: true,
  },
  {
    title: "Solitaire Start-up Projects",
    description: "Mobile casual games, experienced entrepreneurship, indie dev, and full dev cycles.",
    image: "./projects/solitaire-projects/1.png",
    link: "project.html?id=solitaire-projects",
    categories: ["games", "tech-art"],
    featured: true,
  },
  {
    title: "Computer Vision Projects",
    description: "Including Canny, Seam Carving, RANSAC Stitching, Optical Flow. Computer Vision course projects.",
    image: "./projects/computer-vision-projects/a3-1.png",
    link: "project.html?id=computer-vision-projects",
    categories: ["computer-science", "tech-art", "games"],
  },
  {
    title: "BuyEase.ca",
    description: "A campus marketplace website using React and MangoDB. Software Design course project.",
    image: "./github.png",
    link: "",
    categories: ["computer-science"],
  },
  {
    title: "Simple Raytracer & WebGL Scenes",
    description: "Ray tracing in C++ with glm: sphere tracing, lighting support. Computer Graphics projects.",
    image: "./projects/simple-raytracer/1.png",
    link: "project.html?id=simple-raytracer-and-webgl-scenes",
    categories: ["computer-science", "tech-art", "games"],
  },
  {
    title: "Fantasea",
    description: "Rivergame's mobile adventure game, researched and implemented real-time VFX and custom shaders as a technical artist.",
    image: "./projects/fantasea/1.jpg",
    link: "",
    categories: ["professional", "games", "tech-art"],
  },
  {
    title: "Motion Parallax Depth",
    description: "Contributed to MPDepth projects as a research programmer at BioMotionLab, York University.",
    image: "./github.png",
    link: "",
    categories: ["computer-science", "professional"],
  },
  {
    title: "Chess Rush",
    description: "Contributed to the level design as a game design intern at Tencent.",
    image: "./projects/chess-rush/1.png",
    link: "",
    categories: ["games", "professional"],
  },
  {
    title: "Goose College",
    description: "Build and manage a goose college as chancellor. Coursework project.",
    image: "./projects/goose-college/1.jpg",
    link: "project.html?id=goose-college",
    categories: ["games"],
  },
  {
    title: "Blacksmith",
    description: "A pixel-art card meta-game prototype. Coursework project.",
    image: "./projects/blacksmith/1.jpg",
    link: "project.html?id=blacksmith",
    categories: ["games"],
  },
  {
    title: "Horizon Photographer",
    description: "A 1-minute photography game inspired by Tom Eckersley's works. Coursework project.",
    image: "./projects/horizon-photographer/1.gif",
    link: "project.html?id=horizon-photographer",
    categories: ["games"],
  },
  {
    title: "Master of the Wind",
    description: "An action-adventure prototype. Play as a wind deity controlling wind and nature to interact with objects.",
    image: "./projects/master-of-the-wind/1.jpg",
    link: "project.html?id=master-of-the-wind",
    categories: ["games"],
  },
];

const industryGrid = document.getElementById("industry-grid");
const projectGrid = document.getElementById("project-grid");
const emptyProjects = document.getElementById("empty-projects");

function renderIndustryProjects() {
  industryProjects.forEach((project) => {
    const card = document.createElement("article");
    card.classList.add("industry-card", `industry-card--${project.variant || "image"}`);

    if (project.image) {
      const image = document.createElement("img");
      image.src = project.image;
      image.alt = "";
      image.loading = "lazy";
      card.appendChild(image);
    } else {
      const artwork = document.createElement("div");
      artwork.classList.add("industry-artwork");
      artwork.setAttribute("aria-hidden", "true");
      artwork.innerHTML = '<span class="star-field"></span><span class="star-fox-mark">STAR<br>FOX</span><span class="star-fox-orbit"></span>';
      card.appendChild(artwork);
    }

    const shade = document.createElement("div");
    shade.classList.add("industry-card-shade");
    shade.setAttribute("aria-hidden", "true");
    card.appendChild(shade);

    const content = document.createElement("div");
    content.classList.add("industry-card-content");

    const studio = document.createElement("p");
    studio.classList.add("industry-studio");
    studio.textContent = project.studio;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.classList.add("industry-description");
    description.textContent = project.description;

    content.append(studio, title, description);
    card.appendChild(content);
    industryGrid.appendChild(card);
  });
}

function displayProjects(category) {
  projectGrid.innerHTML = "";
  const filteredProjects = category === "all"
    ? projects
    : projects.filter((project) => project.categories.includes(category));

  filteredProjects.forEach((project) => {
    const card = document.createElement(project.link ? "a" : "article");
    card.classList.add("project-card");
    if (project.featured) {
      card.classList.add("featured");
    }
    if (project.link) {
      card.href = project.link;
    }

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = "";
    image.loading = "lazy";

    const content = document.createElement("div");
    content.classList.add("project-card-content");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    content.append(title, description);
    if (project.link) {
      const chevron = document.createElement("span");
      chevron.classList.add("project-card-chevron");
      chevron.setAttribute("aria-hidden", "true");
      chevron.textContent = "›";
      card.append(image, content, chevron);
    } else {
      card.append(image, content);
    }
    projectGrid.appendChild(card);
  });

  emptyProjects.hidden = filteredProjects.length > 0;
}

const filterButtons = [...document.querySelectorAll(".filter-btn")];
const validCategories = new Set(filterButtons.map((button) => button.dataset.category));

function getCategoryFromURL() {
  const category = new URLSearchParams(window.location.search).get("category");
  return validCategories.has(category) ? category : "all";
}

function setActiveCategory(category) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.category === category;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  displayProjects(category);
}

function updateURL(category) {
  const params = new URLSearchParams(window.location.search);
  if (category === "all") {
    params.delete("category");
  } else {
    params.set("category", category);
  }

  const query = params.toString();
  const newURL = window.location.pathname + (query ? `?${query}` : "");
  window.history.pushState({}, "", newURL);
}

renderIndustryProjects();
setActiveCategory(getCategoryFromURL());

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { category } = button.dataset;
    updateURL(category);
    setActiveCategory(category);
  });
});

window.addEventListener("popstate", () => {
  setActiveCategory(getCategoryFromURL());
});
