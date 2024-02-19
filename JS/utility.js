

function setBgColorById (elementId) {
    const element = document.getElementById(elementId) ;
    element.classList.add('bg-green-500')
    element.classList.add('hover:bg-green-500')
}

function getElementValueById (elementId) {
    const element = document.getElementById(elementId) ;
    const elementValue = element.innerText ;
    const value = parseInt(elementValue) ;
    return value ;
}

function setElementValueById (elementId , value) {
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
}

function showElementById (elementId) {
    const element = document.getElementById(elementId) ;
    element.classList.remove('hidden')
}

function getInputValueById (elementId) {
    const element = document.getElementById(elementId) ;
    const value = element.value ;
    return value ;
}

function getElementById (elementId) {
    const element = document.getElementById(elementId) ;
    return element ;
}

