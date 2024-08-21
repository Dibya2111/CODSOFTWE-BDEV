document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links-container').classList.toggle('show');
});
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random();
        if (size < 0.5) star.classList.add('small');
        else if (size < 0.8) star.classList.add('medium');
        else star.classList.add('large');

        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.setProperty('--twinkle-duration', `${3 + Math.random() * 5}s`);

        container.appendChild(star);
    }
}

createStars();
