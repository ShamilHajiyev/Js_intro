// task 1:
// Date obyektindən istifadə etməklə elə şərtlər yazın ki,
//istifadəçi sayta girdiyi vaxta uyğun saytın body backgroundu dəyişsin
//və istifadəçiyə alert mesajı çıxarsın

//task 2:
//Math obyektindən istifadə etməklə Dairənin
//və Kvadratın sahələrini hesablayın

var hour = new Date();
hour = hour.getHours();

if(hour >= 9 && hour <= 17){
    document.body.style.backgroundColor = 'rgb(63, 147, 207)';
    alert('sun is shining:)')
}
else if((hour >= 20 && hour <= 23) || (hour >= 0 && hour <= 5)){
    document.body.style.backgroundColor = 'rgb(21, 15, 79)';
    alert('good night!');
}
else{
    document.body.style.backgroundColor = 'rgb(255, 170, 0)';
    alert('orange')
}

var side = 4;
var squareArea = Math.pow(side, 2);

var radius = 3;
var circleArea = Math.PI * Math.pow(radius, 2);

document.getElementById('square').innerHTML = `Area of square: ${squareArea}`
document.getElementById('circle').innerHTML = `Area of circle: ${circleArea}`