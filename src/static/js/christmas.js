const section = document.querySelector('section');
function create_random_bubbles(){
    const cnt = 200;
    const section = document.querySelector('section');
    let i=0;
    while(i<cnt){
        const created_bubble = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight)

        const size = Math.random() * 10;
        created_bubble.style.left = x+'px';
        created_bubble.style.top = y+'px';
        created_bubble.style.width = size + 1+'px';
        created_bubble.style.height = size + 1 + 'px';

        created_bubble.style.animationDuration = size + 3 + 's';
        created_bubble.style.animationDelay = -size + 's';

        section.appendChild(created_bubble);
        i++;
    }
}
create_random_bubbles();

const circle = document.querySelector('.circle');
mouseHovering(circle, 'Click !', '#F63E61', '4em');

circle.addEventListener('click', ()=>{
    if(section.classList.contains('redSection')){
        cursor.setAttribute('color', '#F63E61');
        mouseHovering(logo, '', '#F63E61', '5em');
        mouseHovering(circle, 'Click !', '#F63E61', '4em');
    }
    else{
        cursor.setAttribute('color', '#fff');
        mouseHovering(logo, '', '#fff', '5em');
        mouseHovering(circle, 'Click !', '#fff', '4em');
    }
    section.classList.toggle('redSection');
    circle.classList.toggle('redCircle');
    cursor.classList.toggle('redCursor');
    document.querySelector('.inCircle').classList.toggle('redInCircle');
    document.querySelector('h2').classList.toggle('redTitle');
    document.querySelectorAll('i').forEach((i)=> i.classList.toggle('redI'));
    document.querySelector('a').classList.toggle('redIcon');
})