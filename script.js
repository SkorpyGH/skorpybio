const CONFIG = {
    nickname: "skorpy",
    avatarUrl: "avatar.jpg", 
    backgroundUrl: "background.gif", 
    music: {
        title: "leadwave - haze",
        src: "music.mp3",
        volume: 0.5 
    },
    socials: [
        { name: "YouTube", url: "https://www.youtube.com/@SkorpyYouTube", icon: "youtube" },
        { name: "Telegram", url: "https://t.me/logovo_skorpy", icon: "telegram" },
        { name: "TikTok", url: "https://www.tiktok.com/@skorpy0n?_r=1&_t=ZS-93rOn0dX5Lr", icon: "tiktok" },
        { name: "Spotify", url: "https://open.spotify.com/playlist/0VcOJtSLkDwvSRP8VOvhWR?si=8415f63e91d645fb", icon: "spotify" }
    ],
    buttons: [
        { text: "Раздачи ресов и общение", url: "https://discord.gg/R3BwM6BCbD" },
        { text: "Связь со мной", url: "https://t.me/skorpy0n" }
    ]
};

const ICONS = {
    youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
    discord: '<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>',
    telegram: '<path d="M21.928 2.65c-.29-.226-1.55 5.564-2.28 8.948-.51 2.37-1.685 4.95-3.61 5.41-.663.158-4.32-2.827-5.06-3.467-1.58-1.36 3.237-3.033 4.29-4.86.32-.555-1.428.18-2.65 1.01-3.653 2.463-5.26 1.85-6.32 1.54-1.2-.35-2.58-.8-2.58-1.63 0-.62 1.05-1.18 2.5-1.74 6.9-2.66 11.23-4.33 12.98-5.02 2.22-.88 3.03-.78 2.73-.19z"/>',
    tiktok: '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>',
    spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.299z"/>'
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация (как и раньше)
    document.getElementById('bg-container').style.backgroundImage = `url('${CONFIG.backgroundUrl}')`;
    document.getElementById('avatar').src = CONFIG.avatarUrl;
    document.getElementById('nickname').textContent = CONFIG.nickname;
    document.getElementById('track-name').textContent = CONFIG.music.title;

    const socialContainer = document.getElementById('social-container');
    CONFIG.socials.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.className = 'social-icon';
        a.target = '_blank';
        a.setAttribute('data-tooltip', social.name);
        const svgContent = ICONS[social.icon] || '';
        a.innerHTML = `<svg viewBox="0 0 24 24">${svgContent}</svg>`;
        socialContainer.appendChild(a);
    });

    const btnContainer = document.getElementById('buttons-container');
    CONFIG.buttons.forEach(btn => {
        const a = document.createElement('a');
        a.href = btn.url;
        a.className = 'big-btn';
        a.target = '_blank';
        a.innerHTML = `<span>${btn.text}</span><span>→</span>`;
        btnContainer.appendChild(a);
    });

    // 2. Логика АУДИО и СТАРТА
    const audio = document.getElementById('audio-player');
    const startScreen = document.getElementById('start-screen');
    const mainContent = document.getElementById('main-content');
    
    // Элементы плеера
    const playBtn = document.getElementById('play-btn');
    const iconPlay = document.getElementById('icon-play');
    const iconPause = document.getElementById('icon-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const volumeSlider = document.getElementById('volume-slider');

    audio.src = CONFIG.music.src;
    audio.volume = CONFIG.music.volume;
    volumeSlider.value = CONFIG.music.volume;
    // ВАЖНО: включаем луп через JS на всякий случай
    audio.loop = true;

    // === КЛИК ПО ЧЕРНОМУ ЭКРАНУ ===
    startScreen.addEventListener('click', () => {
        // Запускаем музыку
        audio.play().then(() => {
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
        }).catch(err => console.log("Audio error:", err));

        // Анимация скрытия стартового экрана
        startScreen.style.opacity = '0';
        
        // Показываем контент
        mainContent.classList.remove('hidden');
        setTimeout(() => {
            startScreen.style.display = 'none';
            mainContent.classList.add('visible');
        }, 800);
    });

    // Обычная кнопка Play/Pause
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
        } else {
            audio.pause();
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
        }
    });

    // Обновление прогресса
    audio.addEventListener('timeupdate', () => {
        const current = audio.currentTime;
        const duration = audio.duration || 0;
        currentTimeEl.textContent = formatTime(current);
        
        // Если не перематываем вручную, двигаем ползунок
        if (document.activeElement !== progressBar) {
            progressBar.value = (current / duration) * 100 || 0;
            const percent = (current / duration) * 100;
            progressBar.style.background = `linear-gradient(to right, #a855f7 ${percent}%, rgba(255,255,255,0.1) ${percent}%)`;
        }
    });

    // Форматирование времени
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }

    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });

    // Перемотка
    progressBar.addEventListener('input', (e) => {
        const percent = e.target.value;
        const duration = audio.duration;
        audio.currentTime = (percent / 100) * duration;
        // Обновляем цвет ползунка сразу при перетаскивании
        progressBar.style.background = `linear-gradient(to right, #a855f7 ${percent}%, rgba(255,255,255,0.1) ${percent}%)`;
    });

    // Громкость
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });
});