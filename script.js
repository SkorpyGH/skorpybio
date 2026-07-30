const CONFIG = {
  nickname: "skorpy",
  avatarUrl: "avatar.jpg",
  backgroundUrl: "background.gif",
  discordId: "908773861489778728",
  discordProfileUrl: "https://discord.com/users/908773861489778728",
  music: {
    title: "leadwave - haze",
    src: "music.mp3",
    volume: 0.5
  },
  socials: [
    { name: "TikTok", url: "https://www.tiktok.com/@skorpy0n?_r=1&_t=ZS-93rOn0dX5Lr", icon: "tiktok" },
    { name: "YouTube", url: "https://www.youtube.com/@SkorpyYouTube", icon: "youtube" },
    { name: "Spotify", url: "https://open.spotify.com/playlist/5E1qJD2Yz4BJDVHmbKvgou?si=75653944baa94c90", icon: "spotify" }
  ]
};

const ICONS = {
  telegram: '<path d="M21.93 3.68c-.27-.95-1.18-1.39-2.22-1.05L2.56 9.17c-1.06.41-1.06 2.03.04 2.41l4.47 1.55 1.55 4.96c.16.52.83.65 1.21.29l2.25-2.15 4.67 3.44c.86.63 2.12.2 2.33-.86l3.87-14.2c.11-.42-.04-.85-.35-1.13zM10.87 13.5l-.64 2.9-1.07-3.41 9.87-6.86-8.16 7.37z"/>',
  tiktok: '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>',
  youtube: '<path d="M21.58 5.49a2.7 2.7 0 0 0-1.9-1.9C18 3.2 12 3.2 12 3.2s-6 0-7.68.4a2.7 2.7 0 0 0-1.9 1.9C2 7.17 2 10.67 2 10.67s0 3.5.42 5.18a2.7 2.7 0 0 0 1.9 1.9c1.68.39 7.68.39 7.68.39s6 0 7.68-.39a2.7 2.7 0 0 0 1.9-1.9C22 14.17 22 10.67 22 10.67s0-3.5-.42-5.18zM9.6 14.07v-6.8l6.4 3.4-6.4 3.4z"/>',
  spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.299z"/>',
  discord: '<path d="M20.32 4.37A19.78 19.78 0 0 0 15.36 2c-.22.4-.47.93-.64 1.36a18.43 18.43 0 0 0-5.5 0A13.3 13.3 0 0 0 8.57 2a19.72 19.72 0 0 0-4.95 2.38C.49 9.09-.36 13.68.06 18.2A19.9 19.9 0 0 0 6.14 21.3c.49-.67.92-1.38 1.29-2.13-.71-.27-1.39-.6-2.04-.98.17-.13.34-.26.5-.4a14.12 14.12 0 0 0 12.22 0c.16.14.33.27.5.4-.65.39-1.33.72-2.04.99.37.74.8 1.45 1.29 2.12a19.86 19.86 0 0 0 6.08-3.08c.5-5.24-.84-9.79-3.62-13.85ZM8.02 15.42c-1.18 0-2.15-1.1-2.15-2.45s.95-2.45 2.15-2.45c1.2 0 2.17 1.1 2.15 2.45 0 1.35-.95 2.45-2.15 2.45Zm7.96 0c-1.18 0-2.15-1.1-2.15-2.45s.95-2.45 2.15-2.45c1.2 0 2.17 1.1 2.15 2.45 0 1.35-.95 2.45-2.15 2.45Z"/>',
  wifi: '<path d="M12 18.5 9.7 16.2a3.26 3.26 0 0 1 4.6 0L12 18.5Zm-4.6-4.6-2.1-2.1a9.48 9.48 0 0 1 13.4 0l-2.1 2.1a6.47 6.47 0 0 0-9.2 0Zm-4.5-4.5L.8 7.3a15.82 15.82 0 0 1 22.4 0l-2.1 2.1a12.83 12.83 0 0 0-18.2 0Z"/>'
};

const STATUS_LABELS = {
  online: "в сети",
  idle: "отошёл",
  dnd: "не беспокоить",
  offline: "не в сети"
};

function svgIcon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

