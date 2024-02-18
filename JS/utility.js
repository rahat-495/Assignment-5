

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

