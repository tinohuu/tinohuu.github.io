// 项目数据配置
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
    title: "Master of the Wind",
    description: "An action-adventure prototype. Play as a wind deity controlling wind and nature to interact with objects.",
    image: "./projects/master-of-the-wind/1.jpg",
    link: "project.html?id=master-of-the-wind",
    categories: ["games"],
    featured: true,
  },
  {
    title: "Computer Vision Projects",
    description: "Including Canny, Seam Carving, RANSAC Stitching, Optical Flow. Computer Vision course projects.",
    image: "./projects/computer-vision-projects/a3-1.png",
    link: "project.html?id=computer-vision-projects",
    categories: ["computer-science", "tech-art"],
  },
  {
    title: "BuyEase.ca",
    description: "A campus marketplace website using React and MangoDB. Software Design course project.",
    image: "/github.png",
    link: "",
    categories: ["computer-science"],
  },
  {
    title: "Prince of Persia: Sands of Time Remake",
    description: "Contributed to tech art codev as a tech art intern at Ubisoft Toronto.",
    image: "./projects/sands-of-time/1.png",
    link: "",
    categories: ["games", "tech-art", "professional"],
  },
  {
    title: "Solitaire Start-up Projects",
    description: "Mobile casual games, experienced entrepreneurship, indie dev, and full dev cycles.",
    image: "./projects/solitaire-projects/1.png",
    link: "project.html?id=solitaire-projects",
    categories: ["professional", "games"],
  },
  {
    title: "Simple Raytracer & WebGL Scenes",
    description: "Ray tracing in C++ with glm: sphere tracing, lighting support. Computer Graphics projects.",
    image: "./projects/simple-raytracer/1.png",
    link: "project.html?id=simple-raytracer-and-webgl-scenes",
    categories: ["computer-science", "tech-art"],
  },
  /*
  {
    title: "Simple WebGL Zen Garden",
    description: "A simple Japanese garden sandbox, fully crafted from scratch with WebGL code.",
    image: "./projects/webgl-zen-garden/1.png",
    link: "project.html?id=webgl-zen-garden",
    categories: ["computer-science"],
  },*/
  {
    title: "Fog of War in Fantasea",
    description: " ",
    image: "/github.png",
    link: "",
    categories: ["professional", "games", "tech-art"],
  },
  {
    title: "Motion Parallax Depth",
    description: "Contributed to MPDepth projects as a research programmer at BioMotionLab, York University.",
    image: "/github.png",
    link: "",
    categories: ["computer-science", "professional"],
  },
  {
    title: "Skull & Bones",
    description: "Contributed to engine pipelines for wildlife, forts, and a visualized scripting tool as a tech design intern at Ubisoft Chengdu.",
    image: "./projects/skull-and-bones/1.png",
    link: "project.html?id=skull-and-bones",
    categories: ["professional", "games"],
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
    title: "Graphics Design for University of Nottingham",
    description: "",
    image: "/github.png",
    link: "",
    categories: ["graphic-design"],
  },
];


// 动态加载项目
const projectGrid = document.getElementById("project-grid");

function displayProjects(category) {
  projectGrid.innerHTML = ""; // 清空现有项目
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) =>
        project.categories.includes(category)
      );

  filteredProjects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    if (project.featured) {
      card.classList.add("featured"); // Add 'featured' class for highlighted projects
    }
    if (!project.link) {
      card.classList.add("disabled");
    } else {
      card.addEventListener("click", () => {
        window.location.href = project.link;
      });
    }
    card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-card-content">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </div>
          `;
    projectGrid.appendChild(card);
  });

}

// 读取URL中的查询参数
function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category") || "all"; // 如果没有参数，默认显示 "all"
}

// 更新URL中的查询参数
function updateURL(category) {
  const params = new URLSearchParams(window.location.search);
  params.set("category", category);
  const newURL =
    window.location.pathname + "?" + params.toString();
  window.history.pushState({}, "", newURL); // 更新浏览器历史记录
}

// 初始加载项目，根据URL中的分类
const initialCategory = getCategoryFromURL();
displayProjects(initialCategory);

// 分类筛选功能
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 移除其他按钮的 active 类
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // 获取按钮对应的分类并更新URL
    const category = button.getAttribute("data-category");
    updateURL(category);

    // 根据分类显示项目
    displayProjects(category);
  });
});

// 设置初始激活按钮
filterButtons.forEach((button) => {
  const category = button.getAttribute("data-category");
  if (category === initialCategory) {
    button.classList.add("active");
  }
});
