export async function loadAudio() {
    const audio = document.getElementById('my_audio');
    const audio2 = document.getElementById('my_audio_2');
    const audio3 = document.getElementById('my_audio_3');

    if (audio) audio.volume = 0.2;
    if (audio2) audio2.volume = 0.5;
    if (audio3) audio3.volume = 0.5;
    

    let audioDesbloqueado = false;

    document.addEventListener('click', async (e) => {
        if (!audioDesbloqueado) {
            audioDesbloqueado = true;
            try {
                await audio.play();
                await audio2.play();
            } catch (err) {
                console.log('Erro ao desbloqueiar audio:', err);
                audioDesbloqueado = false;
            }
        }

        const elementoClicado = e.target;
        const isInterativo = elementoClicado.matches('a, .sidebar li, .sidebar li > *, button, .project-element, .project-element > *');
        const isActive = elementoClicado.matches('li.active');

        if ((isInterativo && audio3) && !isActive) {
            audio3.currentTime = 0;
            audio3.play().catch(err => console.log('Erro ao tocar som:', err));
        }
    });
}

export async function carregarJSON(file, ttl = 1000 * 60 * 60) {
    const cacheKey = `cache_${file}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < ttl) {
            return data;
        }
    }

    const response = await fetch(file);
    const dados = await response.json();

    localStorage.setItem(cacheKey, JSON.stringify({
        data: dados,
        timestamp: Date.now()
    }));

    console.log(dados);
    return dados;
}   

export function slowRedirect() {
    document.addEventListener('click', e => {
        const link = e.target.closest('a');

        if (link && link.href && !link.href.includes('javascript')) {
            e.preventDefault();

            const url = link.href;
            const delay = 2500;
            const cursor = document.querySelectorAll('*');

            const audio3 = document.getElementById('my_audio_3');
            const audio4 = document.getElementById('my_audio_4');
            
            if (audio4){
                audio4.currentTime = 6;
                audio4.play()
            }
            if(audio3){
                audio3.play();
            }

            cursor.forEach(e => e.style.cursor = 'wait');

            setTimeout(() => {
                if (link && link.target === '_blank') {
                    window.open(url, '_blank')
                    cursor.forEach(e => e.style.cursor = 'default');
                    audio4.pause();
                } else {
                    window.location.href = url
                }
            }, delay);
        }
    });
}
