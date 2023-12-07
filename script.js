/* VEHICLE MODELS DISPLAY */
let activeCar = document.querySelector(".vehicles .active");
let activeData = activeCar.getAttribute('href');
document.querySelector(activeData.toString()).style.display = 'block';

const allCars = document.querySelectorAll(".vehicles a");
for (let i = 0; i < allCars.length; i++) {
    let car = allCars[i];
    car.onclick = () => {
        event.preventDefault();
        let activeCar = document.querySelector(".vehicles .active");
        let activeData = activeCar.getAttribute('href');
        document.querySelector(activeData.toString()).style.display = 'none';
        activeCar.classList.remove("active");
        car.classList.add('active');
        let newCarData = car.getAttribute('href');
        document.querySelector(newCarData.toString()).style.display = 'block';
    }
}