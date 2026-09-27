(() => {
  const copy = {
    es: {
      title:'MAREA — surf infinito', description:'MAREA — juego de surf creado por nachommmartinez.',
      gameLabel:'MAREA, juego de surf creado por nachommmartinez', canvasLabel:'Ola y surfista',
      infinite:'SURF INFINITO', created:'CREADO POR NACHOMMMARTINEZ', chooseSurfer:'ELIGE SURFISTA',
      eyesTurquoise:'OJOS TURQUESA', eyesLime:'OJOS LIMA', eyesAmber:'OJOS ÁMBAR', eyesSky:'OJOS CIELO',
      chooseBoard:'ELIGE TABLA', boardPink:'ROSA', boardTurquoise:'TURQUESA', boardGold:'DORADA', boardPurple:'VIOLETA',
      turnHint:'Para una mejor experiencia, gira el móvil en horizontal.', enter:'ENTRAR AL AGUA', allGames:'VER TODOS LOS JUEGOS',
      before:'ANTES DE SURFEAR', how:'CÓMO JUGAR',
      tap:'<strong>Toque breve:</strong> salta sobre las rocas.',
      hold:'<strong>Mantén pulsado:</strong> el surfista gira en el aire. Suelta a tiempo para aterrizar el backflip.',
      extra:'También puedes usar <strong>Espacio</strong>. Cada 100 metros ganas puntos; toca pájaros blancos y aterriza backflips para sumar más.',
      surf:'¡A SURFEAR!', end:'FIN DE LA OLA', records:'RÉCORDS', initials:'TUS INICIALES · 3 LETRAS',
      save:'GUARDAR', replay:'OTRA OLA', change:'CAMBIAR SURFISTA', fullscreen:'⛶ PANTALLA COMPLETA',
      fullscreenLabel:'Activar pantalla completa', soundOn:'Activar música', soundOff:'Silenciar música',
      groupSurfer:'Elegir surfista', groupBoard:'Elegir tabla', boardPinkLabel:'Tabla rosa', boardTurquoiseLabel:'Tabla turquesa',
      boardGoldLabel:'Tabla dorada', boardPurpleLabel:'Tabla violeta', initialsLabel:'Tres iniciales', scoresLabel:'Diez mejores puntuaciones',
      points:'PUNTOS', meters:'METROS', birds:'PÁJAROS BLANCOS · +1000', bird:'¡PÁJARO BLANCO! · +1000',
      fall:'CAÍDA', rockFall:'CAÍDA EN LA ROCA', backflip:'BACKFLIP', boost:'IMPULSO',
      giant:'¡GRAN OLA! · BACKFLIP +1000', bigWave:'LA GRAN OLA', crest:'BACKFLIP EN LA CRESTA · +1000',
      calm:'EL MAR CONTIENE EL ALIENTO', momentum:'INERCIA',
      saved:'RÉCORD GUARDADO EN ESTE DISPOSITIVO', threeLetters:'Escribe tres letras',
      saveError:'No se pudo guardar el récord en este navegador. Comprueba que permite almacenar datos e inténtalo de nuevo.',
      iosTip:'En iPhone o iPad: Compartir → Añadir a pantalla de inicio. Después abre MAREA desde su icono.',
      browserTip:'Si el navegador bloquea pantalla completa, abre MAREA en Chrome desde el menú ⋮ o añádela a la pantalla de inicio.'
    },
    en: {
      title:'MAREA — endless surf', description:'MAREA — a surfing game created by nachommmartinez.',
      gameLabel:'MAREA, a surfing game created by nachommmartinez', canvasLabel:'Wave and surfer',
      infinite:'ENDLESS SURF', created:'CREATED BY NACHOMMMARTINEZ', chooseSurfer:'CHOOSE A SURFER',
      eyesTurquoise:'TURQUOISE EYES', eyesLime:'LIME EYES', eyesAmber:'AMBER EYES', eyesSky:'SKY-BLUE EYES',
      chooseBoard:'CHOOSE A BOARD', boardPink:'PINK', boardTurquoise:'TURQUOISE', boardGold:'GOLD', boardPurple:'PURPLE',
      turnHint:'For the best experience, turn your phone sideways.', enter:'ENTER THE WATER', allGames:'SEE ALL GAMES',
      before:'BEFORE YOU SURF', how:'HOW TO PLAY',
      tap:'<strong>Quick tap:</strong> jump over the rocks.',
      hold:'<strong>Press and hold:</strong> spin in the air. Release in time to land a backflip.',
      extra:'You can also use <strong>Space</strong>. Earn points every 100 metres; touch white birds and land backflips for more.',
      surf:'LET’S SURF!', end:'END OF THE WAVE', records:'HIGH SCORES', initials:'YOUR INITIALS · 3 LETTERS',
      save:'SAVE', replay:'ANOTHER WAVE', change:'CHANGE SURFER', fullscreen:'⛶ FULL SCREEN',
      fullscreenLabel:'Enter full screen', soundOn:'Turn music on', soundOff:'Mute music',
      groupSurfer:'Choose a surfer', groupBoard:'Choose a board', boardPinkLabel:'Pink board', boardTurquoiseLabel:'Turquoise board',
      boardGoldLabel:'Gold board', boardPurpleLabel:'Purple board', initialsLabel:'Three initials', scoresLabel:'Top ten scores',
      points:'POINTS', meters:'METRES', birds:'WHITE BIRDS · +1000', bird:'WHITE BIRD! · +1000',
      fall:'WIPEOUT', rockFall:'HIT A ROCK', backflip:'BACKFLIP', boost:'BOOST',
      giant:'BIG WAVE! · BACKFLIP +1000', bigWave:'THE BIG WAVE', crest:'BACKFLIP AT THE CREST · +1000',
      calm:'THE SEA HOLDS ITS BREATH', momentum:'MOMENTUM',
      saved:'HIGH SCORE SAVED ON THIS DEVICE', threeLetters:'Enter three letters',
      saveError:'Could not save your score in this browser. Check that local storage is allowed and try again.',
      iosTip:'On iPhone or iPad: Share → Add to Home Screen. Then open MAREA from its icon.',
      browserTip:'If your browser blocks full screen, open MAREA in Chrome from the ⋮ menu or add it to your Home Screen.'
    }
  };
  const text = [
    ['#start .eyebrow','infinite'],['#start .byline','created'],['#start .choose-title','chooseSurfer'],
    ['[data-character="0"] small','eyesTurquoise'],['[data-character="1"] small','eyesLime'],
    ['[data-character="2"] small','eyesAmber'],['[data-character="3"] small','eyesSky'],
    ['#start .board-title','chooseBoard'],['[data-board="0"] span:last-child','boardPink'],
    ['[data-board="1"] span:last-child','boardTurquoise'],['[data-board="2"] span:last-child','boardGold'],
    ['[data-board="3"] span:last-child','boardPurple'],['.rotate-hint span','turnHint'],
    ['#startButton','enter'],['#start a','allGames'],['#howToPlay .eyebrow','before'],
    ['#howToPlayTitle','how'],['#playButton','surf'],['#gameOver .eyebrow','end'],
    ['#gameOverTitle','records'],['#scoreForm label','initials'],['#scoreForm button','save'],
    ['#replayButton','replay'],['#changeCharacterButton','change'],['#fullscreenButton','fullscreen']
  ];
  const html = [
    ['#howToPlay p:nth-of-type(1)','tap'],['#howToPlay p:nth-of-type(2)','hold'],
    ['#howToPlay .instructions-extra','extra']
  ];
  const labels = [
    ['#game','gameLabel'],['#screen','canvasLabel'],['.characters','groupSurfer'],['.boards','groupBoard'],
    ['[data-board="0"]','boardPinkLabel'],['[data-board="1"]','boardTurquoiseLabel'],
    ['[data-board="2"]','boardGoldLabel'],['[data-board="3"]','boardPurpleLabel'],
    ['#initials','initialsLabel'],['#highscores','scoresLabel'],['#fullscreenButton','fullscreenLabel']
  ];
  let language = 'es';
  try { language = localStorage.getItem('marea.language') === 'en' ? 'en' : 'es'; } catch {}
  window.mareaT = key => copy[language][key] || key;
  window.mareaLanguage = () => language;
  function update() {
    const t = window.mareaT;
    document.documentElement.lang = language;
    document.title = t('title');
    document.querySelector('meta[name="description"]').content = t('description');
    text.forEach(([selector,key]) => { const el=document.querySelector(selector); if(el)el.textContent=t(key); });
    html.forEach(([selector,key]) => { const el=document.querySelector(selector); if(el)el.innerHTML=t(key); });
    labels.forEach(([selector,key]) => { const el=document.querySelector(selector); if(el)el.setAttribute('aria-label',t(key)); });
    const sound=document.querySelector('#soundButton');
    if(sound) sound.setAttribute('aria-label',t(sound.classList.contains('muted')?'soundOn':'soundOff'));
    const score=document.querySelector('#finalScore');
    if(score && score.textContent) score.textContent=score.textContent.replace(/\b(PUNTOS|POINTS)\b/g,t('points')).replace(/\b(METROS|METRES)\b/g,t('meters'));
    const button=document.querySelector('#languageButton');
    button.textContent=language==='es'?'EN':'ES';
    button.setAttribute('aria-label',language==='es'?'Switch to English':'Cambiar a español');
    try { localStorage.setItem('marea.language',language); } catch {}
    document.dispatchEvent(new Event('marea:language'));
  }
  window.mareaSetLanguage = next => { language=next==='en'?'en':'es'; update(); };
  document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('#languageButton').addEventListener('click',() => window.mareaSetLanguage(language==='es'?'en':'es'));
    update();
  });
})();
