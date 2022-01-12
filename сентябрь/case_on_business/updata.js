phone_js = document.querySelectorAll('.phone-js');

by = `
<p>Позвоните по телефонам в Беларуси</p>
								<div class="col_cintact_futer">
									<div class="massenger_futer">
										<img src="https://www.pulscen.ru/system/ckeditor_assets/pictures/204255/content_r.png" alt="" />

										<a class="numder_futer fat" href="tel:+375173882537">+375 17 388 25 37​</a>
									</div>
									<div class="massenger_futer">
										<img src="https://www.pulscen.ru/system/ckeditor_assets/pictures/204255/content_r.png" alt="" />

										<a class="numder_futer fat" href="tel:+375445189191">+375 44 518 91 91</a>
									</div>
								</div>
								<p>Или на бесплатный международный номер:</p>
								<div class="col_cintact_futer">
									<div class="massenger_futer">
										<img src="https://www.pulscen.ru/system/ckeditor_assets/pictures/204255/content_r.png" alt="" />

										<a class="numder_futer fat" href="tel:81080010009191">8 10 800 1000 91 91</a>
									</div>
								</div>
`


class Ondata {
    constructor(dom) {

        this.utm = [];
        // номера телефонов стран
        this.generalNumbers = {
            kz: '8 10 800 1000 91 91',
            free: '8 800 234 43 10',
            pay: '8 800 100 91 91',
            ua: '+380 (89) 120 50 46',
            don: '+380 (89) 120 50 46',
            by: '8 10 800 1000 91 91',
        };
        this.generalNumbersSok = {
            kz: 'tel:81080010009191',
            free: 'tel:88002344310',
            pay: 'tel:88001009191',
            ua: 'tel:380891205046',
            don: 'tel:380891205046',
            by: 'tel:81080010009191',
        };
        // подписи к номерам телефонов стран
        this.generalNote = {
            kz: 'Казахстана',
            free: 'РФ',
            pay: 'РФ',
            ua: 'Украины',
            don: 'Донецка и Луганска',
            by: '',
        };
        // события для разных стран
        this.generalEvent = {
            kz: '_КЗ_',
            free: '_РФ_',
            pay: '_РФ_',
            ua: '_УК_',
            don: '_ДНР&ЛНР_',
            by: '_РБ_',
        };
        // настройка id под страны
        this.generalId = {
            kz: '99572059',
            free: '99572059',
            pay: '99560299',
            ua: '99572059',
            don: '99572059',
            by: '99593226',
        };
        this.NP = {
            kz: '_НК_',
            free: '_НК_',
            pay: '_ПП_',
            ua: '_НК_',
            don: '_НК_',
            by: '_НК_',
        };
        // аттребуты
        this.dataId = [
            'data-company',
            'data-company-id',
        ];
        //ссылка
        this.dataLink = {
            kz: 'https://help.pulscen.ru/',
            ua: 'https://help.pulscen.ru/',
            don: 'https://help.pulscen.ru/',
            by: 'https://testovaya-blaginina-kv.pulscen.ru/',
            free: 'https://help.pulscen.ru/',
            pay: 'https://support.pulscen.ru/',
        };
        //название компании
        this.dataName = {
            kz: 'Пульс цен Онлайн',
            ua: 'Пульс цен Онлайн',
            don: 'Пульс цен Онлайн',
            by: 'Пульс цен Онлайн',
            free: 'Пульс цен Онлайн',
            pay: 'Пульс Цен - Техническая поддержка',
        }

        // берем элемент который передали в конструкторе
        const _dom = document.querySelector(dom);

        // преобразуем поисковой запрос в объект с параметрами для удобства
        if (window.location.search && window.location.search.length > 0) {
            this.utm = window.location.search
                .slice(1)
                .split('&')
                .map(function (param) {
                    return param.split('=');
                });
            this.utm = Object.fromEntries(this.utm);
        }

        // если элемент найден
        if (_dom) {
            //меняем значение событий
            _dom.innerHTML = _dom.innerHTML.replace(/_РФ_/gi, this.generalEvent[this.utm.utm_rascal])
            _dom.innerHTML = _dom.innerHTML.replace(/_НК_/gi, this.NP[this.utm.utm_rascal])

            // если в списке с номерами есть подходящий под параметр номер то
            if (this.generalNumbers[this.utm.utm_rascal]) {
                const _numder = document.querySelectorAll('.phone-js');
                const _by = document.querySelector('.contact__by');
                const _contact__main = document.querySelector('.contact__main');
                const _note = document.querySelector('.phoneNote-js');

                // если нашли этот элемент то вставляем в него телефон из списка
                if (_numder) {
                    _numder.forEach(element => {
                        element.innerHTML = this.generalNumbers[this.utm.utm_rascal]
                        element.setAttribute('href', this.generalNumbersSok[this.utm.utm_rascal])
                    });
                    // подставляем правильный комментарий к номеру
                    _note.innerHTML = this.generalNote[this.utm.utm_rascal]
                }
                // если беларусь то скрываем обычный номер, показываем блок РБ
                if (this.utm.utm_rascal == 'by') {
                    _by.innerHTML = by
                    _by.style.display = 'grid'
                    _contact__main.style.display = 'none'
                }

                //меняем значение id аттрибутов у data-company, data-company, data-params
                this.params = document.querySelectorAll('.feedback-js');
                this.dataId.forEach(_dataId => { //_dataId массив с аттрибутами data-company, data-company,
                    this.params.forEach(element => {
                        element.setAttribute(_dataId, this.generalId[this.utm.utm_rascal])
                        element.setAttribute('data-params', `"{company_id":` + this.generalId[this.utm.utm_rascal] + `}`)
                        element.setAttribute('data-company-url', this.dataLink[this.utm.utm_rascal])
                        element.setAttribute('data-company-name', this.dataName[this.utm.utm_rascal])
                    })
                })
            }

        } else {
            // если не нашли исходный элемент то пишем в консоль ошибку
            console.warn('Не удалось найти искомый элемент', dom);
            return false;
        }
        // =================================================================
        this.element = document.querySelector('.js-body');
    };

    setInnerText(utm, whyText, text) {
        if (this.utm.utm_rascal == utm) {
            this.element.innerHTML = this.element.innerHTML.replace(whyText, text);
            return this
        }
    }
}

const onData = new Ondata('.js-body');

onData.setInnerText("ua", /регионе РФ/gi, "регионе Украины");
onData.setInnerText("ua", /региона РФ/gi, "региона Украины");
onData.setInnerText("ua", /Загрузка до 1000/gi, "Загрузка до 500");
onData.setInnerText("ua", /Загрузка до 3000/gi, "Загрузка до 1000");
onData.setInnerText("ua", /Загрузка до 7000/gi, "Загрузка до 5000");
onData.setInnerText("ua", /• SSL-сертификат сайта/gi, "");
onData.setInnerText("ua", /• Модули доставки и онлайн-оплаты/gi, "");







