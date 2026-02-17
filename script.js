const CONFIG = {
  nickname: "skorpy",
  avatarUrl: "avatar.png",          // проверь что файл так и называется
  backgroundUrl: "background.gif",  // проверь что файл так и называется
  music: {
    title: "leadwave - haze",
    src: "music.mp3",
    volume: 0.5
  },
 socials: [
  { name: "Telegram", url: "https://t.me/logovo_skorpy", icon: "telegram" },
  { name: "TikTok", url: "https://www.tiktok.com/@skorpy0n?_r=1&_t=ZS-93rOn0dX5Lr", icon: "tiktok" },
  { name: "YouTube", url: "https://www.youtube.com/@SkorpyYouTube", icon: "youtube" },
  { name: "Spotify", url: "https://open.spotify.com/playlist/5E1qJD2Yz4BJDVHmbKvgou?si=75653944baa94c90", icon: "spotify" }
]
};

const ICONS = {
  telegram: '<path d="M21.93 3.68c-.27-.95-1.18-1.39-2.22-1.05L2.56 9.17c-1.06.41-1.06 2.03.04 2.41l4.47 1.55 1.55 4.96c.16.52.83.65 1.21.29l2.25-2.15 4.67 3.44c.86.63 2.12.2 2.33-.86l3.87-14.2c.11-.42-.04-.85-.35-1.13zM10.87 13.5l-.64 2.9-1.07-3.41 9.87-6.86-8.16 7.37z"/>',

  tiktok: '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>',

  youtube: '<path d="M21.58 5.49a2.7 2.7 0 0 0-1.9-1.9C18 3.2 12 3.2 12 3.2s-6 0-7.68.4a2.7 2.7 0 0 0-1.9 1.9C2 7.17 2 10.67 2 10.67s0 3.5.42 5.18a2.7 2.7 0 0 0 1.9 1.9c1.68.39 7.68.39 7.68.39s6 0 7.68-.39a2.7 2.7 0 0 0 1.9-1.9C22 14.17 22 10.67 22 10.67s0-3.5-.42-5.18zM9.6 14.07v-6.8l6.4 3.4-6.4 3.4z"/>',

  spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.299z"/>'
};

document.addEventListener("DOMContentLoaded", () => {
  // фон
  const bg = document.getElementById("bg-container");
  if (bg) bg.style.backgroundImage = `url('${CONFIG.backgroundUrl}')`;

  // аватар/ник
 const avatar = document.getElementById("avatar");
if (avatar) {
  const candidates = [
    CONFIG.avatarUrl,   // то что в CONFIG
    "avatar.png",
    "avatar.jpg",
    "avatar.jpeg",
    "avatar.webp"
  ].filter(Boolean);

  // пробуем по очереди, пока не загрузится
  const tryNext = (i) => {
    if (i >= candidates.length) return;
    const url = candidates[i] + "?v=" + Date.now(); // чтобы не мешал кеш
    avatar.onerror = () => tryNext(i + 1);
    avatar.src = url;
  };

  tryNext(0);
}

  const nick = document.getElementById("nickname");
  if (nick) nick.textContent = CONFIG.nickname;

  // трек
  const trackName = document.getElementById("track-name");
  if (trackName) trackName.textContent = CONFIG.music.title;

  // соц-иконки под ником
  const socialRow = document.getElementById("social-row");
  if (socialRow) {
    socialRow.innerHTML = "";
    CONFIG.socials.forEach((s) => {
      const a = document.createElement("a");
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.className = "social-icon";
      a.setAttribute("aria-label", s.name);
      a.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[s.icon] || ""}</svg>`;
      socialRow.appendChild(a);
    });
  }

  // AUDIO
  const audio = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const iconPlay = document.getElementById("icon-play");
  const iconPause = document.getElementById("icon-pause");
  const progressBar = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  const volumeSlider = document.getElementById("volume-slider");

  if (audio) {
    audio.src = CONFIG.music.src;
    audio.volume = CONFIG.music.volume;
    audio.loop = true;
  }
  if (volumeSlider) volumeSlider.value = CONFIG.music.volume;

  function formatTime(seconds) {
    const s = Number.isFinite(seconds) ? seconds : 0;
    const min = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  }

  function setPlayingUI(isPlaying) {
    if (!iconPlay || !iconPause) return;
    iconPlay.style.display = isPlaying ? "none" : "block";
    iconPause.style.display = isPlaying ? "block" : "none";
  }

  // enterSite должен быть доступен из onclick
  window.enterSite = function enterSite() {
    const start = document.getElementById("start-screen");
    const main = document.getElementById("main-content");

    if (start) {
      start.style.opacity = "0";
      start.style.pointerEvents = "none";
    }

    setTimeout(() => {
      if (start) start.style.display = "none";

      if (main) {
        main.classList.remove("hidden");
        main.style.display = "flex";     // ключ
        main.style.opacity = "1";        // ключ
        main.classList.add("visible");
      }
    }, 800); // как ты просил

    if (audio) {
      audio.play()
        .then(() => setPlayingUI(true))
        .catch((err) => console.log("Audio error:", err));
    }
  };

  // Play/Pause кнопка
  if (playBtn && audio) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => setPlayingUI(true)).catch(() => {});
      } else {
        audio.pause();
        setPlayingUI(false);
      }
    });
  }

  // длительность
  if (audio) {
    audio.addEventListener("loadedmetadata", () => {
      if (durationEl) durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);

      const d = audio.duration || 0;
      const p = d ? (audio.currentTime / d) * 100 : 0;

      if (progressBar && document.activeElement !== progressBar) {
        progressBar.value = p || 0;
        progressBar.style.background =
          `linear-gradient(to right, #a855f7 ${p}%, rgba(255,255,255,0.1) ${p}%)`;
      }
    });
  }

  // перемотка
  if (progressBar && audio) {
    progressBar.addEventListener("input", (e) => {
      const percent = Number(e.target.value || 0);
      const d = audio.duration || 0;
      if (d) audio.currentTime = (percent / 100) * d;

      progressBar.style.background =
        `linear-gradient(to right, #a855f7 ${percent}%, rgba(255,255,255,0.1) ${percent}%)`;
    });
  }

  // громкость
  if (volumeSlider && audio) {
    volumeSlider.addEventListener("input", (e) => {
      audio.volume = Number(e.target.value || 0);
    });
  }
});

function enterSite() {
  const start = document.getElementById("start-screen");
  const main = document.getElementById("main-content");
  const audio = document.getElementById("audio-player");

  if (!start || !main) return;

  start.style.opacity = "0";
  start.style.pointerEvents = "none";

  setTimeout(() => {
    start.style.display = "none";

    main.classList.remove("hidden");
    main.style.display = "flex";
    main.style.opacity = "1";
    main.classList.add("visible");
  }, 800);

  if (audio) {
    audio.play().catch(() => {});
  }
}

// Важно: делаем функцию доступной для onclick=""
window.enterSite = enterSite;

// СТРАХОВКА: даже если onclick сломан — клик всё равно сработает
document.addEventListener("DOMContentLoaded", () => {
  const start = document.getElementById("start-screen");
  if (start) start.addEventListener("click", enterSite);
});





