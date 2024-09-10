document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColor');
    const lights = document.querySelectorAll('.light');
    
    button.addEventListener('click', () => {
        lights.forEach(light => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            light.style.background = `radial-gradient(circle, ${randomColor}, #fbc02d)`;
        });
    });
});
