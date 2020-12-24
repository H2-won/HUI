const pos = document.documentElement;
pos.addEventListener('mousemove', e=>{
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
})

const titleLogo = document.querySelector('.titleLogo');
mouseHovering(titleLogo, '', '#F63E61');