
window.onload = function () {
  let _mainContent = document.querySelector('.js-body')
  let _modalContent = document.querySelectorAll('.modal-wrapper-block')

  _mainContent.addEventListener('click', (e) => {
    let attr_Rel = e.target.parentElement.parentElement.getAttribute('rel') //находим аттрибут попапа который открыли
    _modalContent.forEach(element => {
      attrPopup = element.getAttribute('data-popup')
      if (attrPopup == attr_Rel) { // сравниваем с аттрибутами модальных окн, если совпадают то
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
        }

      }
    });
  })
}












