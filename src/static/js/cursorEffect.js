const cursor = document.querySelector('.cursor');
const cursorColor = cursor.getAttribute('color');
const cursorSize = cursor.getAttribute('size');

cursor.style.border = `${cursorSize} solid ${cursorColor}`;
cursor.style.color = cursorColor;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

function cursorEffect(componentClassName, hoverText = '', hoverColor = cursorColor, hoverSize = '5em', hoverThickness = '2.5px', fontSize = '1em') {
    
    component = document.querySelector(`.${componentClassName}`);

    component.addEventListener('mouseover', () => {
        cursor.innerText = hoverText;
        cursor.style.fontSize = fontSize;
        cursor.style.border = `${hoverThickness} solid ${hoverColor}`;
        cursor.style.color = hoverColor;
        cursor.style.width = hoverSize;
        cursor.style.height = hoverSize;
    })

    component.addEventListener('mouseout', () => {
        cursor.style.border = `${cursorSize} solid ${cursorColor}`;
        cursor.style.color = cursorColor;
        cursor.innerText = '';
        cursor.style.width = '0';
        cursor.style.height = '0';
    })
}