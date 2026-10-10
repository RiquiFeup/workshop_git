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
  const copyStatus = document.getElementById('copy-status');
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

  const tabs = [...document.querySelectorAll('.os-tabs [role="tab"]')];
  function selectTab(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      event.stopPropagation();
      const destination = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
        : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectTab(tabs[destination], true);
    });
  });

  document.querySelectorAll('.copy-command').forEach(button => {
    button.addEventListener('click', async () => {
      const code = document.getElementById(button.dataset.copyTarget);
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.textContent.trim());
        button.textContent = 'Copiado ✓';
        button.classList.add('is-copied');
        button.classList.remove('is-error');
        copyStatus.textContent = `Comando copiado: ${code.textContent.trim()}`;
      } catch {
        button.textContent = 'Seleciona o texto';
        button.classList.add('is-error');
        button.classList.remove('is-copied');
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        copyStatus.textContent = 'Cópia automática indisponível. O comando está selecionado para copiares manualmente.';
      }
      window.setTimeout(() => {
        button.textContent = 'Copiar';
        button.classList.remove('is-copied', 'is-error');
      }, 2500);
    });
  });

  const historyPoints = [...document.querySelectorAll('.history-point')];
  const historyMessage = document.getElementById('history-message');
  const historyChange = document.getElementById('history-change');
  historyPoints.forEach(point => point.addEventListener('click', () => {
    historyPoints.forEach(item => {
      const selected = item === point;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    historyMessage.textContent = point.dataset.message;
    historyChange.textContent = point.dataset.change;
  }));

  const pullToggle = document.getElementById('pull-toggle');
  pullToggle?.addEventListener('click', () => {
    const pulled = pullToggle.getAttribute('aria-pressed') !== 'true';
    pullToggle.setAttribute('aria-pressed', String(pulled));
    document.getElementById('pull-visual').classList.toggle('is-pulled', pulled);
    document.getElementById('pull-local-version').textContent = pulled ? 'Versão A · B · C' : 'Versão A · B';
    document.getElementById('pull-local-note').textContent = pulled ? 'Já recebeu a alteração C' : 'Ainda falta a alteração C';
    document.getElementById('pull-result').textContent = pulled
      ? 'O computador recebeu e integrou a alteração que estava no GitHub.'
      : 'Clica para ver a atualização chegar ao computador.';
    pullToggle.textContent = pulled ? 'Repor exemplo' : 'Mostrar o pull';
  });

  const branchToggle = document.getElementById('branch-toggle');
  branchToggle?.addEventListener('click', () => {
    const branched = branchToggle.getAttribute('aria-pressed') !== 'true';
    branchToggle.setAttribute('aria-pressed', String(branched));
    document.getElementById('branch-visual').classList.toggle('is-branched', branched);
    document.getElementById('branch-result').textContent = branched
      ? 'A feature nasceu da main. As duas linhas podem receber commits diferentes.'
      : 'Clica para abrir uma linha de trabalho paralela.';
    branchToggle.textContent = branched ? 'Repor exemplo' : 'Criar a branch feature';
  });

  const mergeToggle = document.getElementById('merge-toggle');
  mergeToggle?.addEventListener('click', () => {
    const merged = mergeToggle.getAttribute('aria-pressed') !== 'true';
    mergeToggle.setAttribute('aria-pressed', String(merged));
    document.getElementById('merge-visual').classList.toggle('is-merged', merged);
    document.getElementById('merge-outcome-text').textContent = merged
      ? 'A main inclui o trabalho da feature' : 'Duas linhas de commits';
    document.getElementById('merge-result').textContent = merged
      ? 'A feature convergiu para um novo commit na main.'
      : 'Clica para ver a feature convergir para a main.';
    mergeToggle.textContent = merged ? 'Repor exemplo' : 'Juntar na main';
  });

  const vscodeChoices = [...document.querySelectorAll('[data-vscode-choice]')];
  vscodeChoices.forEach(button => button.addEventListener('click', () => {
    const choice = button.dataset.vscodeChoice;
    vscodeChoices.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('vscode-ready').hidden = choice !== 'ready';
    document.getElementById('vscode-install').hidden = choice !== 'install';
  }));

  document.addEventListener('keydown', event => {
    if (overview.open) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('input, textarea, select, [contenteditable="true"], [role="tablist"], details')) return;
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
