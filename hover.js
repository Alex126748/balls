console.log(window.innerWidth);


if (window.innerWidth > 960){
    console.log('barev');
    

const containers = document.querySelectorAll('[data-active]');

containers.forEach(container => {
container.addEventListener('mouseenter', (event) => {
    containers.forEach(elem => {
        elem.classList.remove('active')
    })
    container.classList.add('active')
})
})
}