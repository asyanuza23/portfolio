/**
 * L'ATELIER ROUGE — EDITORIAL PLAYGROUND & CREATIVE ARCHIVE
 * Pure Vanilla JavaScript Engine
 * Features:
 *  1. Interactive Scrapbook Sticker Stamping System (Click & Drag Anywhere)
 *  2. Synthesized Studio Soundscape (Web Audio API Ambient Lo-Fi Generator)
 *  3. Live Folio Clock & Editorial Date Formatting
 *  4. Asymmetrical Magazine Repertoire Filter
 *  5. Curated Project Dossier Modal System
 *  6. Clipboard Telegram Utilities & Toast Notification
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CURATED WORK DOSSIER REPOSITORY
     ========================================================================== */
  const WORK_DOSSIERS = {
    'maison-de-verre': {
      title: 'Botanical Ephemera & Sensory Identity',
      folio: 'FOLIO NO. 01 // IDENTITY',
      client: 'Maison de Verre, Paris',
      year: '2026',
      discipline: 'Brand Mythos, Blind Deboss, Packaging',
      materials: 'Handmade cotton rag paper, unbleached wax seal, Italian glass',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
      summary: 'Maison de Verre is a bespoke niche perfumery founded in the quiet courtyards of the Marais. The identity was conceived as a poetic tribute to 19th-century botanical herbariums, pairing modern razor-sharp serifs with raw, deckled-edge paper ephemera.',
      curatorial: '“We treated the perfume bottle not as a consumer vessel, but as a silent sculpture. Every box is bound with custom cherry red thread that must be physically snipped by the owner, turning the unboxing into a tactile ritual.”'
    },
    'ceramic-botanica': {
      title: 'The Tactile Vessel Series',
      folio: 'FOLIO NO. 02 // OBJECT',
      client: 'Studio Terra, Kyoto',
      year: '2025',
      discipline: 'Ceramic Design, Exhibition, Catalog',
      materials: 'Wood-fired Shino stoneware, persimmon dye, unbleached linen',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85',
      summary: 'A limited edition collection of twenty-four hand-thrown vessels created in collaboration with master potters in Kyoto. Each piece explores organic asymmetry, wabi-sabi imperfections, and rich mineral glazes with deliberate touches of iron-rich cherry pigment.',
      curatorial: '“The catalogue was printed on 45gsm translucent Japanese paper, allowing the silhouettes of previous pages to bleed through like gentle memories.”'
    },
    'cahier-rouge': {
      title: 'Cahier Rouge: Monograph on Tactile Poetry',
      folio: 'FOLIO NO. 03 // PUBLICATION',
      client: 'Éditions du Silence',
      year: '2025',
      discipline: 'Editorial Book Design, Linen Binding, Curatorial',
      materials: 'Coarse oatmeal linen, Fedrigoni Arena 140gsm, scarlet ribbon bookmark',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85',
      summary: 'A 180-page hardcover monograph celebrating tactile poetry, rare bookbinding, and the human desire to preserve physical archives in an increasingly ephemeral digital landscape.',
      curatorial: '“Recipient of the Tokyo TDC Annual Book Design Award 2025. Printed with an experimental quintone process combining deep charcoal ink with subtle warm grey varnish.”'
    },
    'cherie-cherie': {
      title: 'Chérie Chérie: Nostalgic Confectionery',
      folio: 'FOLIO NO. 04 // IDENTITY',
      client: 'Chérie Patisserie, Milan',
      year: '2025',
      discipline: 'Brand Identity, Packaging, Enamel Wares',
      materials: 'Recycled fluted cardboard, tinplate matchboxes, brass foil, custom enamel',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
      summary: 'Chérie Chérie reimagines the joy and nostalgic allure of 1970s Italian espresso bars and confectionery shops. Scalloped cake boxes, custom ceramic espresso cups, and playful cherry motifs anchor a vibrant yet refined universe.',
      curatorial: '“A study in joyful minimalism. We proved that high luxury can embrace wit, playfulness, and cherry red cheerfulness without sacrificing an ounce of elegance.”'
    },
    'ephemeral-soundscapes': {
      title: 'Chamber of Resonances',
      folio: 'FOLIO NO. 05 // SPATIAL',
      client: 'Pavilion Barcelona',
      year: '2024',
      discipline: 'Spatial Architecture, Scenography, Sound',
      materials: 'Acoustic raw linen drapes, hand-carved Roman travertine, quadraphonic audio',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
      summary: 'An architectural intervention within the iconic Mies van der Rohe Pavilion. Heavy acoustic linen hangings modulated both the light filtration and the reverberation time of bespoke sound compositions.',
      curatorial: '“Visitors were invited to take off their footwear and experience how acoustic drapery transforms architectural silence into an intimate physical cocoon.”'
    },
    'soliloquy': {
      title: 'Soliloquy: Shadows on Washed Silk',
      folio: 'FOLIO NO. 06 // EDITORIAL',
      client: 'Revue Magazine',
      year: '2024',
      discipline: 'Art Direction, Photography, Fashion Styling',
      materials: 'Naturally dyed mulberry silks, medium format film (Hasselblad 500C/M)',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
      summary: 'A 14-page visual story capturing raw silk fabrics undulating under late October coastal winds. Photographed entirely with natural light and antique brass reflectors on the rocky shores of Costa Brava.',
      curatorial: '“Zero post-production digital retouching. Every fold, grain of sand, and stray ray of golden light was preserved exactly as captured on analogue film.”'
    }
  };

  /* ==========================================================================
     2. INTERACTIVE DIGITAL SCRAPBOOK STICKER STAMPING SYSTEM
     ========================================================================== */
  function initScrapbookStickers() {
    const dock = document.getElementById('sticker-dock');
    const canvasLayer = document.getElementById('sticker-canvas-layer');
    const clearBtn = document.getElementById('clear-stickers');
    const stickerBtns = document.querySelectorAll('.sticker-btn');

    if (!dock || !canvasLayer) return;

    let selectedSticker = null;

    const stickerSymbols = {
      cherry: '🍒',
      bow: '🎀',
      star: '✦',
      heart: '♡',
      stamp: '💮',
      tape: '🏷️'
    };

    // Toggle selected sticker from tray
    stickerBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const type = btn.dataset.sticker;

        if (selectedSticker === type) {
          selectedSticker = null;
          btn.style.borderColor = '';
          btn.style.backgroundColor = '';
          document.body.style.cursor = 'default';
        } else {
          stickerBtns.forEach((b) => {
            b.style.borderColor = '';
            b.style.backgroundColor = '';
          });
          selectedSticker = type;
          btn.style.borderColor = '#C62838';
          btn.style.backgroundColor = '#ffffff';
          document.body.style.cursor = 'crosshair';
        }
      });
    });

    // Stamp sticker on click anywhere on document
    document.addEventListener('click', (e) => {
      // Don't stamp if clicking inside dock, modal, or on links/buttons
      if (
        !selectedSticker ||
        e.target.closest('#sticker-dock') ||
        e.target.closest('.editorial-modal') ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        return;
      }

      const x = e.clientX;
      const y = e.clientY;
      placeSticker(selectedSticker, x, y);
    });

    function placeSticker(type, clientX, clientY) {
      const el = document.createElement('div');
      el.className = 'placed-sticker';
      el.textContent = stickerSymbols[type] || '🍒';

      const rotation = (Math.random() - 0.5) * 40; // -20deg to +20deg
      const size = type === 'star' ? '1.8rem' : '2.2rem';

      el.style.left = `${clientX}px`;
      el.style.top = `${clientY}px`;
      el.style.fontSize = size;
      el.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

      if (type === 'star') {
        el.style.color = '#C62838';
        el.style.fontWeight = 'bold';
      }

      // Drag placed sticker support
      let isDragging = false;
      let startX, startY;

      el.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        isDragging = true;
        startX = e.clientX - el.offsetLeft;
        startY = e.clientY - el.offsetTop;
        el.style.cursor = 'grabbing';
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        el.style.left = `${e.clientX - startX}px`;
        el.style.top = `${e.clientY - startY}px`;
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          el.style.cursor = 'grab';
        }
      });

      // Double-click to remove
      el.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        el.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
        el.style.transform += ' scale(0)';
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 200);
      });

      canvasLayer.appendChild(el);
    }

    // Clear all placed stickers
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        canvasLayer.innerHTML = '';
      });
    }
  }

  /* ==========================================================================
     3. SYNTHESIZED STUDIO SOUNDSCAPE (Web Audio API Lo-Fi Generator)
     Zero external audio assets needed! Generates warm acoustic reverie.
     ========================================================================== */
  function initStudioSoundscape() {
    const playBtn = document.getElementById('sound-toggle');
    const playIcon = document.getElementById('play-icon');
    const statusText = document.getElementById('sound-status-text');
    const soundBars = document.getElementById('sound-bars');

    if (!playBtn) return;

    let audioCtx = null;
    let isPlaying = false;
    let masterGain = null;
    let noiseNode = null;
    let chordOscillators = [];

    function startAmbience() {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtx) {
        audioCtx = new AudioContext();
      }

      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 1.5);
      masterGain.connect(audioCtx.destination);

      // 1. Subtle Vinyl Crackle / Warm Pink Noise
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.04;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = noiseBuffer;
      noiseNode.loop = true;

      const noiseFilter = audioCtx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(800, audioCtx.currentTime);

      noiseNode.connect(noiseFilter);
      noiseFilter.connect(masterGain);
      noiseNode.start();

      // 2. Warm Satie-like Dream Chord (F Maj9: F3, A3, C4, E4, G4)
      const chordFreqs = [174.61, 220.00, 261.63, 329.63, 392.00];
      chordOscillators = chordFreqs.map((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.4, audioCtx.currentTime);

        oscGain.gain.setValueAtTime(0.02 / (idx + 1), audioCtx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        return osc;
      });

      isPlaying = true;
      playIcon.textContent = '⏸';
      statusText.textContent = 'Playing: Reverie in F';
      soundBars.classList.add('playing');
    }

    function stopAmbience() {
      if (masterGain && audioCtx) {
        masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        setTimeout(() => {
          chordOscillators.forEach((osc) => {
            try { osc.stop(); } catch (e) {}
          });
          if (noiseNode) {
            try { noiseNode.stop(); } catch (e) {}
          }
        }, 850);
      }
      isPlaying = false;
      playIcon.textContent = '▶';
      statusText.textContent = 'Listen to Ambience';
      soundBars.classList.remove('playing');
    }

    playBtn.addEventListener('click', () => {
      if (!isPlaying) {
        startAmbience();
      } else {
        stopAmbience();
      }
    });
  }

  /* ==========================================================================
     4. RUNNING FOLIO LIVE CLOCK
     ========================================================================== */
  function initLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      // Formatted as 11:45:02 CET
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      clockEl.textContent = `${timeStr} CET`;
    }

    update();
    setInterval(update, 1000);
  }

  /* ==========================================================================
     5. ASYMMETRICAL MAGAZINE REPERTOIRE FILTER
     ========================================================================== */
  function initMagazineFilter() {
    const tabs = document.querySelectorAll('.filter-tab');
    const spreads = document.querySelectorAll('.work-spread');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;

        spreads.forEach((spread) => {
          const category = spread.dataset.category;
          if (filter === 'all' || category === filter) {
            spread.style.display = 'flex';
            spread.style.opacity = '0';
            spread.style.transform = 'translateY(15px)';
            setTimeout(() => {
              spread.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              spread.style.opacity = '1';
              spread.style.transform = 'translateY(0)';
            }, 30);
          } else {
            spread.style.display = 'none';
          }
        });
      });
    });
  }

  /* ==========================================================================
     6. CURATED PROJECT DOSSIER MODAL SYSTEM
     ========================================================================== */
  function initDossierModal() {
    const modal = document.getElementById('project-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close');
    const contentArea = document.getElementById('modal-content-area');
    const spreads = document.querySelectorAll('.work-spread');

    if (!modal || !contentArea) return;

    function openModal(id) {
      const data = WORK_DOSSIERS[id];
      if (!data) return;

      contentArea.innerHTML = `
        <div class="modal-media-hero">
          <img src="${data.image}" alt="${data.title}" loading="eager">
        </div>
        <div class="modal-grid-details">
          <div class="modal-text-col">
            <span class="section-badge">${data.folio}</span>
            <h2 class="modal-title">${data.title}</h2>
            <div class="modal-subtitle">Curated for ${data.client} — ${data.year}</div>
            
            <h4 style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-cherry); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.4rem;">Overview &amp; Concept</h4>
            <p class="modal-prose">${data.summary}</p>

            <h4 style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-cherry); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.4rem;">Curatorial Commentary</h4>
            <p class="modal-prose" style="font-family: var(--font-editorial); font-style: italic; color: var(--c-charcoal); border-left: 2px solid var(--c-cherry); padding-left: 1rem;">
              ${data.curatorial}
            </p>
          </div>

          <div class="modal-sidebar-info">
            <div class="sidebar-data-group">
              <h5>Discipline</h5>
              <p>${data.discipline}</p>
            </div>

            <div class="sidebar-data-group">
              <h5>Material Palette</h5>
              <p>${data.materials}</p>
            </div>

            <div class="sidebar-data-group">
              <h5>Commissioned By</h5>
              <p>${data.client}</p>
            </div>

            <div class="sidebar-data-group">
              <h5>Release Edition</h5>
              <p>${data.year} // Limited Physical Archive</p>
            </div>
          </div>
        </div>
      `;

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    spreads.forEach((spread) => {
      spread.addEventListener('click', () => {
        const id = spread.dataset.id;
        openModal(id);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     7. TELEGRAM UTILITIES & TOAST FEEDBACK
     ========================================================================== */
  function initTelegramUtilities() {
    const copyBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('editorial-toast');
    const toastText = document.getElementById('toast-text');
    const emailToCopy = 'bonjour@valerievance.studio';

    if (!copyBtn || !toast) return;

    copyBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          const ta = document.createElement('textarea');
          ta.value = emailToCopy;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }

        toastText.textContent = 'Dispatch address copied to clipboard!';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
      } catch (err) {
        console.error('Copy dispatch failed', err);
      }
    });
  }

  /* ==========================================================================
     8. INITIALIZATION LIFECYCLE
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initScrapbookStickers();
    initStudioSoundscape();
    initLiveClock();
    initMagazineFilter();
    initDossierModal();
    initTelegramUtilities();
  });
})();
