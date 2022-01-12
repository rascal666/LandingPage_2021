

// Плавный scroll


const anchors = document.querySelectorAll('.btn-scroll');
anchors.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = element.getAttribute("href").substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    })
});








