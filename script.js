const name = document.getElementById('name')
const variant = document.getElementById('variant')
const phone = document.getElementById('phone')
const facultaty = document.getElementById('facult')
const address = document.getElementById('address')

const errorMessage = (elem, format) => `<span id='errorSpan'>Поле ${elem} має бути у вигляді ${format}</span>`

const validFunction = (regex, input, pole, format) => {
    if (!regex.test(input.value)){
        input.nextElementSibling ? null :
        input.insertAdjacentHTML('afterend', errorMessage(pole, format));
    } else {
        input.nextElementSibling ? input.nextElementSibling.remove() : null
    }
}

const isName = (name) => {
    validFunction(/^[А-Яа-яІіЇї]{2,} [А-ЯІЇ]\.[А-ЯІЇ]\.$/gi, name, "ПІБ", "ТТТТТТТ Т.Т.")
}

const isVariant = (variant) => {
    validFunction(/^(\d?[1-9]|[1-9]0)$/gi, variant, "Варіант", "ЧЧ")
}

const isPhone = (phone) => {
    validFunction(/\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/gi, phone, "Телефон", "(ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ")

}

const isFacult = (facult) => {
    validFunction(/^[А-ЯІЇ]{3,4}$/gi, facult, "Факультет", "ТТТ або ТТТТ")
}

const isAddres = (address) => {
    validFunction(/^[а-яії]{1,3}.\s[А-Яа-яІіЇї]{2,}$/gi, address, "Адреса", "м. ТТТТТТТ")
}

const submitFunc = (e) => {
    if (document.getElementsByTagName('span').length !== 0) {
        e.preventDefault() ;
    }
}


// скрипт для другого завдання
const colorInput = document.getElementById('colorInput')
const randomColor = cell => cell.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
const changeInputColor = cell => cell.style.background = colorInput.value

const changeRowColor = (cell) => {
    const table = cell.parentNode.parentNode;
    var rows = table.getElementsByTagName("tr") ;
        for(var i = 0; i <= rows.length; i++)
        {
            if(i%2==0){
                rows[i].style.backgroundColor =  colorInput.value;
            }
        }
}