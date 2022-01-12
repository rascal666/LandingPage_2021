const jelks_js = document.querySelector('.elks-js')

const array_img = [
    'https://www.pulscen.ru/system/ckeditor_assets/pictures/292304/content_frame_2.png',
    'https://www.pulscen.ru/system/ckeditor_assets/pictures/292303/content_frame_3.png',
    'https://www.pulscen.ru/system/ckeditor_assets/pictures/292302/content_frame_4.png'
]

let num = 0

function numElka () {

    if (num <= array_img.length - 1) {
        jelks_js.src = array_img[num]
        setTimeout(numElka, 1000, ++num)

    }
    else {
        num = 0
        setTimeout(numElka, 1000)
    }
}

setTimeout(numElka, 1000)





// array_img.forEach(element => {
//     setInterval(() => jelks_js.src = element, 2000)
//     setInterval(() => console.log(element), 2000)
// })







