window.onload = () => {
    const loader = document.getElementById('loader-wrapper');
    const portfolio = document.getElementById('main-portfolio');

    setTimeout(() => {
        if (loader) loader.classList.add('loader-finished');
        if (portfolio) portfolio.classList.add('show-portfolio');
    }, 3000); 
};

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 5;
        const y = (e.clientY / window.innerHeight - 0.5) * 5;
        const canvas = document.getElementById('main-portfolio');
        if (canvas) canvas.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    }
});
