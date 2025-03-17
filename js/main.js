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