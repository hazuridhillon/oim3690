document.addEventListener('DOMContentLoaded',()=>{
  const player=document.getElementById('audio-player');
  const nowPlaying=document.getElementById('now-playing');

  document.querySelectorAll('.play-track').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const src=btn.getAttribute('data-src');
      const label=btn.textContent.replace(/\s*—\s*play$/,'');
      if(!src){
        nowPlaying.textContent='No source for this track. Add an MP3 to the audio/ folder.';
        return;
      }
      if(player.getAttribute('src')!==src){
        player.setAttribute('src',src);
      }
      player.play().catch(()=>{});
      nowPlaying.textContent='Playing: '+label;
    });
  });

  // Keep only one details open at a time for a shelf-like behaviour
  document.querySelectorAll('.shelf details').forEach(d=>{
    d.addEventListener('toggle',(e)=>{
      if(d.open){
        document.querySelectorAll('.shelf details').forEach(other=>{if(other!==d) other.open=false});
      }
    });
  });
});
