const panels = document.querySelectorAll('.panel');




panels.forEach(panel => {
    panel.addEventListener('click', () => {
        const xyzPanel = document.querySelector('.panel.xyz');
        xyzPanel.classList.remove('xyz');
        panel.classList.add('xyz');
    });
});

const y = document.querySelector('.box')


y.addEventListener('click', () => {
    y.classList.toggle('active')
})