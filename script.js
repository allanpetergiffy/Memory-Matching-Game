const grid = document.getElementById('game-grid');
const icons = ['★', '♥', '♦', '♣', '★', '♥', '♦', '♣'];
icons.sort(() => Math.random() - 0.5);

icons.forEach(icon => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<span style="display:none">${icon}</span>`;
    card.onclick = () => {
        card.classList.add('flipped');
        card.querySelector('span').style.display = 'block';
    };
    grid.appendChild(card);
});