function formatTime(seconds) {
  const safeSeconds = Number.isFinite(seconds) ? seconds : 0;
  const min = Math.floor(safeSeconds / 60);
  const sec = Math.floor(safeSeconds % 60);
  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function paintRange(range, percent) {
  const value = Math.max(0, Math.min(100, Number(percent) || 0));
  range.style.background = `linear-gradient(to right, rgba(255,255,255,0.86) ${value}%, rgba(255,255,255,0.12) ${value}%)`;
}

function discordAvatarUrl(user) {
  if (!user?.id) return CONFIG.avatarUrl;
  if (user.avatar) {
    const ext = user.avatar.startsWith("a_") ? "gif" : "png";
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
  }
  const index = Number(user.discriminator) ? Number(user.discriminator) % 5 : Number(BigInt(user.id) >> 22n) % 6;
  return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
}

function activityText(data) {
  if (!data) return "";

  if (data.listening_to_spotify && data.spotify) {
    return `слушает ${data.spotify.song} — ${data.spotify.artist}`;
  }

  const activities = Array.isArray(data.activities) ? data.activities : [];
  const custom = activities.find((item) => item.type === 4 && item.state);
  const playing = activities.find((item) => item.type === 0);
  const streaming = activities.find((item) => item.type === 1);
  const listening = activities.find((item) => item.type === 2 && item.name !== "Spotify");
  const watching = activities.find((item) => item.type === 3);
  const competing = activities.find((item) => item.type === 5);

  if (playing) {
    const parts = [`играет в ${playing.name}`];
    if (playing.details) parts.push(playing.details);
    if (playing.state) parts.push(playing.state);
    return parts.join(" · ");
  }
  if (streaming) {
    const parts = [`стримит ${streaming.name}`];
    if (streaming.details) parts.push(streaming.details);
    if (streaming.state) parts.push(streaming.state);
    return parts.join(" · ");
  }
  if (listening) {
    const parts = [`слушает ${listening.name}`];
    if (listening.details) parts.push(listening.details);
    if (listening.state) parts.push(listening.state);
    return parts.join(" · ");
  }
  if (watching) {
    const parts = [`смотрит ${watching.name}`];
    if (watching.details) parts.push(watching.details);
    if (watching.state) parts.push(watching.state);
    return parts.join(" · ");
  }
  if (competing) {
    const parts = [`соревнуется в ${competing.name}`];
    if (competing.details) parts.push(competing.details);
    if (competing.state) parts.push(competing.state);
    return parts.join(" · ");
  }
  if (custom) return custom.state;
  return "";
}

function setStatusDots(status) {
  const safe = STATUS_LABELS[status] ? status : "offline";
  ["status-dot", "avatar-status-dot"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove("online", "idle", "dnd", "offline");
    el.classList.add(safe);
  });
}

function applyDiscordPresence(data) {
  const presence = document.getElementById("discord-presence");
  const activity = document.getElementById("status-activity");
  const statusName = document.getElementById("status-name");
  const statusBadge = document.getElementById("status-badge");
  const statusAvatar = document.getElementById("status-avatar");

  if (!data) {
    setStatusDots("offline");
    if (presence) presence.textContent = "статус недоступен";
    if (activity) activity.textContent = "";
    return;
  }

  const user = data.discord_user || {};
  const status = data.discord_status || "offline";
  const displayName = user.global_name || user.username || CONFIG.nickname;
  const avatarSrc = discordAvatarUrl(user);

  setStatusDots(status);

  if (statusName) statusName.textContent = displayName;
  if (statusAvatar) statusAvatar.src = avatarSrc;

  if (statusBadge) {
    const tag = user.primary_guild?.tag || user.clan?.tag || "";
    if (tag) {
      statusBadge.hidden = false;
      statusBadge.textContent = tag;
    } else {
      statusBadge.hidden = true;
      statusBadge.textContent = "";
    }
  }

  if (presence) {
    presence.textContent = STATUS_LABELS[status] || STATUS_LABELS.offline;
  }

  if (activity) {
    activity.textContent = activityText(data);
  }
}

