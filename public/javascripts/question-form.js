window.addEventListener('DOMContentLoaded', () => {
    const collapse = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapse.length; i++) {
        collapse[i].addEventListener('click', () => {
            collapse[i].classList.toggle('active')
            const content = collapse[i].nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        })
    }
})
