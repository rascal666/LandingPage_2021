

// аккардион

window.onload = function () {

    const block = document.querySelector('._slider');
    const general_fio = document.querySelector('.general_fio');
    const general_position = document.querySelector('.general_position');
    const info__text = document.querySelector('.info__text');
    const info__textHidden = document.querySelector('.info__textHidden');
    const heart__img_ = document.querySelector('.heart__img_');
    const item_b = document.querySelector('.item__btn')


    let _troetoc = document.querySelector(".troetoc");
    let accordion = document.querySelector(".wrapper-accordion");
    let hidden = document.querySelector(".hidden");
    let accordion__img = document.querySelectorAll(".accordion__img");

    const nameC = {
        item1: 'Мария Алюханова',
        item2: 'Мария Дюпина',
        item3: 'Денис Лыкошев',
        item4: 'Яна Тетенева',
        item5: 'Оксана Остафьева',
        item6: 'Марина Ведерникова',
        item7: 'имя7',
        item8: 'имя8',
    }
    const position = {
        item1: 'Эксперт по контенту на портале Пульс цен',
        item2: 'Руководитель отдела продаж',
        item3: 'Директор по маркетингу',
        item4: 'Ведущий специалист по продажам',
        item5: 'Руководитель отдела продаж',
        item6: 'Руководитель отдела продаж',
        item7: 'должность7',
        item8: 'должность8',
    }
    const text = {
        item1: 'Опытный специалист, понимающий все нюансы продающего контента. Дотошная, креативная, всегда работает на результат и достигает его. Наши клиенты, у которых',
        item2: 'О развитии портала и постоянном улучшении клиентских сервисов. ',
        item3: 'О причинах успеха и долголетия Пульса цен, о конкурентах, клиентах и трендах рынка.',
        item4: 'В Пульсе цен уже 6 лет. И все эти годы работает, наверное, на самом сложном рынке, с самой сложной аудиторией  –  московской.',
        item5: 'О новых возможностях и достижениях клиентов.',
        item6: 'О важности быстрой работы с клиентами. Полезные советы и лайфхаки.',
        item7: 'text7',
        item8: 'text8',
    }
    const textHidden = [
        {
            id: 1, item: 'Мария курирует товарное сопровождение, подтвердят. А еще, как у всякого настоящего профи, у Маши есть свой секрет успешных продаж, проверенный на реальных компаниях.',
        },
        {
            id: 2, item: '',
        },
        {
            id: 3, item: '',
        },
        {
            id: 4, item: '',
        },
        {
            id: 5, item: '',
        },
        {
            id: 6, item: '',
        },
        {
            id: 8, item: 'textHidden7',
        },
        {
            id: 8, item: 'textHidden8',
        },
    ]



    const img = {
        item1: 'https://www.youtube.com/embed/7BagqovIAHY',
        item2: 'https://www.youtube.com/embed/pQWdNa9CqQw',
        item3: 'https://www.youtube.com/embed/F8pGCtC2YLg',
        item4: 'https://www.youtube.com/embed/hmvmzU0gc68',
        item5: 'https://www.youtube.com/embed/SbbxLykfaz8',
        item6: 'https://www.youtube.com/embed/rLw6rytwb1U',
        item7: 'https://img4.goodfon.ru/original/1280x960/d/38/devushka-vzgliad-portret-15.jpg',
        item8: 'https://img5.goodfon.ru/wallpaper/original/4/df/boke-poza-devushka-milashka-aziatka-1.jpg',
    }



    block.addEventListener('click', (e) => {
        info__textHidden.classList.remove('textHidden-show')
        let currentAttr = e.target.parentNode.getAttribute('rel')
        const currentAttrId = Number(currentAttr.slice(4)) // получаем id слайда по которому кликнули

        if (e.target.parentNode.classList.contains('_slider__item') == true) {
            general_fio.innerHTML = nameC[currentAttr]
            general_position.innerHTML = position[currentAttr]
            info__text.innerHTML = text[currentAttr]
            heart__img_.src = img[currentAttr]

            textHidden.forEach(element => {
                if (currentAttrId == element.id) {
                    item_b.style.display = 'block' //включаем кнопку далее
                    _troetoc.classList.remove('_troetocHidden')
                    info__textHidden.innerHTML = ''
                    info__textHidden.innerHTML = element.item
                    console.log(element.id);
                    if (element.item == '') {
                        item_b.style.display = 'none' //отключаем кнопку далее
                        _troetoc.classList.add('_troetocHidden')
                    }
                }
            });
        }
    });


    accordion.addEventListener("click", function name(e) {
        if (e.target.parentElement.classList.contains('accordion')) {
            info__textHidden.classList.toggle('textHidden-show')
            _troetoc.classList.toggle('_troetocHidden')
        }

    })



    // swiper


    const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        // allowTouchMove: false,
        // grabCursor: true,
        longSwipesRatio: 0.5,

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            300: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });

    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute("href").substring(1);
            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }



}


