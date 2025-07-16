marked.setOptions({
  breaks: true
});

// Helper function to extract content from <!--marker--> blocks
function extractBlock(md, marker) {
  const regex = new RegExp(`<!--\\s*${marker}\\s*-->[\\s\\S]*?<!--\\s*end${marker}\\s*-->`, 'i');
  const match = md.match(regex);
  return match ? match[0].replace(new RegExp(`<!--\\s*${marker}\\s*-->|<!--\\s*end${marker}\\s*-->`, 'gi'), '').trim() : undefined;
}


// Get project ID from URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
if (!projectId) {
  console.error("No project ID provided");
  document.getElementById("project-content").innerHTML = "<p>Project not found</p>";
} else {
  // Fetch and render Markdown from the project's folder
  fetch(`projects/${projectId}/${projectId}.md`)
  .then(response => response.ok ? response.text() : Promise.reject('Failed to load Markdown'))
  .then(mdContent => {
    // Extract and render title and category in header
    const titleBlock = extractBlock(mdContent, 'title');
    const categoryBlock = extractBlock(mdContent, 'category');
    let headerHtml = '';
    if (titleBlock) {
      headerHtml += `<h1 class="project-title">${marked.parseInline(titleBlock)}</h1>`;
    }
    if (categoryBlock) {
      headerHtml += `<div class="project-category">${marked.parseInline(categoryBlock)}</div>`;
    }
    document.getElementById("project-header").innerHTML = headerHtml;

    // Remove marker blocks from main content
    let mdMain = mdContent
      .replace(/<!--title-->[\s\S]*?<!--endtitle-->/gi, '')
      .replace(/<!--category-->[\s\S]*?<!--endcategory-->/gi, '')
      .replace(/<!--details-->[\s\S]*?<!--enddetails-->/gi, '')
      .replace(/<!--links-->[\s\S]*?<!--endlinks-->/gi, '')
      .trim();

    // Parse and render main content
    const contentHtml = marked.parse(mdMain);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = contentHtml;

    // Post-process images for alignment
    tempDiv.querySelectorAll("img").forEach(img => {
      const align = (img.alt || "").toLowerCase();
      if (["left", "right", "center"].includes(align)) {
        img.classList.add(`image-${align}`);
        if (align === "center") {
          const wrapper = document.createElement("div");
          wrapper.className = "image-center-wrapper";
          img.parentNode.insertBefore(wrapper, img);
          wrapper.appendChild(img);
        }
      }
      img.alt = "";
      img.style.display = "block";
      // Fix relative image paths
      if (!img.src.startsWith('http')) {
        img.src = `projects/${projectId}/${img.getAttribute('src')}`;
      }
    });

    // Update content
    document.getElementById("project-content").innerHTML = tempDiv.innerHTML;

    // Render details only in #project-details
    const detailsSection = document.getElementById("project-details");
    if (detailsSection) {
      // 清空除 project-links 外的内容
      Array.from(detailsSection.children).forEach(child => {
        if (child.id !== "project-links") child.remove();
      });
      const detailsBlock = extractBlock(mdContent, 'details');
      if (detailsBlock) {
        const detailsList = document.createElement("ul");
        detailsList.className = "project-details";
        detailsBlock.split(/\r?\n/).forEach(line => {
          if (line.trim()) {
            const li = document.createElement("li");
            li.innerHTML = marked.parseInline(line.trim());
            detailsList.appendChild(li);
          }
        });
        detailsSection.insertBefore(detailsList, document.getElementById("project-links"));
      }
    }

    // Render links only in #project-links
    const projectLinksDiv = document.getElementById("project-links");
    if (projectLinksDiv) {
      projectLinksDiv.innerHTML = "";
      const linksBlock = extractBlock(mdContent, 'links');
      if (linksBlock) {
        const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
        let match;
        while ((match = linkRegex.exec(linksBlock)) !== null) {
          const a = document.createElement("a");
          a.href = match[2];
          a.textContent = match[1];
          a.target = "_blank";
          a.className = "btn";
          projectLinksDiv.appendChild(a);
        }
      }
    }
  })
  .catch(error => {
    console.error(error);
    document.getElementById("project-content").innerHTML = "<p>Failed to load project</p>";
  });
}
// 强制高亮导航栏 Projects
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  const projLink = document.querySelector('.nav-item a[href="projects.html"]');
  if (projLink) projLink.parentElement.classList.add('active');
});
