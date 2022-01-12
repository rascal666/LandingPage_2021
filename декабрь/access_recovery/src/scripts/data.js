const dom = document.querySelector('.js-body')

let currentData = new Date();
const month = currentData.getMonth() + 1
let data = currentData.getDate() + '' + month + '21'


dom.innerHTML = dom.innerHTML.replace(/curData/gi, data)