async function fetchLanyardOnce() {
  const response = await fetch(`https://api.lanyard.rest/v1/users/${CONFIG.discordId}`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Lanyard ${response.status}`);
  }

  const payload = await response.json();
  if (!payload?.success || !payload.data) {
    throw new Error("Lanyard empty");
  }

  return payload.data;
}

function connectLanyardSocket() {
  let socket;
  let heartbeat;
  let reconnectTimer;
  let attempts = 0;

  const clearTimers = () => {
    if (heartbeat) clearInterval(heartbeat);
    if (reconnectTimer) clearTimeout(reconnectTimer);
    heartbeat = null;
    reconnectTimer = null;
  };

  const scheduleReconnect = () => {
    clearTimers();
    attempts += 1;
    const delay = Math.min(30000, 1500 * attempts);
    reconnectTimer = setTimeout(connect, delay);
  };

  const connect = () => {
    clearTimers();
    socket = new WebSocket("wss://api.lanyard.rest/socket");

    socket.addEventListener("open", () => {
      attempts = 0;
    });

    socket.addEventListener("message", (event) => {
      let packet;
      try {
        packet = JSON.parse(event.data);
      } catch {
        return;
      }

      if (packet.op === 1) {
        const interval = packet.d?.heartbeat_interval || 30000;
        heartbeat = setInterval(() => {
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ op: 3 }));
          }
        }, interval);

        socket.send(JSON.stringify({
          op: 2,
          d: { subscribe_to_id: CONFIG.discordId }
        }));
        return;
      }

      if (packet.t === "INIT_STATE" || packet.t === "PRESENCE_UPDATE") {
        applyDiscordPresence(packet.d);
      }
    });

    socket.addEventListener("close", scheduleReconnect);
    socket.addEventListener("error", () => {
      try { socket.close(); } catch {}
    });
  };

  connect();
}

async function initDiscordPresence() {
  try {
    const data = await fetchLanyardOnce();
    applyDiscordPresence(data);
    connectLanyardSocket();
  } catch {
    applyDiscordPresence(null);
    const presence = document.getElementById("discord-presence");
    if (presence) {
      presence.textContent = "offline · подключи Lanyard";
      presence.title = "Зайди на discord.gg/lanyard своим аккаунтом, чтобы статус обновлялся в реальном времени";
    }
  }
}

function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

  document.body.classList.add("has-pointer");

  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.classList.add("active");
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    glow.classList.remove("active");
  });
}

function initCardTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bg-container");
  const avatar = document.getElementById("avatar");
  const nick = document.getElementById("nickname");
  const trackName = document.getElementById("track-name");
  const socialRow = document.getElementById("social-row");
  const iconTargets = document.querySelectorAll("[data-icon]");
  const contactMenu = document.querySelector(".contact-menu");
  const contactTrigger = document.querySelector(".contact-trigger");
  const equalizer = document.getElementById("equalizer");

  if (bg) bg.style.backgroundImage = `url('${CONFIG.backgroundUrl}')`;
  if (avatar) avatar.src = CONFIG.avatarUrl;
  if (nick) nick.textContent = CONFIG.nickname;
  if (trackName) trackName.textContent = CONFIG.music.title;

  iconTargets.forEach((target) => {
    target.innerHTML = svgIcon(target.dataset.icon);
  });

  if (socialRow) {
    socialRow.innerHTML = "";
    CONFIG.socials.forEach((social, index) => {
      const link = document.createElement("a");
      link.href = social.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.className = "social-icon";
      link.setAttribute("aria-label", social.name);
      link.dataset.tooltip = social.name;
      link.style.animationDelay = `${0.05 * index}s`;
      link.innerHTML = svgIcon(social.icon);
      socialRow.appendChild(link);
    });
  }

  if (contactMenu && contactTrigger) {
    const isTouch = window.matchMedia("(hover: none)").matches;

    contactTrigger.addEventListener("click", (event) => {
      if (!isTouch && contactMenu.matches(":hover")) return;
      event.preventDefault();
      const isOpen = contactMenu.classList.toggle("open");
      contactTrigger.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
      if (!contactMenu.contains(event.target)) {
        contactMenu.classList.remove("open");
        contactTrigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  const audio = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const progressBar = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  const volumeSlider = document.getElementById("volume-slider");

  function setPlayingUI(isPlaying) {
    if (playBtn) playBtn.dataset.playing = String(Boolean(isPlaying));
    if (equalizer) equalizer.classList.toggle("playing", Boolean(isPlaying));
  }

  if (audio) {
    audio.src = CONFIG.music.src;
    audio.volume = CONFIG.music.volume;
    audio.loop = true;
  }

  if (progressBar) paintRange(progressBar, 0);

  if (volumeSlider) {
    volumeSlider.value = CONFIG.music.volume;
    paintRange(volumeSlider, CONFIG.music.volume * 100);
  }

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
        main.style.display = "flex";
        requestAnimationFrame(() => main.classList.add("visible"));
      }
    }, 800);

    if (audio) {
      audio.play()
        .then(() => setPlayingUI(true))
        .catch(() => setPlayingUI(false));
    }
  };

  const start = document.getElementById("start-screen");
  if (start) start.addEventListener("click", window.enterSite);

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

  if (audio) {
    audio.addEventListener("play", () => setPlayingUI(true));
    audio.addEventListener("pause", () => setPlayingUI(false));

    audio.addEventListener("loadedmetadata", () => {
      if (durationEl) durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);

      const duration = audio.duration || 0;
      const percent = duration ? (audio.currentTime / duration) * 100 : 0;
      if (progressBar && document.activeElement !== progressBar) {
        progressBar.value = percent || 0;
        paintRange(progressBar, percent);
      }
    });
  }

  if (progressBar && audio) {
    progressBar.addEventListener("input", (event) => {
      const percent = Number(event.target.value || 0);
      const duration = audio.duration || 0;
      if (duration) audio.currentTime = (percent / 100) * duration;
      paintRange(progressBar, percent);
    });
  }

  if (volumeSlider && audio) {
    volumeSlider.addEventListener("input", (event) => {
      const volume = Number(event.target.value || 0);
      audio.volume = volume;
      paintRange(volumeSlider, volume * 100);
    });
  }

  initCursorGlow();
  initCardTilt();
  initDiscordPresence();
});
