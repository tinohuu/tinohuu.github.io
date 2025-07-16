// 动态加载导航栏
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    // 高亮导航栏：如果存在项目详情内容，则高亮 Projects，否则高亮对应页面
    const navItems = document.querySelectorAll('.nav-item');
    // 清除所有高亮
    navItems.forEach(item => item.classList.remove('active'));
    // 判断是否为项目详情页（包含 project-content 区块）
    if (document.getElementById('project-content')) {
      const projLink = document.querySelector('.nav-item a[href="projects.html"]');
      if (projLink) projLink.parentElement.classList.add('active');
    } else {
      // 普通页面，根据当前文件名高亮
      const page = window.location.pathname.split('/').pop();
      const link = document.querySelector(`.nav-item a[href="${page}"]`);
      if (link) link.parentElement.classList.add('active');
    }
  });

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });