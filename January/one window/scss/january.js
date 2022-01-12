const heading = document.querySelector(".heading-ac");
const arrow = document.querySelector(".offer__arrow");
const arrowImg = document.querySelector(".offer__arrow-img");
const mainh = document.querySelector(".main");
const subtitle = document.querySelectorAll(".block-subtitle");

console.log(subtitle);

arrowImg.classList.add('offer__arrow-imgAnim')

let len = subtitle.length - 1;
let slid = 0;
let slidArrow = 0;
console.log(slid);

if (matchMedia) {
    let screen = window.matchMedia("(max-width:500px)");
    screen.addListener(changes);
    changes(screen);
}

function changes(screen) {
    if (screen.matches) {
        document.querySelector(".offer__img-mobail").style.display = "block";
        document.querySelector(".offer__arrow").style.display = "none";
        subtitle[1].style.display = "grid";
        subtitle[0].style.display = "grid";
    } else {
        arrySlider();
        window.document.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) {
                slid++;
                if (slid == len) {
                    heading.classList.add("heading-accent");
                    arrySlider();
                    arrow.classList.add('offer__arrowEndSlid')
                    arrow.classList.remove('offer__arrowFirstSlid')
                    arrowImg.classList.remove('offer__arrow-imgAnim')
                    heading.classList.add('heading-accent')
                    mainh.classList.add('main-bg')
                    slid = 0;
                    slidArrow = 1
                }
            } else if (e.deltaY < 0) {
                slid--;
                if (slid == -1) {
                    heading.classList.remove("heading-accent");
                    slid = 0;
                    arrySlider();
                    arrow.classList.remove('offer__arrowEndSlid')
                    arrow.classList.add('offer__arrowFirstSlid')
                    arrowImg.classList.add('offer__arrow-imgAnim')
                    mainh.classList.remove('main-bg')
                    slidArrow = 0

                }
            }
        });

        arrow.addEventListener('click', e => {
            if (slidArrow == 0) {
                slidArrow++
                arrySliderArr()
                arrow.classList.add('offer__arrowEndSlid')
                arrow.classList.remove('offer__arrowFirstSlid')
                arrowImg.classList.remove('offer__arrow-imgAnim')
                heading.classList.add('heading-accent')
                mainh.classList.add('main-bg')


                slidArrow = 1
            } else if (slidArrow == 1) {
                slidArrow--
                arrySliderArr()
                arrow.classList.remove('offer__arrowEndSlid')
                arrow.classList.add('offer__arrowFirstSlid')
                arrowImg.classList.add('offer__arrow-imgAnim')
                mainh.classList.remove('main-bg')


                slidArrow = 0
            }

        })
    }
}

function arrySliderArr() {
    for (let index = 0; index < subtitle.length; index++) {
        subtitle[index].classList.add("keyAni");
        subtitle[index].classList.add("dDel");

        subtitle[slidArrow].classList.remove("dDel");
    }
}

function arrySlider() {
    for (let index = 0; index < subtitle.length; index++) {
        subtitle[index].classList.add("keyAni");
        subtitle[index].classList.add("dDel");

        subtitle[slid].classList.remove("dDel");
    }
}

// function animan() {
//     let keyframes = [
//         { opacity: 0.5 },
//         { left: -200 + 'px' },
//         { opacity: 1 },
//     ]
//     let options = {
//         duration: 500,
//         iterations: 1,
//     }
//     subtitle.animate(keyframes, options);
// }
