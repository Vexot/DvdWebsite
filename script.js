const selectors = ['.layer', '#github', '#twitter']

document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll(selectors).forEach(Layer => {
        const speed = Layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}