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
            kzr: '8 10 800 1000 91 91',
            free: '8 800 234 43 10',
            pay: '8 800 100 91 91',
            ua: '+380 (89) 120 50 46',
            don: '+380 (89) 120 50 46',
            by: '8 10 800 1000 91 91',
            msk: '8 800 234 43 10',
            msk_pay: '8 800 100 91 91',
            minsk: '8 10 800 1000 91 91',
            rostov: '8 800 234 43 10',
            rostov_pay: '8 800 100 91 91',
            kdr: '8 800 234 43 10',
            kdr_pay: '8 800 100 91 91',
            chelyabinsk: '8 800 234 43 10',
            chelyabinsk_pay: '8 800 100 91 91',
            samara: '8 800 234 43 10',
            samara_pay: '8 800 100 91 91',
            bashkiria: '8 800 234 43 10',
            sochi: '8 800 234 43 10',
            sochi_pay: '8 800 100 91 91',

        };

        this.generalNumbersSok = {
            kz: 'tel:81080010009191',
            kzr: 'tel:81080010009191',
            free: 'tel:88002344310',
            pay: 'tel:88001009191',
            ua: 'tel:380891205046',
            don: 'tel:380891205046',
            by: 'tel:81080010009191',
            msk: 'tel:88002344310',
            mskPay: 'tel:88001009191',
            minsk: 'tel:81080010009191',
            rostov: 'tel:88002344310',
            rostov_pay: 'tel:81080010009191',
            kdr: 'tel:88002344310',
            kdr_pay: 'tel:88001009191',
            chelyabinsk: 'tel:88002344310',
            chelyabinsk_pay: 'tel:88001009191',
            samara: 'tel:88002344310',
            samara_pay: 'tel:88001009191',
            bashkiria: 'tel:88002344310',
            sochi: 'tel:88002344310',
            sochi_pay: 'tel:88001009191',
        };
        // подписи к номерам телефонов стран
        this.generalNote = {
            kz: 'Казахстана',
            kzr: 'Казахстана',
            free: 'РФ',
            pay: 'РФ',
            ua: 'Украины',
            don: 'Донецка и Луганска',
            by: '',
            msk: 'Москвы и МО',
            mskPay: 'Москвы и МО',
            minsk: 'Минска',
            rostov: 'Ростова-на-Дону',
            rostov_pay: 'Ростова-на-Дону',
            kdr: 'Краснодара',
            kdr_pay: 'Краснодара',
            chelyabinsk: 'Челябинска',
            chelyabinsk_pay: 'Челябинска',
            samara: 'Самары',
            samara_pay: 'Самары',
            bashkiria: 'Башкирии',
            sochi: 'Сочи',
            sochi_pay: 'Сочи',

        };
        // события для разных стран
        this.generalEvent = {
            kz: '_КЗ_',
            kzr: '_КЗ_',
            free: '_РФ_',
            pay: '_РФ_',
            ua: '_УК_',
            don: '_ДНР&ЛНР_',
            by: '_РБ_',
            msk: '_Москва_',
            mskPay: '_Москва_',
            minsk: '_Минск_',
            rostov: '_Ростов_',
            rostov_pay: '_Ростов_',
            kdr: '_Краснодар_',
            kdr_pay: '_Краснодар_',
            chelyabinsk: '_Челябинск_',
            chelyabinsk_pay: '_Челябинск_',
            samara: '_Самара_',
            samara_pay: '_Самара_',
            bashkiria: '_Башкирия_',
            sochi: '_Сочи_',
            sochi_pay: '_Сочи-ПП_',


        };
        // настройка id под страны
        this.generalId = {
            kz: '99572059',
            kzr: '99572059',
            free: '99572059',
            pay: '99560299',
            ua: '99572059',
            don: '99572059',
            by: '99593226',
            msk: '99572059',
            mskPay: '99560299',
            minsk: '99593226',
            rostov: '99572059',
            rostov_pay: '99560299',
            kdr: '99572059',
            kdr_pay: '99560299',
            chelyabinsk: '99572059',
            chelyabinsk_pay: '99560299',
            samara: '99572059',
            samara_pay: '99560299',
            bashkiria: '99572059',
            sochi: '99572059',
            sochi_pay: '99560299',


        };
        this.NP = {
            kz: '_НК_',
            kzr: '_НК_',
            free: '_НК_',
            pay: '_ПП_',
            ua: '_НК_',
            don: '_НК_',
            by: '_НК_',
            msk: '_НК_',
            mskPay: '_ПП_',
            minsk: '_НК_',
            rostov: '_НК_',
            rostov_pay: '_ПП_',
            kdr: '_НК_',
            kdr_pay: '_ПП_',
            chelyabinsk: '_НК_',
            chelyabinsk_pay: '_ПП_',
            samara: '_НК_',
            samara_pay: '_ПП_',
            bashkiria: '_НК_',
            sochi: '_НК_',
            sochi_pay: '_ПП_',
        };
        // аттребуты
        this.dataId = [
            'data-company',
            'data-company-id',
        ];
        //ссылка
        this.dataLink = {
            kz: 'https://help.pulscen.ru/',
            kzr: 'https://help.pulscen.ru/',
            ua: 'https://help.pulscen.ru/',
            don: 'https://help.pulscen.ru/',
            by: 'https://testovaya-blaginina-kv.pulscen.ru/',
            free: 'https://help.pulscen.ru/',
            pay: 'https://support.pulscen.ru/',
            msk: 'https://help.pulscen.ru/',
            mskPay: 'https://support.pulscen.ru/',
            minsk: 'https://testovaya-blaginina-kv.pulscen.ru/',
            rostov: 'https://help.pulscen.ru/',
            rostov_pay: 'https://support.pulscen.ru/',
            kdr: 'https://help.pulscen.ru/',
            kdr_pay: 'https://support.pulscen.ru/',
            chelyabinsk: 'https://help.pulscen.ru/',
            chelyabinsk_pay: 'https://support.pulscen.ru/',
            samara: 'https://help.pulscen.ru/',
            samara_pay: 'https://support.pulscen.ru/',
            bashkiria: 'https://help.pulscen.ru/',
            sochi: 'https://help.pulscen.ru/',
            sochi_pay: 'https://support.pulscen.ru/',

        };
        //название компании
        this.dataName = {
            kz: 'Пульс цен Онлайн',
            kzr: 'Пульс цен Онлайн',
            ua: 'Пульс цен Онлайн',
            don: 'Пульс цен Онлайн',
            by: 'Пульс цен Онлайн',
            free: 'Пульс цен Онлайн',
            pay: 'Пульс Цен - Техническая поддержка',
            msk: 'Пульс цен Онлайн',
            mskPay: 'Пульс Цен - Техническая поддержка',
            minsk: 'Пульс цен Онлайн',
            rostov: 'Пульс цен Онлайн',
            rostov_pay: 'Пульс Цен - Техническая поддержка',
            kdr: 'Пульс цен Онлайн',
            kdr_pay: 'Пульс Цен - Техническая поддержка',
            chelyabinsk: 'Пульс цен Онлайн',
            chelyabinsk_pay: 'Пульс Цен - Техническая поддержка',
            samara: 'Пульс цен Онлайн',
            samara_pay: 'Пульс Цен - Техническая поддержка',
            bashkiria: 'Пульс цен Онлайн',
            sochi: 'Пульс цен Онлайн',
            sochi_pay: 'Пульс Цен - Техническая поддержка',
        }

        this.dataImg = {
            kz: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/293244/content_illyustratsiya.png',
            kzr: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/293244/content_illyustratsiya.png',
            ua: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272682/content_krasnodar.png',
            don: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272682/content_krasnodar.png',
            by: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272682/content_krasnodar.png',
            free: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272682/content_krasnodar.png',
            pay: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272682/content_krasnodar.png',
            msk: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272688/content_moskva.png',
            mskPay: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272688/content_moskva.png',
            minsk: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272687/content_minsk.png',
            rostov: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272689/content_rostov.png',
            rostov_pay: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272689/content_rostov.png',
            kdr: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272682/content_krasnodar.png',
            kdr_pay: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272682/content_krasnodar.png',
            chelyabinsk: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272691/content_chelyabinsk.png',
            chelyabinsk_pay: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272691/content_chelyabinsk.png',
            samara: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272690/content_samara.png',
            samara_pay: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/272690/content_samara.png',
            bashkiria: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/280139/content_bashkartostan.png',
            sochi: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/289129/content_sochi.png',
            sochi_pay: 'https://www.pulscen.ru/system/ckeditor_assets/pictures/289129/content_sochi.png',
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

            const _tempUtm = {};

            for (let index = 0; index < this.utm.length; index++) {
                _tempUtm[this.utm[index][0]] = this.utm[index][1] ? this.utm[index][1] : undefined;
            }

            this.utm = _tempUtm;
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
                const general__img = document.querySelector('.img-ill__img');

                general__img.src = this.dataImg[this.utm.utm_rascal]
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
                if (this.utm.utm_rascal == 'by' || this.utm.utm_rascal == 'minsk') {
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


onData.setInnerText("pay", /Ваша заявка зафиксирована. Специалист по размещению товаров и услуг свяжется с вами./gi, "Ваша заявка зафиксирована. <br/> Ваш менеджер свяжется с вами.");
onData.setInnerText("msk_pay", /Ваша заявка зафиксирована. Специалист по размещению товаров и услуг свяжется с вами./gi, "Ваша заявка зафиксирована. <br/> Ваш менеджер свяжется с вами.");
onData.setInnerText("chelyabinsk_pay", /Ваша заявка зафиксирована. Специалист по размещению товаров и услуг свяжется с вами./gi, "Ваша заявка зафиксирована. <br/> Ваш менеджер свяжется с вами.");
onData.setInnerText("samara_pay", /Ваша заявка зафиксирована. Специалист по размещению товаров и услуг свяжется с вами./gi, "Ваша заявка зафиксирована. <br/> Ваш менеджер свяжется с вами.");
onData.setInnerText("kz", /Благодарим за обращение!/gi, "Қазақстанның Тәуелсіздік күні құтты болсын");
onData.setInnerText("kz", /Ваша заявка зафиксирована. Специалист по размещению товаров и услуг свяжется с вами./gi, "Сізге және сіздің жақындарыңызға амандық, зор денсаулық және жеңіс тілейміз!");

onData.setInnerText("kz", /Есть вопросы по работе портала/, "Портал туралы сұрақтарыңыз бар ма");
onData.setInnerText("kz", /Нажмите на кнопку, оставьте телефон, и специалист Пульса цен проведет бесплатную консультацию./, " 8 10 800 1000 91 91 нөміріне қоңырау шалыңыз немесе керісінше тапсырыс беріңіз.");
onData.setInnerText("kz", /Хочу бесплатную консультацию/gi, "Кеңес алуға өтініш қалдырыңыз");
onData.setInnerText("kz", /позвоните мне/gi, "Кеңес алуға өтініш қалдырыңыз");






