// 返回顶部功能
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('back-to-top');
    
    // 滚动事件监听
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // 点击事件
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// 访问计数器
function updateVisitCount() {
    const counterElement = document.getElementById('visit-count');
    
    // 使用免费计数API服务
    const namespace = 'gullinkambi-site'; // 可自定义命名空间
    const key = 'main-counter';          // 可自定义键名

    // 获取当前计数
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then(response => response.json())
        .then(data => {
            counterElement.textContent = `本站访问数：${data.value}`;
        })
        .catch(error => {
            console.error('访问计数获取失败:', error);
            counterElement.textContent = '本站访问数：-';
        });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', updateVisitCount);