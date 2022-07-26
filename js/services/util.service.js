export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    getCurrencySymbol,
    getRandomInt,
    makeLorem,
    getRandomColor,
    dispDateTime
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getCurrencySymbol(currCode) {
    const currencies = { ILS: '₪', USD: '$', EUR: '€' }
    return currencies[currCode]
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (wordCount > 0) {
        wordCount--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function dispDateTime(getDate, withTime) {
    let dt = new Date(getDate)
    var hours = dt.getHours()
    var minutes = dt.getMinutes()
    var ampm = (hours < 12 ? 'AM' : 'PM')
    if (ampm === 'PM' && hours > 12) {
        hours = hours - 12
    }
    if (minutes < 10) minutes = '0' + minutes

    var monthName = dt.toLocaleString('default', { month: 'short' })

    let todayDisp = hours + ':' + minutes + ' ' + ampm
    let monthDisp = monthName + ' ' + dt.getDate()
    let yearDisp = dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear()

    var today = new Date()

    if (dt.getDate() === today.getDate() && dt.getMonth() === today.getMonth() && dt.getFullYear() === today.getFullYear()) {
        return todayDisp 
    }
    else if (dt.getMonth() === today.getMonth() && dt.getFullYear() === today.getFullYear())
        return monthDisp + (withTime ? ', ' + todayDisp : '')
    else return yearDisp + (withTime ? ', ' + todayDisp : '')
}