const cursor = document.querySelector('.cursor');
const logo = document.querySelector('.icon');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

logo.addEventListener('mouseover', () => {
    cursor.style.border = '2.2px solid #F63E61';
    cursor.style.width = '5em';
    cursor.style.height = '5em';
})

logo.addEventListener('mouseout', () => {
    const cursorColor = cursor.getAttribute('color');
    cursor.style.border = `4px solid ${cursorColor}`;
    cursor.style.width = '0';
    cursor.style.height = '0';
})