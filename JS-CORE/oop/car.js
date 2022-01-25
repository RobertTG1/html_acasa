
var car = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    drive: function () {
        document.write('Driving car')
    },
   paint: function(color) {
        this.color = color 
   }
}
document.write('My cars color is ' + car.color + "<br>")
car.paint("blue")
document.write('My cars color is ' + car.color + "<br>")
car.drive()