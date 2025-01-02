marked.setOptions({
  breaks: true, // Enable line breaks
});

// Get project ID from URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

// Fetch and render project details
fetch('project.json')
  .then((response) => response.ok ? response.json() : Promise.reject('Failed to load JSON'))
  .then((projectDetails) => {
    const project = projectDetails[projectId];
    if (!project) throw new Error(`Project not found: ${projectId}`);

    // Render header
    document.getElementById("project-header").innerHTML = `
      <h1>${project.title}</h1>
      <p class="project-category">Category: ${project.category}</p>
    `;

    // Render content
    const content = document.getElementById("project-content");
    project.content.forEach((item) => {
      if (item.type === "text") {
        const p = document.createElement("p");
        p.innerHTML = marked.parse(item.content.trim());
        //p.innerHTML = item.isMarkdown ? marked.parse(item.content.trim()) : item.content;
        content.appendChild(p);
      } else if (item.type === "image") {
        const img = document.createElement("img");
        img.src = item.src;
        img.className = `image-${item.alignment}`;
        content.appendChild(img);
      }
    });

    // Render details
    const detailsSection = document.getElementById("project-details");
    const detailsList = document.createElement("ul");
    project.details.forEach((detail) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
      detailsList.appendChild(li);
    });
    detailsSection.appendChild(detailsList);

    // Render links
    const links = document.createElement("div");
    links.className = "project-links";
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.label;
      a.target = "_blank";
      a.className = "btn";
      links.appendChild(a);
    });
    detailsSection.appendChild(links);
  })
  .catch((error) => console.error(error));
