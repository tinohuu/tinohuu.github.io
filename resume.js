fetch('resume-simple.md')
  .then(response => response.text())
  .then(md => {
    const resumeContent = document.getElementById('resume-content');
    resumeContent.innerHTML = `<div class="markdown-body">${marked.parse(md)}</div>`;
  });
  