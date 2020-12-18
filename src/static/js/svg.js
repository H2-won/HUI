function componentHovering() {

    const components = document.querySelectorAll('.component');
    const title = document.querySelectorAll('.componentTitle');
    const line = document.querySelectorAll('.componentLine');
    const btn = document.querySelectorAll('.componentBtn');

    components.forEach((component, i) => {
        component.addEventListener('mouseover', (e) => {
            title[i].style.color="var(--red)"
            line[i].style.background="var(--red)";
            btn[i].style.color="var(--darkPink)";
            btn[i].style.background="#252425";
        });
        component.addEventListener('mouseout', (e) => {
            title[i].style.color="var(--purple)"
            line[i].style.background="var(--purple)";
            btn[i].style.color="var(--darkPurple)";
            btn[i].style.background="var(--darkGray)";
        });
    });

}

componentHovering();

function cursorHovering(){
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) =>{
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    })
}

cursorHovering();