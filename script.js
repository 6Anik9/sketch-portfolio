window.addEventListener('load', () => {
    // Hide loader after 3 seconds
    setTimeout(() => { 
        document.getElementById('loader-wrapper').classList.add('loader-finished'); 
    }, 3000);
});

document.addEventListener('mousemove', (e) => {
    // Perspective rotation effect for desktop
    if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        const canvas = document.querySelector('.paper-canvas');
        if(canvas) {
            canvas.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
        }
    }
});
