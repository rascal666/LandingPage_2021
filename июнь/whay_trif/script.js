
let feedback_Company = document.querySelectorAll(".feedback-js");

let dataCompany_value = "99572059"; //id компании - основа 99560299
let dataParamsValue = '{"company_id":99572059}'; //id компании - основа
let dataCompanyUrl = "https://help.pulscen.ru/"; //адрес компании - основа

let dataCompany_value_by = "99593226"; //id компании - беларусь
let dataParamsValue_by = '{"company_id":99593226}'; //id компании - беларусь
let dataCompanyUrl_by = "https://testovaya-blaginina-kv.pulscen.ru/"; //адрес компании - беларусь

//number
let phone = document.querySelectorAll(".phone-js");
let namberFree = "8 800 234 43 10"; //номер телефона - бесплатники
let namber_KZ = "8 10 800 1000 91 91"; //номер телефона - казахстан
let namber_UA_Don = "+380 (89) 120 50 46"; //номер телефона - украина и донецк
let namber_By = "8 10 800 1000 91 91"; //номер телефона - беларусь

//noteNumber
let phoneNote = document.querySelectorAll(".phoneNote-js");
let phoneNote_KZ = "Казахстана"; //номер телефона - казахстан
let phoneNote_Don = "Донецка и Луганска"; //номер телефона -  донецк и луганск
let phoneNote_UA = "Украины"; //номер телефона - украина
let phoneNote_By = "Беларуси"; //номер телефона - беларусь

let eventON = document.querySelector(".js-body");
let rerr = /_РФ_/gi;
let url = window.location.href;

//контакты по беларусии
let contact__by = document.querySelector(".contact__by");
let contact__main = document.querySelector(".contact__main");
contact__by.style.display = "none";

// основной id компании, если нужно параметры меняются под каждый случай
feedbackF("data-company", "data-company-id", "data-params", dataCompany_value, dataParamsValue);

//____________________ УА
if (url.indexOf("utm_rascal=ua") != -1) {
    numberF(namber_UA_Don, "tel:380891205046", phoneNote_UA);
    eventON.innerHTML = eventON.innerHTML.replace(rerr, "_УА_");

    //____________________ КЗ
} else if (url.indexOf("utm_rascal=kz") != -1) {
    numberF(namber_KZ, "tel:81080010009191", phoneNote_KZ);
    eventON.innerHTML = eventON.innerHTML.replace(rerr, "_КЗ_");

    //____________________ BY
} else if (url.indexOf("utm_rascal=by") != -1) {
    feedbackF("data-company", "data-company-id", "data-params", dataCompany_value_by, dataParamsValue_by);
    feedbackF_attr("data-company-url", dataCompanyUrl_by);
    numberF(namber_By, "tel:81080010009191", phoneNote_By);
    contact__by.style.display = "grid";
    contact__main.style.display = "none";
    eventON.innerHTML = eventON.innerHTML.replace(rerr, "_Беларусь_");

    //____________________ ДНР+ЛНР
} else if (url.indexOf("utm_rascal=dnr") != -1) {
    numberF(namber_UA_Don, "tel:380891205046", phoneNote_Don);
    eventON.innerHTML = eventON.innerHTML.replace(rerr, "_ДНР&ЛНР_");
}

//телефонные параметры
function numberF(numberV_phone, numberV_link, numberV_text) {
    // phone
    for (let index = 0; index < phone.length; index++) {
        phone[index].innerHTML = numberV_phone;
    }
    //link
    for (let index = 0; index < phone.length; index++) {
        phone[index].setAttribute("href", numberV_link);
    }
    //text
    for (let index = 0; index < phoneNote.length; index++) {
        phoneNote[index].innerHTML = numberV_text;
    }
}

//если нужно поменять аттребут
function feedbackF_attr(Feedback_Key, Feedback_value) {
    for (let index = 0; index < feedback_Company.length; index++) {
        const element = feedback_Company[index];
        element.setAttribute(Feedback_Key, Feedback_value);
    }
}

//id компании без
function feedbackF(D_company, D_company_id, D_params_id, id_value, params_value) {
    for (let index = 0; index < feedback_Company.length; index++) {
        const element = feedback_Company[index];
        element.setAttribute(D_company, id_value);
        element.setAttribute(D_company_id, id_value);
        element.setAttribute(D_params_id, params_value);
    }
}

$(".button").on("click", function (event) {
    let modal = $(this).attr("rel");
    $(".modal-wrapper-block").each(function () {
        if ($(this).attr("data-popup") === modal) $(this).fadeIn();
    });
});

$(".modal-wrapper-block").on("click", function (event) {
    if ($(event.target).is(".modal-close") || $(event.target).is(".modal-wrapper-block")) {
        $(this).fadeOut();
    }
    console.log(this);
});

$(document).keyup(function (event) {
    if (event.which == "27") {
        $(".modal-wrapper-block").fadeOut();
    }
});
