const audio = document.getElementById('my_audio');
const audio2 = document.getElementById('my_audio_2');
const audio3 = document.getElementById('my_audio_3');

if (audio) audio.volume = 0.2;
if (audio2) audio2.volume = 0.5;
if (audio3) audio3.volume = 0.5;

document.addEventListener('click', (e) => {
    const elementoClicado = e.target;
    const isInterativo = elementoClicado.matches('a, .sidebar li, button');
    const isActive = elementoClicado.matches('li.active');

    if ((isInterativo && audio3) && !isActive) {
        audio3.currentTime = 0;
        audio3.play().catch(err => console.log('Erro ao tocar som:', err));
    }
});