window.addEventListener('load', () => {
    // 3 second timer for the loading screen animation
    setTimeout(() => { 
        document.getElementById('loader-wrapper').classList.add('loader-finished'); 
    }, 3000);
});

// Tilt effect for desktop
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        const canvas = document.querySelector('.paper-canvas');
        if(canvas) canvas.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    }
});  }
    }
});* 5;
        const y = (e.clientY / window.innerHeight - 0.5) * 5;
        const canvas = document.getElementById('main-portfolio');
        if (canvas) {
            canvas.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
        }
    }
});