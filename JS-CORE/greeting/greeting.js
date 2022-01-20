
var date = new Date()
var hour = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var message = "Este seara iar ora este " + hour + ":" + minutes + ":" + seconds
var message1 = "Este zii afara iar ora este " + hour + ":" + minutes + ":" + seconds
console.log(message)
var isNight = hour
var isDay = hour
if (isNight > 17) {
    document.write('<h1>' + message + '</h1>')
}
else {
    if (isDay < 17) {
        document.write('<h2>' + message1 + '</h2>')
    }
}