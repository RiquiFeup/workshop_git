(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress-bar');
  const overview = document.getElementById('overview');
  const overviewToggle = document.getElementById('overview-toggle');
  const overviewClose = document.getElementById('overview-close');
  const overviewList = document.getElementById('overview-list');
  let current = 0;
  let touchStart = null;

  const pad = number => String(number).padStart(2, '0');
  const indexFromHash = () => {
    const match = location.hash.match(/^#slide-(\d+)$/);
    if (!match) return 0;
    return Math.min(slides.length - 1, Math.max(0, Number(match[1]) - 1));
  };

  function show(index, updateHash = true) {
    current = Math.min(slides.length - 1, Math.max(0, index));
    slides.forEach((slide, position) => {
      const active = position === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      if (active) slide.scrollTop = 0;
    });
    counter.textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
    progress.style.transform = `scaleX(${(current + 1) / slides.length})`;
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    document.title = `${slides[current].dataset.title} · Git & GitHub — ArmisLAB × NUBI`;
    [...overviewList.querySelectorAll('button')].forEach((button, position) => {
      if (position === current) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
    if (updateHash && location.hash !== `#slide-${current + 1}`) {
      history.replaceState(null, '', `#slide-${current + 1}`);
    }
  }

  slides.forEach((slide, index) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `${pad(index + 1)} · ${slide.dataset.title}`;
    button.addEventListener('click', () => {
      show(index);
      overview.close();
      overviewToggle.focus();
    });
    item.append(button);
    overviewList.append(item);
  });

  prev.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  overviewToggle.addEventListener('click', () => {
    overview.showModal();
    overviewList.querySelector('[aria-current="true"]')?.focus();
  });
  overviewClose.addEventListener('click', () => overview.close());
  overview.addEventListener('close', () => overviewToggle.focus());
  overview.addEventListener('click', event => {
    if (event.target === overview) overview.close();
  });

  document.addEventListener('keydown', event => {
    if (overview.open) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (['ArrowRight', 'PageDown'].includes(event.key) || (event.key === ' ' && !(target instanceof HTMLElement && target.closest('button, a')))) {
      event.preventDefault();
      show(current + 1);
    } else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(event.key)) {
      event.preventDefault();
      show(current - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      show(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      show(slides.length - 1);
    } else if (event.key.toLowerCase() === 'o') {
      event.preventDefault();
      overviewToggle.click();
    }
  });

  document.addEventListener('touchstart', event => {
    if (overview.open || event.touches.length !== 1) return;
    touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }, { passive: true });
  document.addEventListener('touchend', event => {
    if (!touchStart || overview.open || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dx) < 55 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
    show(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  window.addEventListener('hashchange', () => show(indexFromHash(), false));
  show(indexFromHash(), false);
})();
