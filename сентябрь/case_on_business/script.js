window.onload = function () {
    //acardion
    let accordion = document.querySelector(".wrapper-accordion");
    let hidden = document.querySelectorAll(".hidden");
    let accordion__img = document.querySelectorAll(".accordion__img");


    accordion.addEventListener("click", function name(e) {

        let start = e.target.parentElement.getAttribute("start");
        for (let i of hidden) {
            end = i.getAttribute("end");
            if (start == end) {
                if (i.classList.contains("accordion__block") == true) {
                    stepsRemove(i.children, i.classList)
                    for (t of accordion__img) {
                        Img_end = t.getAttribute("imgN");
                        if (Img_end == end) {
                            t.classList.remove("accordion__img-rotate");
                        }
                    }

                } else {
                    stepsAdd(i.children, i.classList)
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



    function stepsAdd(arrChildren, arr) {
        let index = 0;
        let interval = setInterval(function () {
            arrChildren[index++].classList.add("accordion__block")
            if (index == arrChildren.length) {
                clearInterval(interval);
            }
        }, 50)

        arr.add("accordion__block");
    }


    function stepsRemove(arrChildren, arr) {
        let index = arrChildren.length - 1;
        let interval = setInterval(function () {
            arrChildren[index--].classList.remove("accordion__block")
            if (index == 0) {
                clearInterval(interval);
            }
        }, 50)

        setTimeout(() => arr.remove("accordion__block"), 50 * arrChildren.length - 1);

    }

    //popap
    let _mainContent = document.querySelector('.js-body')
    let _modalContent = document.querySelectorAll('.modal-wrapper-block')

    _mainContent.addEventListener('click', (e) => {
        let attr_Rel = e.target.parentElement.getAttribute('rel') //находим аттрибут попапа который открыли
        _modalContent.forEach(element => {
            attrPopup = element.getAttribute('data-popup')
            if (attrPopup == attr_Rel) { // сравниваем с аттрибутами модальных окн, если совпадают то
                console.log(element);
                element.classList.add('modal-block-show') // показываем модальное окно
                _mainContent.style.overflow = 'hidden' // отключаем прокрутку страницы

                // функция для закрытия модального окна 
                element.addEventListener('click', (clickClose_) => {
                    if (clickClose_.target.classList.contains('modal-wrapper-block') ||
                        clickClose_.target.classList.contains('modal-close')) {
                        element.classList.remove('modal-block-show')
                        element.children[0].classList.remove('modal-block-height')
                        _mainContent.style.overflow = 'auto' // включаем прокрутку страницы
                    }
                })

                // функция для закрытия модального окна через Esc
                document.addEventListener('keydown', (keyClose) => {
                    if (keyClose.keyCode == '27') {
                        element.classList.remove('modal-block-show')
                        _mainContent.style.overflow = 'auto' // включаем прокрутку страницы
                    }
                })

                //получаем высоту экрана (рабочей области)
                let height = document.documentElement.clientHeight

                //получаем высоту элемента
                let heightEl = element.children[0].clientHeight
                if (heightEl > height) {
                    element.children[0].classList.add('modal-block-height')
                    element.style.overflow = 'auto'
                }
            }
        });
    })

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
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



    // phone_js = document.querySelectorAll('.phone-js');
}












