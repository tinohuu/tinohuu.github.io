// 动态加载导航栏
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // 将导航栏插入页面
    document.getElementById('navbar').innerHTML = data;

    // 获取当前页面的路径
    const currentPath = window.location.pathname;

    // 高亮当前页面的导航项
    document.querySelectorAll('.nav-item a').forEach(link => {
      if (link.getAttribute('href') === currentPath.split('/').pop()) {
        // 移除其他项的 active 类
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

        // 添加 active 类到当前项
        link.parentElement.classList.add('active');
      }
    });
  });

  fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    // 将页脚插入页面
    document.getElementById('footer').innerHTML = data;
  });