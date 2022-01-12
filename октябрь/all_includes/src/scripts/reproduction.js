phone_js = document.querySelectorAll('.phone-js');


let _byRender = `
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
`;



class Ondata {
    constructor(dom) {
        this.domContent = document.querySelector('.onheading');
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
            kz: '_KZ_',
            free: '_РФ_',
            pay: '_РФ_',
            ua: '_YA_',
            don: '_ДНР&ЛНР_',
            by: '_РБ_',
        };
        // настройка id под страны
        this.generalId = {
            kz: '99593226',
            free: '99572059',
            pay: '99560299',
            ua: '99572059',
            don: '99572059',
            by: '99593226',
        };
        // аттребуты
        this.dataId = [
            'data-company',
            'data-company-id',
        ];

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
            console.log(this.utm);
        }

        // если элемент найден
        if (_dom) {

            //меняем значение событий
            _dom.innerHTML = _dom.innerHTML.replace(/_РФ_/gi, this.generalEvent[this.utm.utm_rascal])

            // если в списке с номерами есть подходящий под параметр номер то
            if (this.generalNumbers[this.utm.utm_rascal]) {
                const _numder = document.querySelectorAll('.phone-js');
                const _by = document.querySelector('.contact__by');
                const _contact__main = document.querySelector('.contact__main');
                const _note = document.querySelector('.phoneNote-js');
                const _list__li_ua = document.querySelector('.list__li_ua')
                const _item3 = document.querySelector('.item3')
                const _list__li_by = document.querySelector('.list__li_by')
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
                    _by.innerHTML = _byRender
                    _contact__main.style.display = 'none'
                }
                if (this.utm.utm_rascal == 'ua' || this.utm.utm_rascal == 'don') {
                    _list__li_ua.style.display = 'none'
                }

                if (this.utm.utm_rascal == 'by') {
                    _item3.style.display = 'none'
                    _list__li_by.style.display = 'none'
                }

                //меняем значение id аттрибутов у data-company, data-company, data-params
                this.params = document.querySelectorAll('.feedback-js');
                this.dataId.forEach(_dataId => { //_dataId массив с аттрибутами data-company, data-company,
                    this.params.forEach(element => {
                        element.setAttribute(_dataId, this.generalId[this.utm.utm_rascal])
                        element.setAttribute('data-params', `"{company_id":` + this.generalId[this.utm.utm_rascal] + `}`)
                    })
                })
            }

        } else {
            // если не нашли исходный элемент то пишем в консоль ошибку
            console.warn('Не удалось найти искомый элемент', dom);
            return false;
        }
        this.element = document.querySelector('.js-body');
        this.setInnerText()
        this.element = document.querySelector('.js-body');
        // =================================================================

    };
    setInnerText (utm, whyText, text) {
        if (this.utm.utm_rascal == utm) {
            this.element.innerHTML = this.element.innerHTML.replace(whyText, text);
            return this
        }
    }

}

// класс создали
const onData = new Ondata('.js-body');
// console.log(domContent);
let re = 'Год продаж на Пульсе цен в родном городе + продажи в 214 городах РФ на месяцы пикового спроса'
let by = '12 месяцев продаж на Пульсе цен + реклама в Яндексе на период усиления продаж'
// пользуешься созданным классом
onData.setInnerText("ua", /РФ/gi, "Украины");
onData.setInnerText("ua", /заказы со всей России или/gi, "заказы со всей страны или");
onData.setInnerText("ua", /Хочу заказы со всей России/gi, "Хочу заказы со всей Украины");
onData.setInnerText("ua", /реклама в Яндексе на период/gi, "реклама на Пульсе цен в период");
onData.setInnerText("ua", /двойной охват аудитории: с Пульса цен и из Яндекса/gi, "подключение рекламных форм на Пульсе цен. Настройка, запуск и ведение рекламной кампании экспертами  B2B-сегмента");
onData.setInnerText("ua", re, "Год продаж на Пульсе цен в родном городе + продажи в 25 крупных городах Украины на месяцы пикового спроса");

onData.setInnerText("kz", /всей РФ/gi, "всего Казахстана");
onData.setInnerText("kz", /заказы со всей России или/gi, "заказы со всей страны или");
onData.setInnerText("kz", /Яндекса/gi, "Google");
onData.setInnerText("kz", /Яндексе/gi, "Google");
onData.setInnerText("kz", /Хочу заказы со всей России/gi, "Хочу заказы со всего Казахстана");
onData.setInnerText("kz", re, "Год продаж на Пульсе цен в родном городе + продажи в 12 крупных городах Казахстана на месяцы пикового спроса");


onData.setInnerText("by", /больше заказов в сезон/gi, "первые места в каталоге на самые горячие месяцы сезона;");
onData.setInnerText("by", /самые конверсионные места в каталоге только в нужное время/gi, "больше заказов при том же бюджете;");
onData.setInnerText("by", /возможность протестировать/gi, "возможность протестировать премиум-размещение");
onData.setInnerText("by", /премиум-размещение/gi, "годовой доступ к базе готовых заявок");
onData.setInnerText("by", /двойной охват аудитории: с Пульса цен и из Яндекса/gi, "повышение конверсии в сезон за счет рекламной кампании;");
onData.setInnerText("by", /настройка, запуск и ведение рекламной кампании экспертами  B2B-сегмента/gi, "дополнительный поток заявок в нужные месяцы;");
onData.setInnerText("by", /годовой доступ к базе готовых заявок/gi, "годовой доступ к базе готовых заявок.");
onData.setInnerText("by", by, "12 месяцев продаж на Пульсе цен + рекламная кампания на период усиления продаж");
onData.setInnerText("by", /без больших/gi, "без лишних");
onData.setInnerText("by", re, "Год продаж на Пульсе цен в 1 городе + продажи во всех крупных городах России или Украины на месяцы пикового спроса ");


onData.setInnerText("don", /заказы со всей РФ/gi, "заказы со всей Украины или России");
onData.setInnerText("don", /со всей России/gi, "со всей страны");
onData.setInnerText("don", /реклама в Яндексе на/gi, "реклама на Пульсе цен в период");
onData.setInnerText("don", /двойной охват аудитории: с Пульса цен и из Яндекса/gi, "подключение рекламных форм на Пульсе цен. Настройка, запуск и ведение рекламной кампании экспертами  B2B-сегмента");
onData.setInnerText("don", /заказы со всей России или из отдельных регионов при минимальном бюджете/gi, "заказы с России или Украины (или из отдельных регионов этих стран) при минимальном бюджете");
onData.setInnerText("don", re, "Год продаж на Пульсе цен в 1 городе + продажи во всех крупных городах России или Украины на месяцы пикового спроса ");











