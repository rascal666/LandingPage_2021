window.onload = function () {
    let accordion = document.querySelector(".wrapper-accordion");
    let hidden = document.querySelectorAll(".hidden");
    let accordion__img = document.querySelectorAll(".accordion__img");
    let accordion__block_accent = document.querySelectorAll('.accordion__block_accent')


    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

        });
    };






    // window.addEventListener('scroll', function () {
    //     let _pageTop = document.querySelector('.pageTop')
    //     let scroll = pageYOffset

    //     if (scroll > 800) {
    //         _pageTop.style.display = 'grid'
    //     } else {
    //         _pageTop.style.display = 'none'

    //     }
    // });


    accordion.addEventListener("click", function name (e) {

        let start = e.target.parentElement.getAttribute("start");
        for (let i of hidden) {
            end = i.getAttribute("end");
            if (start == end) {
                if (i.classList.contains("accordion__block") == true) {
                    stepsRemove(i.children, i.classList)
                    note('смотреть полностью')
                    for (t of accordion__img) {
                        Img_end = t.getAttribute("imgN");
                        if (Img_end == end) {
                            t.classList.remove("accordion__img-rotate");
                        }
                    }
                } else {
                    stepsAdd(i.children, i.classList)
                    note('скрыть')
                    for (t of accordion__img) {
                        Img_end = t.getAttribute("imgN");
                        if (Img_end == end) {
                            t.classList.add("accordion__img-rotate");
                        }
                    }
                }
            }
        }
    })


    function note (e) {
        accordion__block_accent.forEach(element => {
            text = element.getAttribute("start");
            if (end == text) {
                element.children[0].innerHTML = e
            }
        });
    }


    function stepsAdd (arrChildren, arr) {
        let index = 0;
        let interval = setInterval(function () {
            arrChildren[index++].classList.add("accordion__block")
            if (index == arrChildren.length) {
                clearInterval(interval);
            }
        }, 50)
        arr.add("accordion__block");
    }


    function stepsRemove (arrChildren, arr) {
        let index = arrChildren.length - 1;
        let interval = setInterval(function () {
            arrChildren[index--].classList.remove("accordion__block")
            if (index == 0) {
                clearInterval(interval);
            }
        }, 50)
        setTimeout(() => arr.remove("accordion__block"), 50 * arrChildren.length - 1);
    }


    let _template = document.querySelector(".template");
    let _img = document.querySelector(".img-js");

    arrR = ["https://www.pulscenclub.ru/2018/test/ruslana/img/sssr.png", "https://www.pulscenclub.ru/2018/test/ruslana/img/lecdom.png", "https://www.pulscenclub.ru/2018/test/ruslana/img/lestorg.png", "https://www.pulscenclub.ru/2018/test/ruslana/img/vector.png", "https://www.pulscenclub.ru/2018/test/ruslana/img/agroprog.png", "https://www.pulscenclub.ru/2018/test/ruslana/img/products.jpg", "https://www.pulscenclub.ru/2018/test/ruslana/img/magnum.png"];

    _template.addEventListener("click", (e) => {
        if (e.target.classList == "item__bg") {
            let currentItem = e.target.getAttribute("rel");

            arrR.map((element, index) => {
                console.log(index);
                if (currentItem == index) {
                    _img.src = element;
                }
            });
        }
    });
}


